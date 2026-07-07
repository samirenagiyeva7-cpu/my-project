
import { Link } from "react-router-dom";

function Article() {
  return (
    <>
    
    <main
      className="mx-auto min-h-dvh w-full max-w-2xl border-x border-slate-200 pb-20"
    >
      <header
        className="sticky top-0 z-30 flex items-center gap-4 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur"
      >
        <Link
          to="/"
          className="rounded-full p-2 transition-colors hover:bg-slate-100"
>
               <i data-lucide="arrow-left" className="size-5"></i>
       </Link> 

        <h1 className="text-lg font-bold">Xəbər</h1>
      </header>

      <article className="px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <img
            src="https://www.google.com/s2/favicons?domain=headtopics.com&sz=64"
            alt=""
            className="size-6 rounded-full"
          />
          <span className="font-semibold text-slate-700">@headtopics</span>
          <span>·</span>
          <span>2 saat əvvəl</span>
        </div>

        <h2 className="mt-3 text-2xl leading-tight font-extrabold">
          Tələbə astronom sirli kosmik siqnalların mənbəyini müəyyən edib
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
            >#Elm</span
          >
        </div>

        <img
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1100&q=80"
          alt=""
          className="mt-4 aspect-video w-full rounded-2xl object-cover"
        />

        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-slate-700">
          <p>
            Universitet tələbəsi uzun müddət izah edilə bilməyən radio
            siqnallarının mənbəyini müəyyən edib. Tədqiqat qrupu siqnalların
            qalaktikadan kənar bir obyektdən gəldiyini təsdiqləyib.
          </p>
          <p>
            Kəşf kosmik müşahidə metodlarını yenidən nəzərdən keçirməyə səbəb
            ola bilər. Mütəxəssislər nəticələrin gələcək missiyalar üçün
            əhəmiyyətli olduğunu bildirir.
          </p>
        </div>

        <a
          href="#"
          target="_blank"
           rel="noopener noreferrer"
          className="bg-brand hover:bg-brand-600 mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
        >
          <i data-lucide="external-link" className="size-4"></i> Orijinalı oxu
        </a>

        <div
          className="mt-5 flex items-center gap-1 border-y border-slate-200 py-2"
        >
          <button className="action-btn">
            <i data-lucide="message-circle" className="size-4"></i> 0
          </button>
          <button className="action-btn liked">
            <i data-lucide="heart" className="size-4" fill="currentColor"></i> 1
          </button>
          <span className="action-btn"
            ><i data-lucide="eye" className="size-4"></i> 1</span
          >
          <button className="action-btn ml-auto">
            <i data-lucide="share-2" className="size-4"></i> Paylaş
          </button>
          <button className="action-btn">
            <i data-lucide="bookmark" className="size-4"></i>
          </button>
        </div>
      </article>

      <section className="px-4">
        <h3 className="text-base font-bold">
          Rəylər <span className="text-slate-400">(2)</span>
        </h3>

        <form className="mt-3 flex flex-col gap-2">
          <textarea
            rows="2"
            maxLength={1000}
            placeholder="Rəyini yaz..."
            className="focus:border-brand focus:ring-brand w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-1"
          ></textarea>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400"
              >Rəy yazmaq üçün daxil olmalısan</span
            >
            <button
              type="button"
              className="bg-brand hover:bg-brand-600 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
            >
              Göndər
            </button>
          </div>
        </form>

        <ul className="mt-5 space-y-4 pb-8">
          <li className="flex gap-3">
            <img
              src="https://www.google.com/s2/favicons?domain=gravatar.com&sz=64"
              alt=""
              className="size-9 shrink-0 rounded-full bg-slate-100"
            />
            <div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Aytac M.</span>
                <span className="text-slate-400">· 1 saat əvvəl</span>
              </div>
              <p className="mt-0.5 text-sm text-slate-700">
                Çox maraqlı kəşfdir, paylaşdığınız üçün təşəkkürlər!
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              src="https://www.google.com/s2/favicons?domain=gravatar.com&sz=64"
              alt=""
              className="size-9 shrink-0 rounded-full bg-slate-100"
            />
            <div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Rəşad Q.</span>
                <span className="text-slate-400">· 40 dəq əvvəl</span>
              </div>
              <p className="mt-0.5 text-sm text-slate-700">
                Mənbəni də əlavə etsəniz yaxşı olar. Yenə də gözəl xülasədir.
              </p>
            </div>
          </li>
        </ul>
      </section>
    
          </main>
    </>
  );
}

export default Article; 