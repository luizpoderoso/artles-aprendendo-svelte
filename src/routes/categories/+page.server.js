import { categories } from "$lib/api/categories";
import { articlesList } from "../../store/stores";

export function load() {
  let articles = [];
  articlesList.subscribe(value => articles = [...value]);

  let listByCategory = [];
  for (const category of categories) {
    listByCategory.push(
      {
        category: category,
        list: articles.filter(article => article.category === category)
      });
  }

  return {
    listByCategory: listByCategory.length > 6 ? listByCategory.slice(0, 6) : listByCategory
  };
};