import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { Button } from "../common/button";

export const Header = () => {
  return (
    <header>
      <div>
        <LogoIcon />
        <div>
          <Button text="Users" />
          <Button text="Sign up" />
        </div>
      </div>
    </header>
  );
};
