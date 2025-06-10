import { useEffect, useState } from "react";
import EntryCard from "./EntryCard";
import Card from "./diaryEntry";
import "../public/styles/App.css";
import axios from "axios";
import About from "./About";
import ViewEntry from "./view";
import UserInfo from "./Account";

function App() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [creationDate, setDate] = useState("");
  const [userId, setUserId] = useState(null);
  const [activePage, setActivePage] = useState("home");
  // const [isHidden, setHidden] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [username, setUsername] = useState("");

  const apiBaseUrl = import.meta.env.API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/api/user`, {
          withCredentials: true,
        });
        console.log(data);

        setUserId(data.user_id);
        setUsername(data.username);
        setDate(data.creation_date);
        fetchEntries(data.user_id);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data. Please log in.");
      }
    };

    const fetchEntries = async (user_id) => {
      try {
        const { data: res } = await axios.get(
          `${apiBaseUrl}/api/mydiary/${user_id}`,
          { withCredentials: true }
        );
        setEntries(res);
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
      await axios.post(`${apiBaseUrl}/api/submit`, newEntry, {
        withCredentials: true,
      });
      setEntries((prevEntries) => [newNote, ...prevEntries]);
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

                      return (
                        <Card
                          onDelete={deleteNote}
                          key={entry.id || `entry-${index}`}
                          entry_id={entry.id}
                          page={entry.entry_no}
                          dt={formattedDate}
                          sub={entry.sub}
                          cont={entry.cont}
                          viewClick={() => view_entry(entry)}
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
            <p className="Fav">Favourite list will be available soon...</p>
          </>
        )}
        {activePage === "Account" && (
          <>
            <UserInfo createdAt={creationDate} username={username} />
          </>
        )}
        <footer>Copyright reserved @MyDiary</footer>
      </div>
    );
  }
}

export default App;
