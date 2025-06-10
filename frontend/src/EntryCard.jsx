import React, { useState, useEffect } from "react";
import "../public/styles/Card.css";
import axios from "axios";

function EntryCard(props) {
  const [entry, setEntry] = useState({
    user_id: props.user_id || "", // Added user_id
    dt: "",
    entry_no: "",
    sub: "",
    cont: "",
  });

  useEffect(() => {
    if (props.user_id) {
      setEntry((prev) => ({ ...prev, user_id: props.user_id }));
    }
  }, [props.user_id]);

  // // Fetch user_id from the backend
  // useEffect(() => {
  //   async function fetchUserId() {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/user", {
  //         withCredentials: true, // Ensures cookies/session are sent
  //       });

  //       setEntry((prev) => ({ ...prev, user_id: res.data.user_id }));
  //     } catch (error) {
  //       console.error("Error fetching user_id:", error);
  //     }
  //   }
  //   fetchUserId();
  // }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    if (name === "dt") {
      newValue = new Date(value).toISOString().slice(0, 10);
    } else if (name === "entry_no") {
      newValue = parseInt(value, 10); // Explicitly convert to number
      if (isNaN(newValue)) newValue = 0; // Fallback in case of invalid input
    }

    setEntry((prevValue) => ({
      ...prevValue,
      [name]: newValue,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload

    // Check if user_id is available
    if (!entry.user_id) {
      console.error("User not authenticated.");
      return;
    }

    try {
      // const res = await axios.post("http://localhost:3000/api/submit", entry, {
      //   withCredentials: true, // Ensures cookies/session are sent
      // });
      // console.log("Entry saved:", res.data);

      // Notify parent to update UI
      console.log(entry.dt);

      props.onAdd(entry);

      // Reset form fields (but keep user_id)
      setEntry({
        user_id: entry.user_id,
        entry_no: "",
        dt: "",
        sub: "",
        cont: "",
      });
    } catch (error) {
      console.error("Error submitting entry:", error);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Welcome to today's diary entry</h3>
      <br />

      <input
        onChange={handleChange}
        className="date-box"
        type="date"
        name="dt"
        value={entry.dt}
        required
      />
      <br />

      <input
        className="id"
        onChange={handleChange}
        type="number"
        min={0}
        name="entry_no"
        placeholder="Entry"
        value={entry.entry_no}
        required
      />
      <br />

      <input
        onChange={handleChange}
        className="input-box"
        type="text"
        placeholder="Subject"
        name="sub"
        value={entry.sub}
        autoCapitalize="on"
        required
      />
      <br />

      <textarea
        onChange={handleChange}
        className="content-box"
        placeholder="Your day (1000 words max.)"
        maxLength={1000}
        name="cont"
        value={entry.cont}
        autoCapitalize="on"
        required
      />
      <br />

      <button className="addbtn" type="submit">
        Add
      </button>
    </form>
  );
}

export default EntryCard;
