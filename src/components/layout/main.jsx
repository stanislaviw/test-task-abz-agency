import { useState } from "react";
import { Home } from "../home/home";
import { SignUp } from "../sign-up/sign-up";
import { Users } from "../users/users";

export const Main = () => {
  const [success, setSuccess] = useState(false);

  return (
    <main className="main">
      <Home />
      <Users success={success} />
      <SignUp setSuccess={setSuccess} success={success} />
    </main>
  );
};
