import { useState } from "react";
import { Search, ChevronDown, LogOut, User } from "lucide-react";

export default function DashboardHeader({
  search,
  setSearch,
  username,
  profileImage,
  setActivePage,
  logout,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        h-[100px]
        shrink-0
        border-b
        border-slate-800
        bg-[#050b1d]/95
        backdrop-blur-xl
      "
    >
      <div
        className="
          h-full
          flex
          items-center
          gap-6
          px-6
          md:px-8
          lg:px-10
        "
      >
        {/*  SEARCH  */}

        <div className="flex-1">
          <div
            className="
              group
              flex
              h-[57px]
              w-full
              items-center
              rounded-2xl
              border
              border-slate-800
              bg-[#111a30]
              px-5
              transition-all
              duration-200
              focus-within:border-violet-500/40
              focus-within:ring-2
              focus-within:ring-violet-500/10
            "
          >
            <Search
              size={21}
              strokeWidth={1.8}
              className="
                shrink-0
                text-slate-500
                transition-colors
                duration-200
                group-focus-within:text-violet-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your diary..."
              className="
                ml-4
                w-full
                bg-transparent
                text-sm
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />
          </div>
        </div>

        {/*  PROFILE  */}

        <div className="relative shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              px-1.5
              py-1.5
              transition-all
              duration-200
              hover:bg-slate-900/80
            "
          >
            {/* Avatar */}

            <div className="relative">
              <img
                src={
                  profileImage
                    ? profileImage
                    : `https://ui-avatars.com/api/?name=${username}`
                }
                alt={username}
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-slate-700
                  object-cover
                  transition-colors
                  duration-200
                  group-hover:border-violet-500/50
                "
              />

              {/* Online indicator */}

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-[#050b1d]
                  bg-emerald-500
                "
              />
            </div>

            {/* User information */}

            <div className="hidden text-left sm:block">
              <p
                className="
                  max-w-[130px]
                  truncate
                  text-sm
                  font-semibold
                  text-white
                "
              >
                {username}
              </p>

              <p className="mt-0.5 text-[11px] text-slate-500">
                Personal diary
              </p>
            </div>

            {/* Dropdown icon */}

            <ChevronDown
              size={17}
              strokeWidth={1.8}
              className={`
                ml-1
                text-slate-500
                transition-all
                duration-300
                ${
                  open
                    ? "rotate-180 text-violet-400"
                    : "group-hover:text-slate-300"
                }
              `}
            />
          </button>

          {/*  DROPDOWN  */}

          {open && (
            <div
              className="
                absolute
                right-0
                top-full
                mt-3
                w-56
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-[#111a30]
                p-1.5
                shadow-2xl
                shadow-black/40
              "
            >
              {/* Profile */}

              <button
                onClick={() => {
                  setActivePage("Account");
                  setOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3.5
                  py-3
                  text-sm
                  text-slate-300
                  transition-all
                  duration-200
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                <User size={17} strokeWidth={1.9} className="text-slate-500" />

                <span>My Profile</span>
              </button>

              {/* Divider */}

              <div className="my-1.5 h-px bg-slate-800" />

              {/* Logout */}

              <button
                onClick={logout}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3.5
                  py-3
                  text-sm
                  text-red-400
                  transition-all
                  duration-200
                  hover:bg-red-500/10
                  hover:text-red-300
                "
              >
                <LogOut size={17} strokeWidth={1.9} />

                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
