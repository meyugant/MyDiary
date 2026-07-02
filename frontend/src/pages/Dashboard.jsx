import DashboardHeader from "../components/dashboard/DashboardHeader";
import Welcome from "../components/dashboard/Welcome";
import StatsCards from "../components/dashboard/StatsCards";
import JournalEditor from "../components/dashboard/JournalEditor";
import RecentEntries from "../components/dashboard/RecentEntries";
import FavoritesPage from "../components/dashboard/FavouritesPage";
import ProfilePage from "../components/dashboard/ProfilePage";
import AboutPage from "../components/dashboard/AboutPage";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WritingAnalytics from "../components/dashboard/WritingAnalytics";
import AllEntriesPage from "../components/dashboard/AllEntries";

export default function Dashboard({
  activePage,
  username,
  profileImage,
  setProfile,
  entries,
  subject,
  setSubject,
  entry,
  setEntry,
  date,
  addNote,
  deleteNote,
  toggleLike,
  viewEntry,
  setActivePage,
  logout,
  creationDate,
  totalEntries,
  totalLikes,
}) {
  const [search, setSearch] = useState("");

  const filteredEntries = entries.filter((entry) => {
    const q = search.toLowerCase();

    return (
      entry.sub.toLowerCase().includes(q) ||
      entry.cont.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <DashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
        logout={logout}
      />

      <div className="flex-1 flex flex-col">
        <DashboardHeader
          search={search}
          setSearch={setSearch}
          username={username}
          profileImage={profileImage}
          setActivePage={setActivePage}
          logout={logout}
        />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-24 md:pb-8">
          <AnimatePresence mode="wait">
            {activePage === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
              >
                <Welcome username={username} />

                <StatsCards entries={entries} />
                <WritingAnalytics entries={entries} />

                <JournalEditor
                  title={subject}
                  setTitle={setSubject}
                  text={entry}
                  setText={setEntry}
                  date={date}
                  addNote={addNote}
                />

                <RecentEntries
                  entries={filteredEntries}
                  deleteNote={deleteNote}
                  toggleLike={toggleLike}
                  viewEntry={viewEntry}
                  setActivePage={setActivePage}
                />
              </motion.div>
            )}

            {activePage === "Fav" && (
              <motion.div
                key="fav"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <FavoritesPage
                  entries={entries}
                  viewEntry={viewEntry}
                  toggleLike={toggleLike}
                />
              </motion.div>
            )}

            {activePage === "About" && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AboutPage />
              </motion.div>
            )}

            {activePage === "Account" && (
              <motion.div
                key="account"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProfilePage
                  username={username}
                  profileImage={profileImage}
                  creationDate={creationDate}
                  totalEntries={totalEntries}
                  totalLikes={totalLikes}
                  setProfile={setProfile}
                />
              </motion.div>
            )}

            {activePage === "AllEntries" && (
              <AllEntriesPage
                entries={entries}
                deleteNote={deleteNote}
                toggleLike={toggleLike}
                viewEntry={viewEntry}
                setActivePage={setActivePage}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
