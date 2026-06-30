import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-10"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="text-5xl font-bold mb-10">Terms of Service</h1>

        <p className="text-slate-400 mb-10">Last updated: June 2026</p>

        <div className="space-y-10 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Acceptance
            </h2>

            <p>By using MyDiary, you agree to these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              User Responsibility
            </h2>

            <p>
              You are responsible for maintaining the security of your account
              and the content you create.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Acceptable Use
            </h2>

            <p>
              You agree not to misuse the platform, attempt unauthorized access,
              or interfere with the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Availability
            </h2>

            <p>
              We strive to keep MyDiary available at all times, but
              uninterrupted access cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>

            <p>
              These terms may be updated as MyDiary evolves. Continued use of
              the service indicates acceptance of the latest version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
