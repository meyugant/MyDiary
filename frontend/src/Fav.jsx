import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../public/styles/Fav.css";

function FavList(props) {
  console.log(props);

  async function handleClick(event) {
    event.preventDefault();
    props.viewClick();
  }

  return (
    <div className="fav-entry">
      <div>
        <h5>{props.date}</h5>
        <h5>Entry No : {props.page}</h5>
        <div className="btn-box">
          <button className="view-btn" onClick={handleClick}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavList;
