import { User, Calendar, BookOpen, Heart, Camera } from "lucide-react";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfilePage({
  username,
  profileImage,
  setProfile,
  creationDate,
  totalEntries,
  totalLikes,
}) {
  const fileInputRef = useRef();

  const apiBaseUrl = import.meta.env.VITE_API_URL;

  async function uploadImage(file) {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(`${apiBaseUrl}/upload-image`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProfile(res.data.path);
      toast.success("Profile picture updated!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    }
  }

  const stats = [
    {
      icon: BookOpen,
      title: "Entries",
      value: totalEntries,
      iconBg: "bg-violet-500/10",
      iconBorder: "border-violet-500/20",
      iconColor: "text-violet-400",
    },
    {
      icon: Heart,
      title: "Favorites",
      value: totalLikes,
      iconBg: "bg-pink-500/10",
      iconBorder: "border-pink-500/20",
      iconColor: "text-pink-400",
    },
    {
      icon: User,
      title: "Status",
      value: "Active",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto">
      {/* Page Heading */}

      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-violet-400 mb-2">
          Your account
        </p>

        <div className="flex items-center gap-3">
          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-violet-600/15
              border
              border-violet-500/25
              flex
              items-center
              justify-center
            "
          >
            <User size={22} className="text-violet-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Account
          </h1>
        </div>

        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Manage your profile and see your diary journey.
        </p>
      </div>

      {/* Profile Card */}

      <div
        className="
          relative
          overflow-hidden
          bg-slate-900/80
          border
          border-slate-800
          rounded-3xl
          shadow-xl
        "
      >
        {/* Decorative glows */}

        <div
          className="
            absolute
            -top-40
            -right-40
            w-96
            h-96
            rounded-full
            bg-violet-600/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-80
            h-80
            rounded-full
            bg-blue-600/5
            blur-3xl
          "
        />

        <div className="relative p-6 md:p-8 lg:p-10">
          {/* Profile */}

          <div className="flex flex-col md:flex-row md:items-center gap-7 md:gap-9">
            {/* Avatar */}

            <div className="relative shrink-0 mx-auto md:mx-0">
              <div
                className="
                  p-1
                  rounded-full
                  bg-gradient-to-br
                  from-violet-500
                  via-purple-500
                  to-blue-500
                "
              >
                <img
                  src={
                    profileImage
                      ? profileImage
                      : `https://ui-avatars.com/api/?name=${username}`
                  }
                  alt={username}
                  className="
                    w-28
                    h-28
                    md:w-32
                    md:h-32
                    rounded-full
                    object-cover
                    border-4
                    border-slate-900
                  "
                />
              </div>

              {/* Upload */}

              <button
                onClick={() => fileInputRef.current.click()}
                aria-label="Change profile picture"
                className="
                  absolute
                  bottom-1
                  right-1
                  w-10
                  h-10
                  rounded-xl
                  bg-violet-600
                  border
                  border-violet-400/30
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  shadow-violet-600/20
                  hover:bg-violet-500
                  transition-all
                "
              >
                <Camera size={18} />
              </button>

              <input
                hidden
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
            </div>

            {/* User Info */}

            <div className="text-center md:text-left min-w-0">
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                Profile
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white break-words">
                {username}
              </h2>

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Active User
                </div>

                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={16} />

                  <span>
                    Joined{" "}
                    {new Date(creationDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="h-px bg-slate-800 my-8 md:my-10" />

          {/* Stats */}

          <div>
            <div className="mb-5">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Your Diary
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                A quick look at your activity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      bg-slate-800/60
                      border
                      border-slate-700/70
                      rounded-2xl
                      p-5
                      md:p-6
                      transition-all
                      duration-300
                      hover:border-slate-600
                    "
                  >
                    <div
                      className={`
                        w-11
                        h-11
                        rounded-xl
                        ${stat.iconBg}
                        border
                        ${stat.iconBorder}
                        flex
                        items-center
                        justify-center
                      `}
                    >
                      <Icon size={21} className={stat.iconColor} />
                    </div>

                    <p className="text-xs uppercase tracking-wider text-slate-500 mt-5">
                      {stat.title}
                    </p>

                    <h4 className="text-3xl font-bold text-white mt-1">
                      {stat.value}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
