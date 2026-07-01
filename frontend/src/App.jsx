import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewEntryPage from "./components/dashboard/ViewEntryPage";
import Dashboard from "./pages/Dashboard";
import toast from "react-hot-toast";
import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  const [entries, setEntries] = useState([]);
  const [creationDate, setDate] = useState("");
  const [userId, setUserId] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [username, setUsername] = useState("");
  const [totalEntries, setTotal] = useState(0);
  const [totalLikes, setLikes] = useState(0);
  const [profileImage, setProfile] = useState(null);
  const [subject, setSubject] = useState("");
  const [entry, setEntry] = useState("");
  const [journalDate, setJournalDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

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
        // fetchProfile(data.user_id);
        setProfile(data.profile_image);
        console.log(data.profile_image);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // const fetchProfile = async (user_id) => {
    //   try {
    //     const res = await axios.get(`${apiBaseUrl}/get-profile/${user_id}`, {
    //       withCredentials: true,
    //     });
    //     console.log(res.data.rows[0].profile_image);
    //     setProfile(res.data.path);
    //   } catch (err) {
    //     console.log("Some error occured : ", err);
    //   }
    // };

    const fetchEntries = async (user_id) => {
      try {
        const { data: res } = await axios.get(
          `${apiBaseUrl}/api/mydiary/${user_id}`,
          { withCredentials: true },
        );
        console.log(res);
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
        toast.error("Failed to fetch diary entries.");
      }
    };

    fetchUserId();
  }, [apiBaseUrl]);

  async function logout() {
    try {
      await axios.post(
        `${apiBaseUrl}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Failed to log out.");
    }
  }

  async function addNote(newNote) {
    if (!userId) return;

    try {
      const newEntry = { ...newNote, user_id: userId };
      const result = await axios.post(`${apiBaseUrl}/api/submit`, newEntry, {
        withCredentials: true,
      });
      // console.log(result.data);

      setEntries((prevEntries) => [result.data, ...prevEntries]);
      toast.success("Entry saved successfully!");
    } catch (error) {
      console.error("Error adding entry:", error);
      toast.error("Failed to add new entry.");
    }
  }

  async function deleteNote(id) {
    try {
      await axios.delete(`${apiBaseUrl}/api/delete/${id}`, {
        withCredentials: true,
      });
      setEntries((prevEntries) =>
        prevEntries.filter((entry) => entry.id !== id),
      );
      toast.success("Entry deleted!");
    } catch (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry.");
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
        { withCredentials: true },
      );
      const newLiked = res.data.liked;
      if (newLiked) {
        toast.success("Added to favorites ❤️");
      } else {
        toast("Removed from favorites", {
          icon: "💔",
        });
      }

      // Update entries
      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry.id === entryID ? { ...entry, liked: newLiked } : entry,
        ),
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  if (selectedEntry) {
    return (
      <ViewEntryPage
        entry={selectedEntry}
        goBack={() => setSelectedEntry(null)}
        toggleLike={toggleLike}
        deleteNote={deleteNote}
      />
    );
  } else {
    return (
      <div className="app-layout">
        <Dashboard
          activePage={activePage}
          username={username}
          profileImage={profileImage}
          setProfile={setProfile}
          entries={entries}
          subject={subject}
          setSubject={setSubject}
          entry={entry}
          setEntry={setEntry}
          date={journalDate}
          setDate={setJournalDate}
          addNote={addNote}
          deleteNote={deleteNote}
          toggleLike={toggleLike}
          viewEntry={view_entry}
          logout={logout}
          setActivePage={setActivePage}
          creationDate={creationDate}
          totalEntries={totalEntries}
          totalLikes={totalLikes}
        />
      </div>
    );
  }
}

export default App;
