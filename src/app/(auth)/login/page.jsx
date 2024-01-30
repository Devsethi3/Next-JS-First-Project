import { singIn } from "@/lib/auth";
import React from "react";

const LoginPage = () => {
  const handleGithubLogin = async () => {
    "use server";
    await singIn("github");
  };
  return (
    <>
      <div>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
