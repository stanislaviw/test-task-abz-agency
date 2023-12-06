import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { Button } from "../common/button";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_box">
        <LogoIcon />
        <div className="header_box_buttons">
          <Button text="Users" />
          <Button text="Sign up" />
        </div>
      </div>
    </header>
  );
};
