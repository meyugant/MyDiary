import { useState } from "react";
import { Bell, Search, ChevronDown, LogOut } from "lucide-react";

export default function DashboardHeader({
  search,
  setSearch,
  username,
  profileImage,
  setActivePage,
  logout,
}) {
  const [open, setOpen] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 px-4 md:px-6 lg:px-10 py-4">
        {/* Search */}

        <div className="flex-1">
          <div className="flex items-center bg-slate-900 rounded-2xl px-4 py-3 w-full">
            <Search size={20} className="text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your diary..."
              className="ml-3 bg-transparent outline-none text-white placeholder:text-slate-500 w-full"
            />
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-end items-center gap-4">
          {/* Notification */}

          {/* <button className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition">
            <Bell className="text-white" size={20} />
          </button> */}

          {/* Profile */}

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3"
            >
              <img
                src={
                  profileImage
                    ? profileImage
                    : `https://ui-avatars.com/api/?name=${username}`
                }
                alt={username}
                className="w-11 h-11 rounded-full object-cover border border-slate-700"
              />

              {/* Hide username only on very small screens */}

              <div className="hidden sm:block text-left">
                <p className="text-white font-semibold truncate max-w-[140px]">
                  {username}
                </p>

                <p className="text-xs text-emerald-400">● Online</p>
              </div>

              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-4 w-56 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 hover:bg-slate-800 text-white"
                  onClick={() => {
                    setActivePage("Account");
                    setOpen(false);
                  }}
                >
                  👤 My Profile
                </button>

                <hr className="border-slate-800" />

                <button
                  className="w-full flex items-center gap-3 px-5 py-4 text-red-400 hover:bg-red-600 hover:text-white transition"
                  onClick={logout}
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
