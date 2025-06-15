import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../public/styles/Account.css";

function UserInfo(props) {
  useEffect(() => {
    if (props.profile_image) {
      setPreview(`${import.meta.env.VITE_API_URL}` + props.profile_image);
    }
  }, [props.profile_image]);

  console.log(props);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const date = new Date(props.createdAt);
  const formattedDate = `${date.getUTCFullYear()}-${String(
    date.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
      navigate("/MyDiary/login"); // or homepage
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/upload-image`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res.data.message);
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    }
  };

  return (
    <div className="user-info">
      <div
        className="avatar-wrapper"
        onClick={() => fileInputRef.current.click()}>
        <div
          className="user-img"
          style={{
            backgroundImage: `url(${preview || "/default-profile.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "10em",
            height: "10em",
            borderRadius: "50%",
          }}></div>
        <div className="plus-button">+</div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="user-details">
        <h3>
          <strong>Username : </strong>
          {props.username}
        </h3>
        <h3>Total Entries : {props.total_entries}</h3>
        <h3>Total Liked Entries : {props.total_likes}</h3>
        <h3>Joined MyDiary on {formattedDate}</h3>
        <button onClick={handleLogout} className="log-out">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
