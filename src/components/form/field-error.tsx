import React from "react";
import { ActionState } from "./utils/to-action-state";

type Props = {
  actionState: ActionState;
  name: string;
};

export default function FieldError({ actionState, name }: Props) {
  console.log(actionState, name)
  const message = actionState.fieldErrors[name];
  if (!message) return null;
  return <span className="text-xs text-red-500">{message}</span>;
}
