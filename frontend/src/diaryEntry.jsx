import React from "react";
import { useState, useEffect } from "react";
import "../public/styles/Note.css";
import axios from "axios";
import viewEntry from "./view";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Card(props) {
  // console.log(props);
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const [liked, setLiked] = useState(props.liked);

  useEffect(() => {
    setLiked(props.liked);
  }, [props.liked]);

  const handleDelete = async (event) => {
    event.preventDefault();
    const ID = props.entry_id;
    props.onDelete(ID);
  };

  async function handleClick(event) {
    event.preventDefault();
    props.viewClick();
  }

  const handleLike = (event) => {
    event.preventDefault();
    props.toggleLike(props.entry_id);
    setLiked(!liked); // use parent's function
  };

  return (
    <form className="note">
      <h5>{props.dt}</h5>
      {/* <h4>{props.sub}</h4> */}
      <p>Entry No. {props.page}</p>
      {/* <p>{props.cont}</p> */}
      <div className="btn-box">
        <button onClick={handleLike} className="like-button">
          {liked ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
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
