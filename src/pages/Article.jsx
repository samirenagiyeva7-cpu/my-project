import { Link, useParams } from "react-router-dom";
import { MessageCircle, Heart, Eye, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { getArticleById } from "../api/gundemApi";
import { useLikedArticles } from "../hooks/useLikedArticles";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
 const { isLikedLocally, toggleLike } = useLikedArticles();

  useEffect(() => {
    async function loadArticle() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getArticleById(id);
        setArticle(data);
        setLikeCount(data.likeCount);
      } catch (err) {
        setError("Xeberi yuklerken xeta bash verdi.");
      } finally {
        setIsLoading(false);
      }
    }

    loadArticle();
  }, [id]);

function handleLikeClick() {
    const wasLiked = isLikedLocally(id);
    toggleLike(id);
    setLikeCount(wasLiked ? likeCount - 1 : likeCount + 1);
  }
  
  if (isLoading) {
    return <p className="p-6 text-center text-slate-500 dark:text-slate-400 dark:bg-slate-950 min-h-dvh">Yuklenir...</p>;
  }

  if (error) {
    return <p className="p-6 text-center text-red-500 dark:bg-slate-950 min-h-dvh">{error}</p>;
  }

  if (!article) {
    return null;
  }

  const alreadyLiked = isLikedLocally(id);
  const hostname = new URL(article.sourceUrl).hostname;
  const favicon = "https://www.google.com/s2/favicons?domain=" + hostname + "&sz=64";
  const dateText = new Date(article.publishedAt).toLocaleDateString("az-AZ");

  return (
    <main className="mx-auto min-h-dvh w-full max-w-2xl border-x border-slate-200 dark:border-slate-800 pb-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 px-4 py-3 backdrop-blur">
        <Link to="/" className="rounded-full p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
          Geri
        </Link>
        <h1 className="text-lg font-bold">Xeber</h1>
      </header>

      <article className="px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <img src={favicon} alt="" className="size-6 rounded-full" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">{article.sourceName}</span>
          <span>.</span>
          <span>{dateText}</span>
        </div>

        <h2 className="mt-3 text-2xl leading-tight font-extrabold">
          {article.titleAz}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          {article.topics && article.topics.map(function (topic) {
            return (
              <span key={topic.slug} className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-400">
                #{topic.labelAz}
              </span>
            );
          })}
        </div>

        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt=""
            className="mt-4 aspect-video w-full rounded-2xl object-cover"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        )}
        <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>{article.summaryAz}</p>
        </div>

        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-brand hover:bg-brand-600 mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors">
          <ExternalLink className="size-4" /> Orijinali oxu
        </a>

        <div className="mt-5 flex items-center gap-1 border-y border-slate-200 dark:border-slate-800 py-2">
          <span className="action-btn"><MessageCircle className="size-4" /> {article.commentCount}</span>
          <button onClick={handleLikeClick} className={"action-btn " + (alreadyLiked ? "liked" : "")}>
            <Heart className="size-4" fill={alreadyLiked ? "currentColor" : "none"} /> {likeCount}
          </button>
          <span className="action-btn"><Eye className="size-4" /> {article.viewCount}</span>
        </div>
      </article>
    </main>
  );
}

export default Article;