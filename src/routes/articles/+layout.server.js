import { articlesList } from "../../store/stores";

export const load = ({params}) => {
  let articles;
  articlesList.subscribe(value => {
    articles = [...value];
  });

  return {
    articles: articles
  };
};