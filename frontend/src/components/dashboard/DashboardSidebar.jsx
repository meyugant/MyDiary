import { House, Heart, User, CircleHelp, LogOut } from "lucide-react";

export default function DashboardSidebar({
  activePage,
  setActivePage,
  logout,
}) {
  const menu = [
    {
      icon: <House size={20} />,
      title: "Dashboard",
      page: "home",
    },
    {
      icon: <Heart size={20} />,
      title: "Favorites",
      page: "Fav",
    },
    {
      icon: <User size={20} />,
      title: "Account",
      page: "Account",
    },
    {
      icon: <CircleHelp size={20} />,
      title: "About",
      page: "About",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}

      <aside className="hidden lg:flex w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6 flex-col">
        <h1 className="text-3xl font-bold text-violet-500 mb-10">📖 MyDiary</h1>

        <div className="space-y-3 flex-1">
          {menu.map((item) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition ${
                activePage === item.page
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-4 p-4 rounded-xl text-red-400 hover:bg-red-600 hover:text-white transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Tablet Sidebar */}

      <aside className="hidden md:flex lg:hidden w-20 bg-slate-900 border-r border-slate-800 min-h-screen py-6 flex-col items-center">
        <div className="text-3xl mb-8">📖</div>

        <div className="space-y-4 flex-1">
          {menu.map((item) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`p-3 rounded-xl transition ${
                activePage === item.page
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <button
          onClick={logout}
          className="p-3 rounded-xl text-red-400 hover:bg-red-600 hover:text-white transition"
        >
          <LogOut size={20} />
        </button>
      </aside>

      {/* Mobile Bottom Navigation */}

      <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around py-3 z-50">
        {menu.map((item) => (
          <button
            key={item.page}
            onClick={() => setActivePage(item.page)}
            className={`flex flex-col items-center text-xs ${
              activePage === item.page ? "text-violet-500" : "text-slate-400"
            }`}
          >
            {item.icon}
            <span className="mt-1">{item.title}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
