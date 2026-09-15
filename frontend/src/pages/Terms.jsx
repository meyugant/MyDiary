import {
  ArrowLeft,
  FileText,
  UserCheck,
  ShieldCheck,
  Ban,
  Server,
  RefreshCw,
  AlertCircle,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "acceptance",
    icon: UserCheck,
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using MyDiary, you agree to be bound by these Terms of
        Service. If you do not agree with any part of these terms, please do not
        use the service.
      </p>
    ),
  },
  {
    id: "account",
    icon: UserCheck,
    title: "2. Account Responsibilities",
    content: (
      <>
        <p>
          To use certain features of MyDiary, you may need to create an account.
          You are responsible for providing accurate information and keeping
          your account credentials secure.
        </p>

        <p className="mt-4">
          You are responsible for activity that occurs through your account. If
          you believe your account has been accessed without your authorization,
          you should take appropriate steps to secure it.
        </p>
      </>
    ),
  },
  {
    id: "content",
    icon: FileText,
    title: "3. Your Content",
    content: (
      <>
        <p>
          MyDiary allows you to create and store personal journal entries,
          thoughts, memories, and other content. You retain responsibility for
          the content you create and submit to the service.
        </p>

        <p className="mt-4">
          You should not use MyDiary to store or distribute content that
          violates applicable laws or the rights of others.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    icon: Ban,
    title: "4. Acceptable Use",
    content: (
      <>
        <p>
          You agree not to misuse MyDiary or attempt to interfere with its
          operation.
        </p>

        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li>Attempt to gain unauthorized access to accounts or systems.</li>
          <li>Interfere with the availability or operation of the service.</li>
          <li>Use the service for unlawful purposes.</li>
          <li>Attempt to access data belonging to another user.</li>
          <li>Abuse or exploit vulnerabilities in the application.</li>
        </ul>
      </>
    ),
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "5. Privacy",
    content: (
      <>
        <p>
          Your privacy is important to us. MyDiary is designed to provide a
          personal space for your journal entries and account information.
        </p>

        <p className="mt-4">
          For more information about how information is handled, please review
          our{" "}
          <Link
            to="/privacy"
            className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "availability",
    icon: Server,
    title: "6. Service Availability",
    content: (
      <p>
        We aim to keep MyDiary available and reliable, but uninterrupted
        availability cannot be guaranteed. The service may occasionally be
        unavailable due to maintenance, technical issues, updates, or
        circumstances beyond our control.
      </p>
    ),
  },
  {
    id: "disclaimer",
    icon: AlertCircle,
    title: "7. Disclaimer",
    content: (
      <p>
        MyDiary is provided on an "as available" basis. While we work to
        maintain a reliable service, we cannot guarantee that the application
        will always be error-free, uninterrupted, or available at all times.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "8. Changes to These Terms",
    content: (
      <p>
        These Terms of Service may be updated from time to time as MyDiary
        evolves. When changes are made, the updated version will be published on
        this page along with a revised "Last updated" date. Your continued use
        of MyDiary after changes are published means you accept the updated
        terms.
      </p>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "9. Contact",
    content: (
      <p>
        If you have questions, concerns, or feedback regarding these Terms of
        Service, please contact the MyDiary team through the available contact
        channels.
      </p>
    ),
  },
];

export default function Terms() {
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
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <FileText size={20} />
              </div>

              <span className="text-sm font-semibold tracking-wider uppercase">
                Legal
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Terms of Service
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-400">
              These terms explain the rules and responsibilities that apply when
              using MyDiary.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                Last updated: June 2026
              </span>

              <span className="text-slate-600">•</span>

              <span className="text-slate-500">
                Please read carefully before using the service.
              </span>
            </div>
          </div>
        </section>

        {/*  DOCUMENT  */}

        <section>
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
              {/*  SIDEBAR  */}

              <aside className="hidden lg:block">
                <div className="sticky top-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
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

              {/*  TERMS CONTENT  */}

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
                    Welcome to MyDiary. These Terms of Service govern your
                    access to and use of the MyDiary application and related
                    services. By creating an account or using MyDiary, you
                    acknowledge that you have read and understood these terms
                    and agree to follow them.
                  </p>
                </div>

                {/* Sections */}

                <div className="pt-10 space-y-12">
                  {sections.map((section) => {
                    const Icon = section.icon;

                    return (
                      <section
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-8"
                      >
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
                            {section.title}
                          </h2>
                        </div>

                        <div className="pl-0 sm:pl-14 text-sm sm:text-base leading-8 text-slate-400">
                          {section.content}
                        </div>
                      </section>
                    );
                  })}
                </div>

                {/* Closing */}

                <div className="mt-14 pt-8 border-t border-slate-800">
                  <p className="text-sm leading-7 text-slate-500">
                    If you do not agree with these Terms of Service, please
                    discontinue use of MyDiary.
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
                to="/privacy"
                className="text-slate-500 hover:text-violet-400 transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="text-slate-700">•</span>

              <Link
                to="/"
                className="text-slate-500 hover:text-violet-400 transition-colors"
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
