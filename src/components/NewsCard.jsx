import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Eye, Share2, Bookmark } from "lucide-react";
import { useSavedArticles } from "../hooks/useSavedArticles";
import { useLikedArticles } from "../hooks/useLikedArticles";

function NewsCard({ article }) {
  const { isSaved, toggleSave } = useSavedArticles();
  const { isLikedLocally, toggleLike } = useLikedArticles();

  const articleId = article.articleId;
  const sourceName = article.sourceName;
  const sourceUrl = article.sourceUrl;
  const publishedAt = article.publishedAt;
  const titleAz = article.titleAz;
  const summaryAz = article.summaryAz;
  const imageUrl = article.imageUrl;
  const topics = article.topics;
  const commentCount = article.commentCount;
  const viewCount = article.viewCount;
  const bookmarked = isSaved(articleId);

  const alreadyLiked = isLikedLocally(articleId);
  const [likeCount, setLikeCount] = useState(article.likeCount);

  const hostname = new URL(sourceUrl).hostname;
  const favicon = "https://www.google.com/s2/favicons?domain=" + hostname + "&sz=64";
  const dateText = new Date(publishedAt).toLocaleDateString("az-AZ");

  function handleSaveClick(e) {
    e.preventDefault();
    toggleSave(article);
  }

  function handleShareClick(e) {
    e.preventDefault();
    const shareUrl = window.location.origin + "/article/" + articleId;

    if (navigator.share) {
      navigator.share({ title: titleAz, url: shareUrl });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link kopyalandı!");
    }
  }

  function handleLikeClick(e) {
    e.preventDefault();
    toggleLike(articleId);
    setLikeCount(alreadyLiked ? likeCount - 1 : likeCount + 1);
  }
  
  return (
    <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
      <Link to={"/article/" + articleId} className="block">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <img src={favicon} alt="" className="size-5 rounded-full" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">{sourceName}</span>
          <span>.</span>
          <span>{dateText}</span>
        </div>

        <h2 className="mt-2 text-lg leading-snug font-bold">{titleAz}</h2>
        <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
          {summaryAz}
        </p>

        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            loading="lazy"
            className="mt-3 aspect-video w-full rounded-2xl object-cover"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {topics && topics.map(function (topic) {
            return (
              <span key={topic.slug} className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-400">
                #{topic.labelAz}
              </span>
            );
          })}
        </div>
      </Link>

      <div className="mt-3 flex items-center gap-1">
        <button className="action-btn">
          <MessageCircle className="size-4" /> {commentCount}
        </button>
        <button onClick={handleLikeClick} className={"action-btn " + (alreadyLiked ? "liked" : "")}>
          <Heart className="size-4" fill={alreadyLiked ? "currentColor" : "none"} /> {likeCount}
        </button>
        <span className="action-btn">
          <Eye className="size-4" /> {viewCount}
        </span>
        <button onClick={handleShareClick} className="action-btn ml-auto">
          <Share2 className="size-4" />
        </button>
        <button onClick={handleSaveClick} className={"action-btn " + (bookmarked ? "saved" : "")}>
          <Bookmark className="size-4" fill={bookmarked ? "currentColor" : "none"} />
        </button>
      </div>
    </article>
  );
}

export default NewsCard;