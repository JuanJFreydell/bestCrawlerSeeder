export default function Home() {
  const links = [
    "/business",
    "/health",
    "/news",
    "/science",
    "/standard-crawl-sites"
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-20 px-10 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-10">
          Seed Websites
        </h1>

        <ul className="flex flex-col gap-4 text-lg text-zinc-700 dark:text-zinc-300">
          {links.map((url) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
