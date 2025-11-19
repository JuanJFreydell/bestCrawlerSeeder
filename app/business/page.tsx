export default function Business() {
    const links = [
        "https://www.inc.com",
        "https://www.entrepreneur.com",
        "https://www.techcrunch.com",
        "https://www.fastcompany.com",
        "https://www.apnews.com",
        "https://www.bls.gov",
        "https://www.bea.gov",
        "https://www.forbes.com",
        "https://www.investopedia.com"
    ];
  
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-20 px-10 bg-white dark:bg-black">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-10">
            Business Websites
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
  