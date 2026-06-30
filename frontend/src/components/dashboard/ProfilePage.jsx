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
      icon: <BookOpen size={28} className="text-violet-500" />,
      title: "Entries",
      value: totalEntries,
      border: "hover:border-violet-500",
    },
    {
      icon: <Heart size={28} className="text-pink-500" />,
      title: "Favorites",
      value: totalLikes,
      border: "hover:border-pink-500",
    },
    {
      icon: <User size={28} className="text-blue-500" />,
      title: "Status",
      value: "Active",
      border: "hover:border-blue-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-10">
        {/* Profile */}

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative">
            <img
              src={
                profileImage
                  ? `${apiBaseUrl}${profileImage}`
                  : `https://ui-avatars.com/api/?name=${username}`
              }
              alt={username}
              className="
                w-32 h-32
                md:w-36 md:h-36
                rounded-full
                object-cover
                border-4
                border-violet-500
                transition
                hover:scale-105
              "
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="
                absolute
                bottom-1
                right-1
                bg-violet-600
                hover:bg-violet-700
                p-3
                rounded-full
                transition
              "
            >
              <Camera size={18} className="text-white" />
            </button>

            <input
              hidden
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files[0])}
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white break-words">
              {username}
            </h1>

            <p className="text-emerald-400 mt-2">● Active User</p>

            <div className="flex justify-center md:justify-start items-center gap-2 text-slate-400 mt-4">
              <Calendar size={18} />

              <span>
                Joined on {new Date(creationDate).toLocaleDateString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`
                bg-slate-800
                rounded-2xl
                p-6
                border
                border-transparent
                ${stat.border}
                transition
              `}
            >
              {stat.icon}

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                {stat.value}
              </h2>

              <p className="text-slate-400 mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
