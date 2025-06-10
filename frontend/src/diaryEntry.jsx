import React from "react";
import "../public/styles/Note.css";
import axios from "axios";
import viewEntry from "./view";

function Card(props) {
  console.log(props);

  const handleDelete = async (event) => {
    event.preventDefault();
    const ID = props.entry_id;
    props.onDelete(ID);

    console.log(ID);
    const url = `http://localhost:3000/api/delete/${ID}`;
    console.log(url);
    try {
      const res = await axios.delete(url);
      console.log(res);
      if (res.status == 200) {
        console.log("Deleted sucessfully!");
      } else {
        console.log("There's a problem in deleting the entry!");
      }
    } catch (error) {
      console.error("Error deleting the entry:", error);
      console.log("An error occured!!");
    }
  };

  async function handleClick(event) {
    event.preventDefault();
    props.viewClick();
  }

  return (
    <form className="note">
      <h5>{props.dt}</h5>
      {/* <h4>{props.sub}</h4> */}
      <p>Entry No. {props.page}</p>
      {/* <p>{props.cont}</p> */}
      <div className="btn-box">
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>

        <button className="view-btn" onClick={handleClick}>
          View
        </button>
      </div>
    </form>
  );
}

export default Card;
