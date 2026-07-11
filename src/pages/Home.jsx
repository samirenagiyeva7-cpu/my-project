import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import NewsCard from "../components/NewsCard";
import articles from "../data/articles";

function Home() {
  return (
    <main className="min-h-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar activePage="home" isLoggedIn={false} />

      
        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-bold tracking-tight">Lent</h1>
            <nav className="no-scrollbar -mx-4 mt-2.5 flex gap-2 overflow-x-auto px-4 xl:hidden">
              <a href="#" className="bg-brand shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-white">Hamısı</a>
              <a href="#" className="shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-sm hover:bg-slate-200">Süni İntellekt</a>
              <a href="#" className="shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-sm hover:bg-slate-200">Texnologiya</a>
              <a href="#" className="shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-sm hover:bg-slate-200">Elm</a>
              <a href="#" className="shrink-0 rounded-full bg-slate-100 px-3.5 py-1.5 text-sm hover:bg-slate-200">İdman</a>
            </nav>
          </header>

          <div className="flex flex-col divide-y divide-slate-200">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </main>

      
        <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-bold">Mövzular</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href="#" className="bg-brand rounded-full px-3 py-1 text-sm font-medium text-white">#Hamısı</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Süni İntellekt</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Texnologiya</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#İdman</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#İqtisadiyyat</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Siyasət</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Elm</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Sağlamlıq</a>
              <a href="#" className="rounded-full px-3 py-1 text-sm text-slate-500 hover:bg-slate-200">#Dünya</a>
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