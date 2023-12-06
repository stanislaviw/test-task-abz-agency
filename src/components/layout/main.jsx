import { Home } from "../home/home";
import { SignUp } from "../sign-up/sign-up";
import { Users } from "../users/users";

export const Main = () => {
  return (
    <main className="main">
      <Home />
      <Users />
      <SignUp />
    </main>
  );
};
