import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { passwordForgotPath, signUpPath } from "@/paths";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <CardCompact
          title="Sign In"
          description="Sign in to your account"
          className="w-full max-w-[420px] animate-fade-in-from-top"
          content={<SignInForm />}
          footer={
            <div className="flex justify-between items-center w-full">
              <Link
                href={signUpPath()}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                No account yet?
              </Link>

              <Link
                href={passwordForgotPath()}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Forgot Password?
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SignInPage;
