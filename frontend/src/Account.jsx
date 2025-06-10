import React from "react";
import "../public/styles/Account.css";

function UserInfo(props) {
  // console.log(props);

  const date = new Date(props.createdAt);
  const formattedDate = `${date.getUTCFullYear()}-${String(
    date.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;

  return (
    <div className="user-info">
      <div className="user-img"></div>
      <h3>
        <strong>Username : </strong>
        {props.username}
      </h3>
      <h3>Joined MyDiary on {formattedDate}</h3>
    </div>
  );
}

export default UserInfo;
