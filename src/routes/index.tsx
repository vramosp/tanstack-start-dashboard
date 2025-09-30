import SignInViewPage from "@/features/auth/sign-in-view";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    // @ts-expect-error - userSession is not typed here
    if (context.userSession) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: SignInViewPage,
});
