import { signInPath } from "@/paths";
import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";

export const getAuthOrRedirect = async () => {
  const auth = await getAuth();
  if (!auth.user) {
    return redirect(signInPath());
  }

  return auth;
};
