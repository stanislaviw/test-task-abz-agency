import { useEffect, useState } from "react";
import { Button } from "../common/button";
import { UsersCard } from "./card";

export const Users = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, [page]);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <section className="users" id="users">
      <div className="users_box">
        <h4 className="text_title">Working with GET request</h4>
        <div className="users_box_cards">
          {users.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
        <Button text="Show more" onClick={handleClick} />
      </div>
    </section>
  );
};
