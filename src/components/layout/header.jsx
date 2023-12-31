import { scrollToSection } from "../../units/scrollToSection";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { CommonButton } from "../common/button";

export const Header = () => {
  return (
    <header className="header media_padding">
      <div className="header_box">
        <a href="https://stanislaviw.github.io/test-task-abz-agency">
          <LogoIcon />
        </a>
        <div className="header_box_buttons">
          <CommonButton text="Users" onClick={() => scrollToSection("users")} />
          <CommonButton
            text="Sign up"
            onClick={() => scrollToSection("sign-up")}
          />
        </div>
      </div>
    </header>
  );
};
