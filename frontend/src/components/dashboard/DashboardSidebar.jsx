import {
  House,
  Heart,
  User,
  CircleHelp,
  LogOut,
  CalendarDays,
  BookOpen,
} from "lucide-react";

export default function DashboardSidebar({
  activePage,
  setActivePage,
  logout,
}) {
  const menu = [
    {
      icon: House,
      title: "Dashboard",
      page: "home",
    },
    {
      icon: Heart,
      title: "Favorites",
      page: "Fav",
    },
    {
      title: "Calendar",
      icon: CalendarDays,
      page: "Calendar",
    },
    {
      icon: User,
      title: "Account",
      page: "Account",
    },
    {
      icon: CircleHelp,
      title: "About",
      page: "About",
    },
  ];

  return (
    <>
      {/*  DESKTOP SIDEBAR  */}

      <aside
        className="
          hidden
          lg:flex
          w-[296px]
          shrink-0
          min-h-screen
          flex-col
          bg-[#10192d]
          border-r
          border-slate-800
          px-5
          py-7
        "
      >
        {/* Logo */}

        <div className="flex items-center gap-3 px-3 mb-12">
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-violet-500/30
              bg-violet-600/15
              shadow-lg
              shadow-violet-600/10
            "
          >
            <BookOpen size={23} className="text-violet-400" strokeWidth={2} />
          </div>

          <div>
            <h1
              className="
                text-xl
                font-bold
                tracking-tight
                text-white
              "
            >
              MyDiary
            </h1>

            <p className="mt-0.5 text-xs text-slate-500">Your private space</p>
          </div>
        </div>

        {/* Navigation */}

        <div className="flex-1">
          <p
            className="
              px-3
              mb-4
              text-[11px]
              font-semibold
              uppercase
              tracking-widest
              text-slate-500
            "
          >
            Menu
          </p>

          <div className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.page;

              return (
                <button
                  key={item.page}
                  onClick={() => setActivePage(item.page)}
                  className={`
                    group
                    relative
                    w-full
                    h-[52px]
                    flex
                    items-center
                    gap-4
                    px-4
                    rounded-xl
                    text-[15px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                        : "text-slate-400 hover:bg-slate-800/70 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={21}
                    strokeWidth={isActive ? 2.2 : 1.9}
                    className={`
                      transition-colors
                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-slate-300"
                      }
                    `}
                  />

                  <span>{item.title}</span>

                  {isActive && (
                    <span
                      className="
                        absolute
                        right-4
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/90
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}

        <div
          className="
            mb-5
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            px-4
            py-4
          "
        >
          <p className="text-xs leading-5 text-slate-500">
            "Your story matters. Keep writing it."
          </p>
        </div>

        {/* Logout */}

        <div className="border-t border-slate-800 pt-4">
          <button
            onClick={logout}
            className="
              group
              w-full
              h-[50px]
              flex
              items-center
              gap-4
              px-4
              rounded-xl
              text-sm
              font-medium
              text-slate-400
              transition-all
              duration-200
              hover:bg-red-500/10
              hover:text-red-400
            "
          >
            <LogOut size={20} className="transition-colors" />

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/*  TABLET SIDEBAR  */}

      <aside
        className="
          hidden
          md:flex
          lg:hidden
          w-20
          shrink-0
          min-h-screen
          flex-col
          items-center
          bg-[#10192d]
          border-r
          border-slate-800
          py-6
        "
      >
        {/* Logo */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-violet-500/25
            bg-violet-600/15
            mb-10
          "
        >
          <BookOpen size={21} className="text-violet-400" />
        </div>

        {/* Navigation */}

        <div className="flex flex-1 flex-col items-center gap-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.page;

            return (
              <button
                key={item.page}
                onClick={() => setActivePage(item.page)}
                title={item.title}
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                      : "text-slate-500 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>

        {/* Logout */}

        <button
          onClick={logout}
          title="Logout"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-slate-500
            transition-all
            duration-200
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          <LogOut size={20} />
        </button>
      </aside>

      {/*  MOBILE BOTTOM NAV  */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          flex
          justify-around
          border-t
          border-slate-800
          bg-[#10192d]/95
          px-2
          py-2.5
          backdrop-blur-xl
          md:hidden
        "
      >
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.page;

          return (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`
                flex
                min-w-[58px]
                flex-col
                items-center
                justify-center
                gap-1
                rounded-xl
                py-1.5
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-violet-500/10 text-violet-400"
                    : "text-slate-500 hover:text-slate-300"
                }
              `}
            >
              <Icon size={19} />

              <span className="text-[10px] font-medium">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
