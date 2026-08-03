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

        <p className="text-slate-400 mb-10">Last updated: August 2026</p>
        <p className="text-slate-300 mb-10">
          Welcome to <b>MyDiary</b>. Your privacy is one of our highest
          priorities. This Privacy Policy explains what information we collect,
          how we use it, how we protect it, and the choices you have regarding
          your personal data while using <b>MyDiary</b>.
        </p>

        <div className="space-y-10 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>

            <p>
              When you create and use a MyDiary account, we may collect the
              following information:
            </p>
            <h4>Account Information</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Username and email address</li>
              <li>Password (encrypted)</li>
              <li>Diary entries and associated metadata</li>
              <li>Profile image (if uploaded)</li>
            </ul>

            <h4>Diary Content</h4>
            <ul className="list-disc list-inside mb-3">
              <li>Diary title</li>
              <li>Diary entries</li>
              <li>Mood selections</li>
              <li>Favourite entries</li>
              <li>Entry creation dates</li>
            </ul>

            <h4>Technical Information</h4>
            <p>
              To improve security and reliability, we may automatically collect
            </p>
            <ul className="list-disc list-inside mb-3">
              <li>IP address</li>
              <li>Session information</li>
              <li>Cookies required for authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How Your Data Is Used
            </h2>

            <p>
              We use your information only to provide and improve the MyDiary
              experience.
            </p>
            <p>Your data help us:</p>
            <ul className="list-disc list-inside mb-3">
              <li>Authenticate your account securely</li>
              <li>Store and synchronize diary entries</li>
              <li>Save your mood history</li>
              <li>Improve website performance</li>
              <li>Detect suspicious or abusive activity</li>
              <li>Respond to support requests</li>
              <li>Maintain reliable service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Security
            </h2>

            <p>
              Your diary is a personal space, and protecting it is one of our
              highest priorities. We use secure authentication, encrypted
              connections, password hashing, and trusted cloud infrastructure to
              help keep your account and diary entries safe. While no online
              service can guarantee absolute security, we are committed to
              following industry best practices and continuously improving our
              systems to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Your Rights
            </h2>

            <p>You are always in control of your information.</p>
            <p>You may:</p>
            <ul className="list-disc list-inside mb-3">
              <li>View your profile</li>
              <li>Update your profile information</li>
              <li>Upload or change your profile picture</li>
              <li>Delete diary entries</li>
              <li>Contact us regarding privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>

            <p>Email: mydiaryweb@gmail.com </p>
            <p>
              <a
                href="https://mydiaryweb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website: https://mydiaryweb.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
