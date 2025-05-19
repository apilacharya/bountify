"use client";
import { useFormStatus } from "react-dom";
import { LucideLoader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cloneElement } from "react";
import clsx from "clsx";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement<{ className?: string }>;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
  size?: "default" | "sm" | "lg";
};

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && (
        <LucideLoader2
          className={clsx("h-4 w-4 animate-spin", { "mr-2": !!label })}
        />
      )}

      {label}
      {pending ? null : icon ? (
        <span className={clsx({ "ml-2": !!label })}>
          {cloneElement(icon, { className: "h-4 w-4" })}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
