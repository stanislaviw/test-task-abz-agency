import { Button } from "../common/button";
import BACKGROUND_URL from "../assets/home-background.png";
import { scrollToSection } from "../../units/scrollToSection";

export const Home = () => {
  return (
    <section className="home">
      <div className="home_box">
        <div className="home_box_text">
          <h4 className="home_box_text_title">
            Test assignment for front-end developer
          </h4>
          <p className="home_box_text_paragraph">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button text="Sign up" onClick={() => scrollToSection("sign-up")} />
        </div>
        <img
          src={BACKGROUND_URL}
          alt="background"
          className="home_background"
        />
      </div>
    </section>
  );
};
