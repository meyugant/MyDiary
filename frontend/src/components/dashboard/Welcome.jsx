export default function Welcome({ username }) {
  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <section className="mb-8 md:mb-10">
      <p className="text-violet-400 text-base md:text-lg">{greeting} 👋</p>

      <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
        Welcome back,
        <span className="block sm:inline"> {username}</span>
      </h1>

      <p className="mt-4 text-sm sm:text-base text-slate-400">
        Ready to write today&apos;s memories?
      </p>
    </section>
  );
}
