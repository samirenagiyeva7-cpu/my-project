import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Bookmark,
  Moon,
  LogIn,
  UserPlus,
  MessageCircle,
  Heart,
  Eye,
  Share2,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <main className="min-h-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar activePage="home" isLoggedIn={false} />

        {/* Əsas lent */}
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
            <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
              <Link to="/article" className="block">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <img src="https://www.google.com/s2/favicons?domain=headtopics.com&sz=64" alt="" className="size-5 rounded-full" />
                  <span className="font-semibold text-slate-700">@headtopics</span>
                  <span>·</span>
                  <span>2 saat əvvəl</span>
                </div>
                <h2 className="mt-2 text-lg leading-snug font-bold">
                  Tələbə astronom sirli kosmik siqnalların mənbəyini müəyyən edib
                </h2>
                <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                  Universitet tələbəsi uzun müddət izah edilə bilməyən radio
                  siqnallarının mənbəyini tapıb. Kəşf bütün kosmik müşahidə
                  metodlarını yenidən nəzərdən keçirməyə səbəb ola bilər.
                </p>
                <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80" alt="" loading="lazy" className="mt-3 aspect-video w-full rounded-2xl object-cover" />
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">#Elm</span>
                </div>
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <button className="action-btn"><MessageCircle className="size-4" /> 0</button>
                <button className="action-btn liked"><Heart className="size-4" fill="currentColor" /> 1</button>
                <span className="action-btn"><Eye className="size-4" /> 1</span>
                <button className="action-btn ml-auto"><Share2 className="size-4" /></button>
                <button className="action-btn"><Bookmark className="size-4" /></button>
              </div>
            </article>

            <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
              <Link to="/article" className="block">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <img src="https://www.google.com/s2/favicons?domain=xda-developers.com&sz=64" alt="" className="size-5 rounded-full" />
                  <span className="font-semibold text-slate-700">@xda-developers</span>
                  <span>·</span>
                  <span>5 saat əvvəl</span>
                </div>
                <h2 className="mt-2 text-lg leading-snug font-bold">
                  Claude Code artıq səhvlərimdən öyrənir və qurğum özü işləyir
                </h2>
                <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                  AI kod köməkçisi gündəlik iş axınını necə dəyişir — real
                  təcrübə əsasında. Avtomatlaşdırma artıq sadəcə kod yazmaqla bitmir.
                </p>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80" alt="" loading="lazy" className="mt-3 aspect-video w-full rounded-2xl object-cover" />
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">#claude code</span>
                </div>
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <button className="action-btn"><MessageCircle className="size-4" /> 3</button>
                <button className="action-btn"><Heart className="size-4" /> 12</button>
                <span className="action-btn"><Eye className="size-4" /> 248</span>
                <button className="action-btn ml-auto"><Share2 className="size-4" /></button>
                <button className="action-btn"><Bookmark className="size-4" /></button>
              </div>
            </article>

            <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
              <Link to="/article" className="block">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <img src="https://www.google.com/s2/favicons?domain=reuters.com&sz=64" alt="" className="size-5 rounded-full" />
                  <span className="font-semibold text-slate-700">@reuters</span>
                  <span>·</span>
                  <span>1 gün əvvəl</span>
                </div>
                <h2 className="mt-2 text-lg leading-snug font-bold">
                  Qlobal iqtisadiyyat 2026-cı ildə gözlənilməz artım göstərir
                </h2>
                <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                  Analitiklər inflyasiya təzyiqinə baxmayaraq əsas bazarlarda
                  dayanıqlı böyümə proqnozlaşdırır. Mərkəzi banklar ehtiyatlı
                  optimizm bildirir.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">#İqtisadiyyat</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">#Biznes</span>
                </div>
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <button className="action-btn"><MessageCircle className="size-4" /> 7</button>
                <button className="action-btn"><Heart className="size-4" /> 34</button>
                <span className="action-btn"><Eye className="size-4" /> 1.2k</span>
                <button className="action-btn ml-auto"><Share2 className="size-4" /></button>
                <button className="action-btn"><Bookmark className="size-4" /></button>
              </div>
            </article>
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

        <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur lg:hidden">
          <Link to="/" className="text-brand rounded-full p-2"><HomeIcon className="size-6" /></Link>
          <Link to="/saved" className="rounded-full p-2"><Bookmark className="size-6" /></Link>
          <button className="rounded-full p-2"><Moon className="size-6" /></button>
          <Link to="/login" className="rounded-full p-2"><LogIn className="size-6" /></Link>
          <Link to="/login" className="text-brand rounded-full p-2"><UserPlus className="size-6" /></Link>
        </nav>
      </div>
    </main>
  );
}

export default Home;