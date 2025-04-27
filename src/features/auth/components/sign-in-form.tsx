"use client";
import FieldError from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signIn } from "../sign-in";

const SignInForm = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);
  console.log("actionState", actionState);
  return (
    <Form action={action} actionState={actionState}>
      <Input name="email" placeholder="Email" />
      <FieldError actionState={actionState} name="email" />

      <Input name="password" placeholder="Password" />
      <FieldError actionState={actionState} name="password" />

      <SubmitButton label="Sign In" />
    </Form>
  );
};
export { SignInForm };
