import { useEffect, useState } from "react";
import EntryCard from "./EntryCard";
import Card from "./diaryEntry";
import "../public/styles/App.css";
import axios from "axios";
import About from "./About";
import ViewEntry from "./view";
import UserInfo from "./Account";
import FavList from "./Fav";

function App() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [creationDate, setDate] = useState("");
  const [userId, setUserId] = useState(null);
  const [activePage, setActivePage] = useState("home");
  // const [isHidden, setHidden] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [username, setUsername] = useState("");
  const [likedEntries, setLikedEntries] = useState([]);
  const [totalEntries, setTotal] = useState(0);
  const [totalLikes, setLikes] = useState(0);
  const [profileImage, setProfile] = useState(null);

  const apiBaseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/api/user`, {
          withCredentials: true,
        });
        // console.log(data);

        setUserId(data.user_id);
        setUsername(data.username);
        setDate(data.creation_date);
        fetchEntries(data.user_id);
        fetchProfile(data.user_id);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data. Please log in.");
      }
    };

    const fetchProfile = async (user_id) => {
      try {
        const res = await axios.get(`${apiBaseUrl}/get-profile/${user_id}`, {
          withCredentials: true,
        });
        console.log(res.data.rows[0].profile_image);
        const imgUrl = res.data.rows[0].profile_image;
        setProfile(imgUrl);
      } catch (err) {
        console.log("Some error occured : ", err);
      }
    };

    const fetchEntries = async (user_id) => {
      try {
        const { data: res } = await axios.get(
          `${apiBaseUrl}/api/mydiary/${user_id}`,
          { withCredentials: true }
        );
        console.log(res);
        setLikedEntries(res.filter((entry) => entry.liked === true));
        var count = 0;
        res.forEach((entry) => {
          if (entry.liked === true) {
            count = count + 1;
          }
        });
        // console.log(count);
        setLikes(count);

        setEntries(res);
        //setting number of entries
        setTotal(res.length);

        // setLikes(likedEntries.length)
      } catch (error) {
        console.error("Error fetching diary entries:", error);
        setError("Failed to fetch diary entries.");
      }
    };

    fetchUserId();
  }, []);

  async function addNote(newNote) {
    if (!userId) return;

    try {
      const newEntry = { ...newNote, user_id: userId };
      const result = await axios.post(`${apiBaseUrl}/api/submit`, newEntry, {
        withCredentials: true,
      });
      // console.log(result.data);

      setEntries((prevEntries) => [result.data, ...prevEntries]);
    } catch (error) {
      console.error("Error adding entry:", error);
      setError("Failed to add new entry.");
    }
  }

  function handleClick(event) {
    event.preventDefault();
    const clicked = event.target.getAttribute("data-name");
    setActivePage(clicked);
    // setHidden(False);
  }

  async function deleteNote(id) {
    try {
      await axios.delete(`${apiBaseUrl}/api/delete/${id}`, {
        withCredentials: true,
      });
      setEntries((prevEntries) =>
        prevEntries.filter((entry) => entry.id !== id)
      );
    } catch (error) {
      console.error("Error deleting entry:", error);
      setError("Failed to delete entry.");
    }
  }

  function view_entry(entry) {
    setSelectedEntry(entry);
  }

  const toggleLike = async (entryID) => {
    // console.log(entryID);

    try {
      const res = await axios.post(
        `${apiBaseUrl}/toggle-like`,
        { id: entryID },
        { withCredentials: true }
      );
      const newLiked = res.data.liked;

      // Update entries
      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry.id === entryID ? { ...entry, liked: newLiked } : entry
        )
      );

      // Update likedEntries
      setLikedEntries((prevLikedEntries) => {
        const entry = entries.find((e) => e.id === entryID);
        if (!entry) return prevLikedEntries;

        const updatedEntry = { ...entry, liked: newLiked };

        if (newLiked) {
          // Add to liked entries if not already present
          if (!prevLikedEntries.some((e) => e.id === entryID)) {
            return [updatedEntry, ...prevLikedEntries];
          } else {
            return prevLikedEntries.map((e) =>
              e.id === id ? updatedEntry : e
            );
          }
        } else {
          // Remove from liked entries
          return prevLikedEntries.filter((e) => e.id !== entryID);
        }
      });
    } catch (error) {
      console.error("Error toggling like:", error);
      setError("Failed to toggle like status.");
    }
  };

  if (selectedEntry) {
    return (
      <ViewEntry
        date={selectedEntry.dt}
        subject={selectedEntry.sub}
        content={selectedEntry.cont}
        entryNo={selectedEntry.entry_no}
        id={selectedEntry.id}
        goBack={() => setSelectedEntry(null)}
      />
    );
  } else {
    return (
      <div className="app-layout">
        <header className="main-header">
          <ul>
            <li>
              <a
                href="#"
                onClick={handleClick}
                data-name="home"
                className="redirect">
                Home
              </a>
            </li>
          </ul>
          <ul className="options">
            <li>
              <a
                href="#"
                data-name="Fav"
                onClick={handleClick}
                className="redirect">
                Fav
              </a>
            </li>
            <li>
              <a
                href="#"
                data-name="About"
                onClick={handleClick}
                className="redirect">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                data-name="Account"
                onClick={handleClick}
                className="redirect">
                Account
              </a>
            </li>
          </ul>
        </header>

        {activePage === "home" && (
          <div className="full-box">
            <h3 className="greet">Welcome , {username}</h3>
            <div className="home-content">
              <div className="left-panel">
                <EntryCard onAdd={addNote} user_id={userId} />
              </div>

              <div className="vertical-line"></div>

              <div className="right-panel">
                <div className="entries-scroll-container">
                  <div className="entries">
                    {entries.map((entry, index) => {
                      const date = new Date(entry.dt);
                      const formattedDate = `${date.getUTCFullYear()}-${String(
                        date.getUTCMonth() + 1
                      ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(
                        2,
                        "0"
                      )}`;
                      // console.log(entry);

                      return (
                        <Card
                          onDelete={deleteNote}
                          key={entry.id || `entry-${index}`}
                          entry_id={entry.entryId || entry.id}
                          page={entry.entry_no}
                          dt={formattedDate}
                          sub={entry.sub}
                          liked={entry.liked}
                          cont={entry.cont}
                          viewClick={() => view_entry(entry)}
                          toggleLike={toggleLike}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "About" && (
          <>
            <About id={userId} />
          </>
        )}
        {activePage === "Fav" && (
          <>
            <div className="fav-page">
              <h2>Here are your favourite entries...</h2>
              <div className="fav-list">
                {likedEntries.map((entry, index) => {
                  const date = new Date(entry.dt);
                  const formattedDate = `${date.getUTCFullYear()}-${String(
                    date.getUTCMonth() + 1
                  ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(
                    2,
                    "0"
                  )}`;

                  return (
                    <FavList
                      key={entry.id || `entry-${index}`}
                      entryId={entry.id}
                      date={formattedDate}
                      sub={entry.sub}
                      cont={entry.cont}
                      page={entry.entry_no}
                      viewClick={() => view_entry(entry)}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
        {activePage === "Account" && (
          <>
            <UserInfo
              createdAt={creationDate}
              total_entries={totalEntries}
              username={username}
              total_likes={totalLikes}
              profile_image={profileImage}
            />
          </>
        )}
        <footer>Copyright reserved @MyDiary</footer>
      </div>
    );
  }
}

export default App;
