import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
        <h1 className="text-5xl font-bold mb-10">Privacy Policy</h1>

        <p className="text-slate-400 mb-10">Last updated: June 2026</p>

        <div className="space-y-10 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>

            <p>
              MyDiary collects the information you provide when creating an
              account, including your email address, username, and diary
              entries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How Your Data Is Used
            </h2>

            <p>
              Your information is used only to provide your diary, authenticate
              your account, and improve the MyDiary experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Security
            </h2>

            <p>
              We use industry-standard security practices to protect your
              account. Your password is encrypted before being stored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Services
            </h2>

            <p>
              If you choose to sign in using Google, authentication is handled
              securely through Google's OAuth service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>

            <p>
              If you have any privacy-related questions, please contact us using
              the email provided on the website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
