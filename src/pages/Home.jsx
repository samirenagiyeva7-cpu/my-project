import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import NewsCard from "../components/NewsCard";
import { getFeed } from "../api/gundemApi";

const TOPICS = [
  { slug: "ai", labelAz: "Süni İntellekt" },
  { slug: "texnologiya", labelAz: "Texnologiya" },
  { slug: "idman", labelAz: "İdman" },
  { slug: "iqtisadiyyat", labelAz: "İqtisadiyyat" },
  { slug: "siyaset", labelAz: "Siyasət" },
  { slug: "elm", labelAz: "Elm" },
  { slug: "biznes", labelAz: "Biznes" },
  { slug: "medeniyyet", labelAz: "Mədəniyyət" },
  { slug: "saglamliq", labelAz: "Sağlamlıq" },
  { slug: "dunya", labelAz: "Dünya" },
];

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    async function loadFeed() {
      try {
        setIsLoading(true);
        setError(null);
        const items = await getFeed(selectedTopic);
        setArticles(items);
      } catch (err) {
        setError("Xəbərləri yükləyərkən xəta baş verdi.");
      } finally {
        setIsLoading(false);
      }
    }

    loadFeed();
  }, [selectedTopic]);

  function renderPill(topic) {
    const isActive = selectedTopic === topic;
    const label = topic === null ? "Hamısı" : TOPICS.find((t) => t.slug === topic).labelAz;
    const activeClass = "bg-brand shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-white";
    const inactiveClass = "shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-sm hover:bg-slate-200";

    return (
      <button
        key={topic === null ? "all" : topic}
        onClick={() => setSelectedTopic(topic)}
        className={isActive ? activeClass : inactiveClass}
      >
        {label}
      </button>
    );
  }

  return (
    <main className="min-h-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar activePage="home" isLoggedIn={false} />

        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-bold tracking-tight">Lent</h1>
            <nav className="no-scrollbar -mx-4 mt-2.5 flex gap-2 overflow-x-auto px-4 xl:hidden">
              {renderPill(null)}
              {TOPICS.map((topic) => renderPill(topic.slug))}
            </nav>
          </header>

          <div className="flex flex-col divide-y divide-slate-200">
            {isLoading && (
              <p className="p-6 text-center text-slate-500">Yüklənir...</p>
            )}

            {error && (
              <p className="p-6 text-center text-red-500">{error}</p>
            )}

            {!isLoading && !error && articles.length === 0 && (
              <p className="p-6 text-center text-slate-500">Heç bir xəbər tapılmadı.</p>
            )}

            {!isLoading &&
              !error &&
              articles.map((article) => (
                <NewsCard key={article.articleId} article={article} />
              ))}
          </div>
        </main>

        <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-bold">Mövzular</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTopic(null)}
                className={selectedTopic === null ? "bg-brand rounded-full px-3 py-1 text-sm font-medium text-white" : "rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200"}
              >
                
              </button>
              {TOPICS.map((topic) => (
                <button
                  key={topic.slug}
                  onClick={() => setSelectedTopic(topic.slug)}
                  className={selectedTopic === topic.slug ? "bg-brand rounded-full px-3 py-1 text-sm font-medium text-white" : "rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200"}
                >
                  #{topic.labelAz}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-bold">Niyə Gündəm?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Dünya mediasını Azərbaycan dilinə keyfiyyətli tərcümə ilə oxu —
              söz-söz yox, təbii dildə. Google News və Feedly bunu etmir.
            </p>
          </div>
        </aside>

        <MobileNav activePage="home" isLoggedIn={false} />
      </div>
    </main>
  );
}

export default Home;