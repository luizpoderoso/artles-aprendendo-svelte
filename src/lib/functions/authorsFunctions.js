import { authors } from "$lib/api/authors";

export const searchAuthor = (id = 2772) => {
  let string = authors.find((author) => author.id === id[0])?.name;
  for (let i = 1; i < id.length; i++) {
    string += `, ${authors.find((author) => author.id === id[i])?.name}`;
  }
  return string;
};