import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import NewsCard from "../components/NewsCard";
import { useSavedArticles } from "../hooks/useSavedArticles";

function Saved() {
  const { savedArticles } = useSavedArticles();

  return (
    <main className="min-h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar activePage="saved" isLoggedIn={true} />

        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 dark:border-slate-800 pb-16 lg:border-r lg:pb-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-bold tracking-tight">Saxlanılanlar</h1>
          </header>

          <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
            {savedArticles.length === 0 && (
              <p className="p-6 text-center text-slate-500 dark:text-slate-400">
                Hələ heç bir xəbər saxlamamısan.
              </p>
            )}

            {savedArticles.map((article) => (
              <NewsCard key={article.articleId} article={article} />
            ))}
          </div>
        </main>

        <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5">
            <h2 className="text-base font-bold">Saxlanılanlar</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Sonra oxumaq üçün saxladığın xəbərlər burada toplanır. Hər
              xəbərin altındakı əlfəcin ikonuna basaraq əlavə et və ya çıxar.
            </p>
          </div>
        </aside>

        <MobileNav activePage="saved" isLoggedIn={true} />
      </div>
    </main>
  );
}

export default Saved;