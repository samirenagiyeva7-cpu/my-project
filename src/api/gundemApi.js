const BASE_URL = "https://gundem-teal.vercel.app/api/v1";
function getAnonId() {
  let id = localStorage.getItem("anonId");
  if (!id || id.length !== 36) {
    id = crypto.randomUUID();
    localStorage.setItem("anonId", id);
  }
  return id;
}

export async function getFeed(topic) {
  let url = `${BASE_URL}/feed?limit=20`;
  if (topic) {
    url = url + "&topic=" + topic;
  }
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Xəbərləri gətirmək mümkün olmadı");
  }

  const data = await response.json();
  return data.items;
}

export async function getArticleById(id) {
  const response = await fetch(`${BASE_URL}/articles/${id}`);

  if (!response.ok) {
    throw new Error("Xəbər tapılmadı");
  }

  return response.json();
}
export async function getTopics() {
  const response = await fetch(`${BASE_URL}/topics`);

  if (!response.ok) {
    throw new Error("Mövzuları gətirmək mümkün olmadı");
  }

  const data = await response.json();
  return data.topics;
}

export async function likeArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/like`, {
    method: "POST",
    headers: {
      "X-Anon-Id": getAnonId(),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    alert("XETA: " + errorText);
    throw new Error("Bəyənmək mümkün olmadı");
  }

  return response.json();
}