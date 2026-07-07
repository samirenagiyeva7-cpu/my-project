import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Bookmark,
  Moon,
  LogOut,
  MessageCircle,
  Heart,
  Eye,
  Share2,
} from "lucide-react";

function Saved() {
  return (
    <main className="min-h-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl">
        {/* Sol sidebar */}
        <header className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-1 border-r border-slate-200 px-3 py-3 lg:flex">
          <Link to="/" className="mb-2 flex items-center px-3 py-2">
            <span className="text-brand inline-flex items-baseline text-2xl font-extrabold tracking-tight">
              Gündəm
              <span className="bg-brand ml-0.5 inline-block size-1.5 rounded-full"></span>
            </span>
          </Link>
          <nav className="flex flex-1 flex-col gap-1 text-xl">
            <Link
              to="/"
              className="flex items-center gap-4 rounded-full px-4 py-3 transition-colors hover:bg-slate-100"
            >
              <HomeIcon className="size-6" /> <span>Lent</span>
            </Link>
            <Link
              to="/saved"
              className="flex items-center gap-4 rounded-full px-4 py-3 font-bold transition-colors hover:bg-slate-100"
            >
              <Bookmark className="size-6" />
              <span>Saxlanılanlar</span>
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-2">
            <button className="flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors hover:bg-slate-100">
              <Moon className="size-6" /> <span>Tema</span>
            </button>
            <button className="flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors hover:bg-slate-100">
              <LogOut className="size-6" /> <span>Çıxış</span>
            </button>
          </div>
        </header>

        {/* Əsas hissə */}
        <main className="min-h-dvh w-full max-w-2xl flex-1 border-slate-200 pb-16 lg:border-r lg:pb-0">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-bold tracking-tight">Saxlanılanlar</h1>
          </header>

          <div className="flex flex-col divide-y divide-slate-200">
            {/* 1-ci saxlanılan məqalə */}
            <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
              <Link to="/article" className="block">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <img
                    src="https://www.google.com/s2/favicons?domain=xda-developers.com&sz=64"
                    alt=""
                    className="size-5 rounded-full"
                  />
                  <span className="font-semibold text-slate-700">@xda-developers</span>
                  <span>·</span>
                  <span>5 saat əvvəl</span>
                </div>
                <h2 className="mt-2 text-lg leading-snug font-bold">
                  Claude Code artıq səhvlərimdən öyrənir və qurğum özü işləyir
                </h2>
                <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                  AI kod köməkçisi gündəlik iş axınını necə dəyişir — real
                  təcrübə əsasında.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
                  alt=""
                  loading="lazy"
                  className="mt-3 aspect-video w-full rounded-2xl object-cover"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                    #claude code
                  </span>
                </div>
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <button className="action-btn">
                  <MessageCircle className="size-4" /> 3
                </button>
                <button className="action-btn">
                  <Heart className="size-4" /> 12
                </button>
                <span className="action-btn">
                  <Eye className="size-4" /> 248
                </span>
                <button className="action-btn ml-auto">
                  <Share2 className="size-4" />
                </button>
                <button className="action-btn saved">
                  <Bookmark className="size-4" fill="currentColor" />
                </button>
              </div>
            </article>

            {/* 2-ci saxlanılan məqalə */}
            <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
              <Link to="/article" className="block">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <img
                    src="https://www.google.com/s2/favicons?domain=reuters.com&sz=64"
                    alt=""
                    className="size-5 rounded-full"
                  />
                  <span className="font-semibold text-slate-700">@reuters</span>
                  <span>·</span>
                  <span>1 gün əvvəl</span>
                </div>
                <h2 className="mt-2 text-lg leading-snug font-bold">
                  Qlobal iqtisadiyyat 2026-cı ildə gözlənilməz artım göstərir
                </h2>
                <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                  Analitiklər inflyasiya təzyiqinə baxmayaraq əsas bazarlarda
                  dayanıqlı böyümə proqnozlaşdırır.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                    #İqtisadiyyat
                  </span>
                </div>
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <button className="action-btn">
                  <MessageCircle className="size-4" /> 7
                </button>
                <button className="action-btn">
                  <Heart className="size-4" /> 34
                </button>
                <span className="action-btn">
                  <Eye className="size-4" /> 1.2k
                </span>
                <button className="action-btn ml-auto">
                  <Share2 className="size-4" />
                </button>
                <button className="action-btn saved">
                  <Bookmark className="size-4" fill="currentColor" />
                </button>
              </div>
            </article>
          </div>
        </main>

        {/* Sağ sidebar */}
        <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 space-y-4 px-5 py-5 xl:block">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-base font-bold">Saxlanılanlar</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Sonra oxumaq üçün saxladığın xəbərlər burada toplanır. Hər
              xəbərin altındakı əlfəcin ikonuna basaraq əlavə et və ya çıxar.
            </p>
          </div>
        </aside>

        {/* Mobil alt naviqasiya */}
        <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur lg:hidden">
          <Link to="/" className="rounded-full p-2">
            <HomeIcon className="size-6" />
          </Link>
          <Link to="/saved" className="text-brand rounded-full p-2">
            <Bookmark className="size-6" />
          </Link>
          <button className="rounded-full p-2">
            <Moon className="size-6" />
          </button>
        </nav>
      </div>
    </main>
  );
}

export default Saved;

