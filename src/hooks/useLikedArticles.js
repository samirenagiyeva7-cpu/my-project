import { useState, useEffect } from "react";

const STORAGE_KEY = "likedArticles";

function readLiked() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function useLikedArticles() {
  const [likedIds, setLikedIds] = useState(readLiked);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedIds));
  }, [likedIds]);

  function isLikedLocally(articleId) {
    return likedIds.includes(articleId);
  }

  function toggleLike(articleId) {
    setLikedIds(function (prev) {
      if (prev.includes(articleId)) {
        return prev.filter(function (id) {
          return id !== articleId;
        });
      }
      return [...prev, articleId];
    });
  }

  return { isLikedLocally, toggleLike };
}