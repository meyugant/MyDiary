export default function GoogleButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      w-full
      py-4
      rounded-xl
      bg-white
      hover:scale-[1.02]
      transition
      flex
      justify-center
      items-center
      gap-3
      font-semibold
      "
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        className="w-5"
      />
      Continue with Google
    </button>
  );
}
