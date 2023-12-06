import { Button } from "../common/button";

export const Users = () => {
  return (
    <section className="users" id="users">
      <div className="users_box">
        <h4 className="text_title">Working with GET request</h4>
        <div className="users_box_cards">cards</div>
        <Button text="Show more" />
      </div>
    </section>
  );
};
