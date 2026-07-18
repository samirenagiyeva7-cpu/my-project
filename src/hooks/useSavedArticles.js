import { useState, useEffect } from "react";

const STORAGE_KEY = "savedArticles";

function readSaved() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function useSavedArticles() {
  const [savedArticles, setSavedArticles] = useState(readSaved);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedArticles));
  }, [savedArticles]);

  function isSaved(articleId) {
    return savedArticles.some(function (a) {
      return a.articleId === articleId;
    });
  }

  function toggleSave(article) {
    setSavedArticles(function (prev) {
      const exists = prev.some(function (a) {
        return a.articleId === article.articleId;
      });
      if (exists) {
        return prev.filter(function (a) {
          return a.articleId !== article.articleId;
        });
      }
      return [...prev, article];
    });
  }

  return { savedArticles, isSaved, toggleSave };
}