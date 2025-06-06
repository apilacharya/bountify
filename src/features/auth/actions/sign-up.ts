"use server";
import { ticketsPath } from "../../../paths";

import {
  ActionState,
  toActionState,
} from "../../../components/form/utils/to-action-state";

import {
  formErrorToActionState,
  // toActionState,
} from "@/components/form/utils/to-action-state";
import { z } from "zod";
import { hash } from "@node-rs/argon2";
import { prisma } from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1)
      .max(191)
      .refine(
        (value) => !value.includes(" "),
        "Username cannot contain spaces"
      ),
    email: z
      .string()
      .min(1, { message: "Is required" })
      .max(191, { message: "Too long" })
      .refine(
        (val) => {
          if (val === "") return true; // skip email validation if blank
          return z.string().email().safeParse(val).success;
        },
        {
          message: "Invalid email",
        }
      ),
    password: z.string().min(6).max(191),
    confirmPassword: z.string().min(6).max(191),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export const signUp = async (_actionState: ActionState, formData: FormData) => {
  console.log(formData);
  try {
    const { username, email, password } = signUpSchema.parse(
      Object.fromEntries(formData)
    );

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username,
          },
          {
            email,
          },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return toActionState("ERROR", "Username already taken", formData);
      } else if (existingUser.email === email) {
        return toActionState("ERROR", "Email already taken", formData);
      }
    }

    const passwordHash = await hash(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);

    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return formErrorToActionState(error, formData);
    }
    return formErrorToActionState(error, formData);
  }
  redirect(ticketsPath());
};
