import { error } from "@sveltejs/kit";
import { articlesList } from "../../../store/stores";

export const load = ({ params }) => {
  const category = params.category;

  let articles = [];
  articlesList.subscribe(value => articles = [...value]);

  const list = articles.filter(article => article.category === category);
  if (!list) return error(404);

  return {
    category: category,
    list: list
  };
};
