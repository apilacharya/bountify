import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

interface PlaceholderProps {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
}

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: /* tw */ "w-16 h-16",
      } as React.HTMLAttributes<HTMLElement>)}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: /* tw */ "h-10",
      } as React.HTMLAttributes<HTMLElement>)}
    </div>
  );
};
export { Placeholder };
