import DashboardHeader from "../components/dashboard/DashboardHeader";
import Welcome from "../components/dashboard/Welcome";
import StatsCards from "../components/dashboard/StatsCards";
import RecentEntries from "../components/dashboard/RecentEntries";
import FavoritesPage from "../components/dashboard/FavouritesPage";
import ProfilePage from "../components/dashboard/ProfilePage";
import AboutPage from "../components/dashboard/AboutPage";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WritingAnalytics from "../components/dashboard/WritingAnalytics";
import AllEntriesPage from "../components/dashboard/AllEntries";
import CalendarPage from "../components/dashboard/CalendarPage";
import WriteEntryPage from "../components/dashboard/WriteEntryPage";
import { PenLine, ChevronRight } from "lucide-react";

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
  const [mood, setMood] = useState("😊 Happy");

  const filteredEntries = entries.filter((entry) => {
    const query = search.trim().toLowerCase();

    if (!query) return true;

    return (
      entry.sub.toLowerCase().includes(query) ||
      entry.cont.toLowerCase().includes(query) ||
      entry.entry_no.toString().includes(query) ||
      new Date(entry.dt).toLocaleDateString("en-GB").includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#050b1d] flex">
      {/* Sidebar */}

      <DashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
        logout={logout}
      />

      {/* Main Area */}

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}

        <DashboardHeader
          search={search}
          setSearch={setSearch}
          username={username}
          profileImage={profileImage}
          setActivePage={setActivePage}
          logout={logout}
        />

        {/* Page Content */}

        <main
          className="
            flex-1
            overflow-y-auto
            px-5
            py-6
            md:px-7
            md:py-8
            lg:px-10
            lg:py-10
            pb-24
            md:pb-8
          "
        >
          <AnimatePresence mode="wait">
            {/*  HOME  */}

            {activePage === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-[1400px] mx-auto"
              >
                {/* Welcome */}

                <Welcome username={username} />

                {/* Stats */}

                <StatsCards entries={entries} />

                {/* Main Dashboard */}

                <div className="space-y-6">
                  <WritingAnalytics entries={entries} />

                  <RecentEntries
                    entries={filteredEntries}
                    deleteNote={deleteNote}
                    toggleLike={toggleLike}
                    viewEntry={viewEntry}
                    setActivePage={setActivePage}
                  />

                  {/* Write Entry CTA */}

                  <button
                    onClick={() => setActivePage("WriteEntry")}
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-2xl
                      bg-gradient-to-r
                      from-violet-700
                      via-purple-600
                      to-violet-700
                      p-5
                      md:p-6
                      text-left
                      shadow-xl
                      shadow-violet-900/20
                      hover:-translate-y-0.5
                      transition-all
                      duration-300
                    "
                  >
                    {/* Glow */}

                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            w-12
                            h-12
                            shrink-0
                            rounded-xl
                            bg-white/10
                            border
                            border-white/15
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <PenLine size={23} className="text-white" />
                        </div>

                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            Write Today's Entry
                          </h3>

                          <p className="text-sm text-violet-100/70 mt-1">
                            Capture your thoughts, feelings and moments.
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={23}
                        className="
                          text-white/80
                          shrink-0
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/*  FAVORITES  */}

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

            {/*  CALENDAR  */}

            {activePage === "Calendar" && <CalendarPage entries={entries} />}

            {/*  ABOUT  */}

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

            {/*  ACCOUNT  */}

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

            {/*  ALL ENTRIES  */}

            {activePage === "AllEntries" && (
              <AllEntriesPage
                entries={entries}
                deleteNote={deleteNote}
                toggleLike={toggleLike}
                viewEntry={viewEntry}
                setActivePage={setActivePage}
              />
            )}

            {activePage === "WriteEntry" && (
              <motion.div
                key="write-entry"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <WriteEntryPage
                  title={subject}
                  setTitle={setSubject}
                  text={entry}
                  setText={setEntry}
                  date={date}
                  addNote={addNote}
                  mood={mood}
                  setMood={setMood}
                  setActivePage={setActivePage}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
