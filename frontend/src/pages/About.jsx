import {
  ArrowLeft,
  Users,
  Target,
  Heart,
  LockKeyhole,
  UserRound,
  Sparkles,
  Leaf,
  FileText,
  Rocket,
  CalendarDays,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "story",
    title: "Our Story",
  },
  {
    id: "mission",
    title: "Our Mission",
  },
  {
    id: "values",
    title: "Our Values",
  },
  {
    id: "what-is-mydiary",
    title: "What is MyDiary?",
  },
  {
    id: "who-is-it-for",
    title: "Who is it for?",
  },
  {
    id: "looking-ahead",
    title: "Looking Ahead",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const values = [
  {
    icon: LockKeyhole,
    title: "Privacy First",
    desc: "Your journal is yours and should remain personal.",
  },
  {
    icon: UserRound,
    title: "User Focused",
    desc: "We build around real people and real experiences.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    desc: "A clean, minimal and stress-free experience.",
  },
  {
    icon: Leaf,
    title: "Growth",
    desc: "We believe in reflection, learning and continuous improvement.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* 
          TOP BAR
       */}

      <header className="border-b border-slate-800/80 bg-slate-950/95">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-5">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            <ArrowLeft size={17} />
            Back to MyDiary
          </Link>
        </div>
      </header>

      {/* 
          PAGE HEADER
       */}

      <main>
        <section className="border-b border-slate-800/70 relative overflow-hidden">
          {/* Background glow */}

          <div
            className="
              absolute
              -top-40
              right-0
              w-96
              h-96
              rounded-full
              bg-violet-600/10
              blur-3xl
              pointer-events-none
            "
          />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex items-center gap-4">
              {/* Icon */}

              <div
                className="
                  shrink-0
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-2xl
                  bg-violet-600/20
                  border
                  border-violet-500/20
                  flex
                  items-center
                  justify-center
                  text-violet-400
                "
              >
                <Users size={30} strokeWidth={1.8} />
              </div>

              <div>
                <span
                  className="
                  text-violet-400
                  text-sm
                  font-semibold
                  tracking-[0.2em]
                  uppercase
                "
                >
                  Company
                </span>

                <h1
                  className="
                  mt-1
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  font-bold
                  tracking-tight
                  text-white
                "
                >
                  About MyDiary
                </h1>
              </div>
            </div>

            <p
              className="
              mt-6
              ml-0
              sm:ml-20
              max-w-2xl
              text-base
              sm:text-lg
              leading-8
              text-slate-400
            "
            >
              A personal journaling space designed to help you capture your
              thoughts, memories and moments that matter.
            </p>
          </div>
        </section>

        {/* 
            DOCUMENT AREA
         */}

        <section>
          <div
            className="
            max-w-6xl
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            py-12
            md:py-16
          "
          >
            <div
              className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_minmax(0,1fr)]
              gap-10
              lg:gap-16
            "
            >
              {/* 
                  SIDEBAR
               */}

              <aside className="hidden lg:block">
                <div className="sticky top-8">
                  <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-500
                    mb-4
                  "
                  >
                    On this page
                  </p>

                  <nav className="space-y-1">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          text-slate-500
                          hover:text-violet-400
                          hover:bg-slate-900
                          transition-all
                        "
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* 
                  MAIN CONTENT
               */}

              <article
                className="
                  max-w-4xl
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/40
                  p-6
                  sm:p-8
                  md:p-10
                  lg:p-12
                "
              >
                {/* 
                    OUR STORY
                 */}

                <section id="story" className="scroll-mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8">
                    <div>
                      <SectionHeading icon={FileText} title="Our Story" />

                      <div
                        className="
                        pl-0
                        sm:pl-14
                        text-sm
                        sm:text-base
                        leading-8
                        text-slate-400
                      "
                      >
                        <p>
                          MyDiary was created with a simple idea: everyone
                          deserves a comfortable and personal space to capture
                          their thoughts, emotions and memories.
                        </p>

                        <p className="mt-4">
                          Journaling should not feel complicated. MyDiary brings
                          together a clean writing experience and useful ways to
                          revisit the moments that matter.
                        </p>
                      </div>
                    </div>

                    {/* Small visual card */}

                    <div
                      className="
                        h-fit
                        rounded-2xl
                        border
                        border-slate-700
                        bg-slate-800/60
                        p-5
                      "
                    >
                      <div
                        className="
                        w-11
                        h-11
                        rounded-xl
                        bg-violet-500/10
                        text-violet-400
                        flex
                        items-center
                        justify-center
                        mb-4
                      "
                      >
                        <CalendarDays size={21} />
                      </div>

                      <h3 className="text-sm font-semibold text-white">
                        Small moments.
                      </h3>

                      <h3 className="text-sm font-semibold text-white">
                        A bigger story.
                      </h3>

                      <p
                        className="
                        mt-2
                        text-xs
                        leading-5
                        text-slate-500
                      "
                      >
                        Write today and have something meaningful to look back
                        on tomorrow.
                      </p>
                    </div>
                  </div>
                </section>

                <Divider />

                {/* 
                    MISSION
                 */}

                <section id="mission" className="scroll-mt-8">
                  <SectionHeading icon={Target} title="Our Mission" />

                  <div
                    className="
                    pl-0
                    sm:pl-14
                    text-sm
                    sm:text-base
                    leading-8
                    text-slate-400
                  "
                  >
                    <p>
                      Our mission is to make journaling simple, accessible and
                      meaningful for everyone.
                    </p>

                    <p className="mt-4">
                      We want to create a space where people can slow down,
                      reflect on their experiences and preserve the thoughts and
                      memories that matter to them.
                    </p>
                  </div>
                </section>

                <Divider />

                {/* 
                    VALUES
                 */}

                <section id="values" className="scroll-mt-8">
                  <SectionHeading icon={Heart} title="Our Values" />

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {values.map((value) => {
                      const Icon = value.icon;

                      return (
                        <div
                          key={value.title}
                          className="
                            group
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-900/70
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-violet-500/30
                            hover:bg-slate-800/70
                          "
                        >
                          <div
                            className="
                            w-11
                            h-11
                            rounded-xl
                            bg-violet-500/10
                            border
                            border-violet-500/10
                            text-violet-400
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            group-hover:bg-violet-500/15
                            group-hover:scale-105
                          "
                          >
                            <Icon size={21} />
                          </div>

                          <h3
                            className="
                            mt-5
                            text-base
                            font-semibold
                            text-white
                          "
                          >
                            {value.title}
                          </h3>

                          <p
                            className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                          "
                          >
                            {value.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <Divider />

                {/* 
                    WHAT IS MYDIARY
                 */}

                <section id="what-is-mydiary" className="scroll-mt-8">
                  <SectionHeading icon={FileText} title="What is MyDiary?" />

                  <div
                    className="
                    pl-0
                    sm:pl-14
                    text-sm
                    sm:text-base
                    leading-8
                    text-slate-400
                  "
                  >
                    <p>
                      MyDiary is a modern digital journaling application that
                      gives you a dedicated space to record your thoughts,
                      memories and emotions.
                    </p>

                    <p className="mt-4">
                      With features such as diary entries, mood tracking,
                      favourites, search and calendar-based organization,
                      MyDiary is designed to make writing and revisiting your
                      personal journey simple and enjoyable.
                    </p>
                  </div>
                </section>

                <Divider />

                {/* 
                    WHO IS IT FOR
                 */}

                <section id="who-is-it-for" className="scroll-mt-8">
                  <SectionHeading icon={Users} title="Who is it for?" />

                  <div
                    className="
                    pl-0
                    sm:pl-14
                    text-sm
                    sm:text-base
                    leading-8
                    text-slate-400
                  "
                  >
                    <p>
                      MyDiary is for anyone who wants a personal space to write
                      — whether you're journaling about your daily life,
                      processing emotions, tracking personal growth, or simply
                      capturing moments that matter.
                    </p>
                  </div>
                </section>

                <Divider />

                {/* 
                    LOOKING AHEAD
                 */}

                <section id="looking-ahead" className="scroll-mt-8">
                  <SectionHeading icon={Rocket} title="Looking Ahead" />

                  <div
                    className="
                    pl-0
                    sm:pl-14
                    text-sm
                    sm:text-base
                    leading-8
                    text-slate-400
                  "
                  >
                    <p>
                      We're continuously improving MyDiary based on user
                      feedback and the evolving needs of our community.
                    </p>

                    <p className="mt-4">
                      Our goal is to keep making journaling more meaningful,
                      accessible and enjoyable while staying focused on the
                      simplicity and privacy that make the experience special.
                    </p>
                  </div>
                </section>

                <Divider />

                {/* 
                    CONTACT
                 */}

                <section id="contact" className="scroll-mt-8">
                  <SectionHeading icon={Mail} title="Contact" />

                  <div
                    className="
                    pl-0
                    sm:pl-14
                    text-sm
                    sm:text-base
                    leading-8
                    text-slate-400
                  "
                  >
                    <p>
                      Have a question, suggestion or simply want to get in
                      touch? We'd love to hear from you.
                    </p>

                    <a
                      href="mailto:mydiaryweb@gmail.com"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-4
                        text-violet-400
                        hover:text-violet-300
                        font-medium
                        transition-colors
                      "
                    >
                      <Mail size={17} />
                      mydiaryweb@gmail.com
                    </a>
                  </div>
                </section>

                {/* 
                    CLOSING
                 */}

                <div
                  className="
                  mt-14
                  pt-8
                  border-t
                  border-slate-800
                "
                >
                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-500
                  "
                  >
                    <ShieldCheck size={17} className="text-violet-500" />

                    <span>
                      Built with privacy, simplicity and meaningful journaling
                      in mind.
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* 
          FOOTER
       */}

      <footer className="border-t border-slate-800/70">
        <div
          className="
          max-w-6xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          py-8
        "
        >
          <div
            className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
          "
          >
            {/* Brand */}

            <div className="flex items-center gap-3">
              <div
                className="
                w-9
                h-9
                rounded-xl
                bg-violet-500/10
                text-violet-400
                flex
                items-center
                justify-center
              "
              >
                <Heart size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">MyDiary</p>

                <p className="text-xs text-slate-600">
                  A journal for a better you.
                </p>
              </div>
            </div>

            {/* Links */}

            <div
              className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
              text-sm
            "
            >
              <Link
                to="/privacy"
                className="
                  text-slate-500
                  hover:text-violet-400
                  transition-colors
                "
              >
                Privacy Policy
              </Link>

              <span className="text-slate-700">•</span>

              <Link
                to="/terms"
                className="
                  text-slate-500
                  hover:text-violet-400
                  transition-colors
                "
              >
                Terms of Service
              </Link>

              <span className="text-slate-700">•</span>

              <a
                href="mailto:mydiaryweb@gmail.com"
                className="
                  text-slate-500
                  hover:text-violet-400
                  transition-colors
                "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 
   REUSABLE SECTION HEADING
 */

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <div
        className="
          shrink-0
          w-10
          h-10
          rounded-xl
          bg-violet-500/10
          border
          border-violet-500/15
          text-violet-400
          flex
          items-center
          justify-center
        "
      >
        <Icon size={19} />
      </div>

      <h2
        className="
        pt-1.5
        text-xl
        sm:text-2xl
        font-semibold
        text-white
      "
      >
        {title}
      </h2>
    </div>
  );
}

/* 
   DIVIDER
 */

function Divider() {
  return <div className="my-10 h-px bg-slate-800" />;
}
