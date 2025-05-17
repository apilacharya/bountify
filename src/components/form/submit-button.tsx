"use client";
import { useFormStatus } from "react-dom";
import { LucideLoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  label: string;
  icon?: React.ReactNode;
};

const SubmitButton = ({ label, icon }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {icon}
      {label}
    </Button>
  );
};

export { SubmitButton };
