import {
  ArrowLeft,
  ShieldCheck,
  Database,
  LockKeyhole,
  UserRound,
  FileText,
  Cookie,
  Server,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "information",
    icon: Database,
    title: "1. Information We Collect",
  },
  {
    id: "usage",
    icon: Server,
    title: "2. How Your Data Is Used",
  },
  {
    id: "security",
    icon: LockKeyhole,
    title: "3. Data Security",
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "4. Your Journal Is Private",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "5. Cookies and Sessions",
  },
  {
    id: "rights",
    icon: UserRound,
    title: "6. Your Rights",
  },
  {
    id: "retention",
    icon: FileText,
    title: "7. Data Retention",
  },
  {
    id: "contact",
    icon: Mail,
    title: "8. Contact",
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/*  TOP BAR  */}

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

      {/*  PAGE HEADER  */}

      <main>
        <section className="border-b border-slate-800/70">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex items-center gap-3 text-violet-400 mb-6">
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-violet-500/10
                  border
                  border-violet-500/20
                  flex
                  items-center
                  justify-center
                "
              >
                <ShieldCheck size={20} />
              </div>

              <span className="text-sm font-semibold tracking-wider uppercase">
                Privacy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-400">
              This policy explains what information MyDiary collects, how it is
              used, and the choices you have regarding your personal data.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span
                className="
                px-3
                py-1.5
                rounded-lg
                bg-slate-900
                border
                border-slate-800
                text-slate-400
              "
              >
                Last updated: August 2026
              </span>

              <span className="text-slate-700">•</span>

              <span className="text-slate-500">
                Please review this policy carefully.
              </span>
            </div>
          </div>
        </section>

        {/*  CONTENT  */}

        <section>
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
              {/*  SIDEBAR  */}

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
                    {sections.map((section) => (
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
                        {section.title.replace(/^\d+\.\s/, "")}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/*  POLICY  */}

              <article
                className="
                  max-w-3xl
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
                {/* Introduction */}

                <div className="pb-10 border-b border-slate-800">
                  <p className="text-base sm:text-lg leading-8 text-slate-300">
                    Welcome to <strong className="text-white">MyDiary</strong>.
                    Your privacy is important to us. This Privacy Policy
                    explains what information may be collected when you use
                    MyDiary, how that information is used, and the choices
                    available to you.
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-violet-500/15
                      bg-violet-500/5
                      px-5
                      py-4
                    "
                  >
                    <ShieldCheck
                      size={20}
                      className="shrink-0 text-violet-400 mt-0.5"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      MyDiary is designed to provide a personal space where you
                      can record and revisit your thoughts and memories.
                    </p>
                  </div>
                </div>

                {/*  SECTIONS  */}

                <div className="pt-10 space-y-12">
                  {/* Information */}

                  <section id="information" className="scroll-mt-8">
                    <SectionHeading
                      icon={Database}
                      title="1. Information We Collect"
                    />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        When you create and use a MyDiary account, we may
                        collect information necessary to provide the service.
                      </p>

                      <SubHeading>Account Information</SubHeading>

                      <ul className="space-y-2 list-disc pl-6">
                        <li>Username and email address</li>
                        <li>Password hash used for account authentication</li>
                        <li>Profile information you choose to provide</li>
                      </ul>

                      <SubHeading>Diary Content</SubHeading>

                      <ul className="space-y-2 list-disc pl-6">
                        <li>Diary titles and entries</li>
                        <li>Mood selections</li>
                        <li>Favourite entry information</li>
                        <li>Entry creation dates and related metadata</li>
                      </ul>

                      <SubHeading>Technical Information</SubHeading>

                      <p>
                        Depending on how you access and use the service, we may
                        process technical information needed for authentication,
                        security, and reliable operation, including:
                      </p>

                      <ul className="mt-3 space-y-2 list-disc pl-6">
                        <li>IP address</li>
                        <li>Session information</li>
                        <li>Authentication cookies</li>
                      </ul>
                    </div>
                  </section>

                  {/* Usage */}

                  <section id="usage" className="scroll-mt-8">
                    <SectionHeading
                      icon={Server}
                      title="2. How Your Data Is Used"
                    />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        We use collected information to provide, maintain, and
                        improve the MyDiary experience.
                      </p>

                      <ul className="mt-4 space-y-2 list-disc pl-6">
                        <li>Authenticate and manage your account</li>
                        <li>Store and display your diary entries</li>
                        <li>Save your mood and favourite entry selections</li>
                        <li>Maintain reliable application performance</li>
                        <li>Detect suspicious or abusive activity</li>
                        <li>Respond to feedback and support requests</li>
                        <li>Maintain and improve the service</li>
                      </ul>
                    </div>
                  </section>

                  {/* Security */}

                  <section id="security" className="scroll-mt-8">
                    <SectionHeading
                      icon={LockKeyhole}
                      title="3. Data Security"
                    />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        Your diary is a personal space, and protecting your
                        information is an important priority. MyDiary uses
                        secure authentication, password hashing, encrypted
                        connections, and cloud infrastructure intended to help
                        protect your account and diary data.
                      </p>

                      <p className="mt-4">
                        However, no internet-based service can guarantee
                        absolute security. We continuously work to maintain
                        appropriate security practices and improve the
                        reliability of the application.
                      </p>
                    </div>
                  </section>

                  {/* Privacy */}

                  <section id="privacy" className="scroll-mt-8">
                    <SectionHeading
                      icon={ShieldCheck}
                      title="4. Your Journal Is Private"
                    />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        Your diary entries are intended to remain within your
                        personal MyDiary account. We do not use your journal
                        entries as public content.
                      </p>

                      <p className="mt-4">
                        You should still protect your account credentials and
                        avoid sharing your password with others.
                      </p>
                    </div>
                  </section>

                  {/* Cookies */}

                  <section id="cookies" className="scroll-mt-8">
                    <SectionHeading
                      icon={Cookie}
                      title="5. Cookies and Sessions"
                    />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        MyDiary may use cookies or similar session mechanisms
                        required for authentication and maintaining your
                        signed-in session.
                      </p>

                      <p className="mt-4">
                        These mechanisms help the application recognize your
                        authenticated session and provide access to your
                        account.
                      </p>
                    </div>
                  </section>

                  {/* Rights */}

                  <section id="rights" className="scroll-mt-8">
                    <SectionHeading icon={UserRound} title="6. Your Rights" />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        You remain in control of the information associated with
                        your MyDiary account.
                      </p>

                      <ul className="mt-4 space-y-3">
                        {[
                          "View your profile information",
                          "Update your profile information",
                          "Upload or change your profile picture",
                          "Create and delete diary entries",
                          "Contact us regarding privacy concerns",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="shrink-0 text-violet-500 mt-1"
                            />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Retention */}

                  <section id="retention" className="scroll-mt-8">
                    <SectionHeading icon={FileText} title="7. Data Retention" />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        We retain account and diary information for as long as
                        it is needed to provide the MyDiary service or as
                        otherwise required for legitimate operational purposes.
                      </p>

                      <p className="mt-4">
                        If you delete individual diary entries, they are removed
                        from the application's accessible journal data.
                      </p>
                    </div>
                  </section>

                  {/* Contact */}

                  <section id="contact" className="scroll-mt-8">
                    <SectionHeading icon={Mail} title="8. Contact" />

                    <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                      <p>
                        If you have questions, concerns, or requests regarding
                        this Privacy Policy or your personal information, you
                        can contact us at:
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
                          transition-colors
                          font-medium
                        "
                      >
                        <Mail size={17} />
                        mydiaryweb@gmail.com
                      </a>

                      <p className="mt-4">
                        Website:{" "}
                        <a
                          href="https://mydiaryweb.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-violet-400
                            hover:text-violet-300
                            transition-colors
                          "
                        >
                          mydiaryweb.com
                        </a>
                      </p>
                    </div>
                  </section>
                </div>

                {/* Closing */}

                <div className="mt-14 pt-8 border-t border-slate-800">
                  <p className="text-sm leading-7 text-slate-500">
                    This Privacy Policy may be updated from time to time as
                    MyDiary evolves. Any updated version will be published on
                    this page with a revised "Last updated" date.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/*  FOOTER  */}

      <footer className="border-t border-slate-800/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={16} className="text-violet-500" />

              <span>MyDiary</span>
            </div>

            <div className="flex items-center gap-5 text-sm">
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

              <Link
                to="/"
                className="
                  text-slate-500
                  hover:text-violet-400
                  transition-colors
                "
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*  REUSABLE UI  */

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-start gap-4 mb-4">
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

      <h2 className="pt-1.5 text-xl sm:text-2xl font-semibold text-white">
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="mt-7 mb-3 text-base font-semibold text-slate-200">
      {children}
    </h3>
  );
}
