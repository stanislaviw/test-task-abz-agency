import { useEffect, useState } from "react";
import { CommonButton } from "../common/button";
import { UsersCard } from "./card";

export const Users = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [page]);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <section className="users" id="users">
      <div className="users_box media_padding">
        <h4 className="text_title">Working with GET request</h4>
        <div className="users_box_cards">
          {data?.users?.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
        {data?.total_pages !== page && (
          <CommonButton text="Show more" onClick={handleClick} />
        )}
      </div>
    </section>
  );
};
