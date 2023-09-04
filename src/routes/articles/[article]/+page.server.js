import { error } from "@sveltejs/kit";
import { articlesList } from "$store/stores";

export function load({params}) {
  let articleFound;

  articlesList.subscribe(value => {
    articleFound = value.find(article => article.id === params.article);
  });

  if (!articleFound) throw error(404);

  return {
    article: articleFound
  };
}