import { error } from "@sveltejs/kit";
import { articlesList } from "../../../store/stores";

export const load = ({ params }) => {
  let articles;
  articlesList.subscribe((value) => (articles = [...value]));
  const author = params.author;

  const list = articles.filter(({ authors }) => {
    const authorsArray = authors.split(', ');
    for (const authorElement of authorsArray) {
      if (authorElement === author) return true
    }
  });

  if (list.length === 0) return error(404);
  return {
    author: author,
    list: list,
  };
};
