import { signInPath } from "@/paths";
import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";

export const getAuthOrRedirect = async () => {
  const {user} = await getAuth();
  if (!user) {
    return redirect(signInPath());
  }

  return user;
};
