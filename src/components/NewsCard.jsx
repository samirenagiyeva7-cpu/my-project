import { Link } from "react-router-dom";
import { MessageCircle, Heart, Eye, Share2, Bookmark } from "lucide-react";

function NewsCard({ article, bookmarked = false }) {
  const {
    authorHandle,
    avatarDomain,
    time,
    title,
    description,
    image,
    tags,
    comments,
    likes,
    views,
    liked,
  } = article;

  return (
    <article className="cursor-pointer px-4 py-4 transition-colors hover:bg-slate-50">
      <Link to="/article" className="block">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <img
            src={`https://www.google.com/s2/favicons?domain=${avatarDomain}&sz=64`}
            alt=""
            className="size-5 rounded-full"
          />
          <span className="font-semibold text-slate-700">@{authorHandle}</span>
          <span>·</span>
          <span>{time}</span>
        </div>

        <h2 className="mt-2 text-lg leading-snug font-bold">{title}</h2>
        <p className="mt-1 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
          {description}
        </p>

        {image && (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="mt-3 aspect-video w-full rounded-2xl object-cover"
          />
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="mt-3 flex items-center gap-1">
        <button className="action-btn">
          <MessageCircle className="size-4" /> {comments}
        </button>
        <button className={`action-btn ${liked ? "liked" : ""}`}>
          <Heart className="size-4" fill={liked ? "currentColor" : "none"} /> {likes}
        </button>
        <span className="action-btn">
          <Eye className="size-4" /> {views}
        </span>
        <button className="action-btn ml-auto">
          <Share2 className="size-4" />
        </button>
        <button className={`action-btn ${bookmarked ? "saved" : ""}`}>
          <Bookmark className="size-4" fill={bookmarked ? "currentColor" : "none"} />
        </button>
      </div>
    </article>
  );
}

export default NewsCard;