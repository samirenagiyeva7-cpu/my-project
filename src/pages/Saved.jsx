import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import NewsCard from "../components/NewsCard";
import savedArticles from "../data/savedArticles";

function Saved() {
  return (
    <main className="min-h-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar activePage="saved" isLoggedIn={true} />

       
        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-bold tracking-tight">Saxlanılanlar</h1>
          </header>

          <div className="flex flex-col divide-y divide-slate-200">
            {savedArticles.map((article) => (
              <NewsCard key={article.id} article={article} bookmarked={true} />
            ))}
          </div>
        </main>

       
        <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-bold">Saxlanılanlar</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
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