import { writable } from "svelte/store";
import { articles } from "$lib/api/articles";

export const articlesList = writable([...articles]);