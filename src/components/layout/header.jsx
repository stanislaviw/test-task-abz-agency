import { scrollToSection } from "../../units/scrollToSection";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { Button } from "../common/button";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_box">
        <a href="/">
          <LogoIcon />
        </a>
        <div className="header_box_buttons">
          <Button text="Users" onClick={() => scrollToSection("users")} />
          <Button text="Sign up" onClick={() => scrollToSection("sign-up")} />
        </div>
      </div>
    </header>
  );
};
