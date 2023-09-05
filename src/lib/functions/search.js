export const searchKey = (search = "", articles = [], filter = "all") => {
  if (!search) return articles;

  let list;
  if (filter === "all") {
    list = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
        ? true
        : article.abstract.toLowerCase().includes(search.toLowerCase())
        ? true
        : article.authors.toLowerCase().includes(search.toLowerCase())
    );
  } else if (filter === "author") {
    list = articles.filter(({ authors }) =>
      authors.toLowerCase().includes(search.toLowerCase())
    );
  } else if (filter === "title") {
    list = articles.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  } else if (filter === "abstract") {
    list = articles.filter(({ abstract }) =>
      abstract.toLowerCase().includes(search.toLowerCase())
    );
  }

  return list;
};
