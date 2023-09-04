<script>
  import { writable } from "svelte/store";

  // search filter
  export let articles;
  export let listStore = writable(articles);
  let search = "";

  // need to be improved - add author search
  const searchKey = () => {
    if (!search) return (listStore.set([...articles]));
    listStore.set(articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
        ? true
        : article.abstract.toLowerCase().includes(search.toLowerCase())
        ? true
        : false
    ));
  };
</script>

<input
  bind:value={search}
  on:input={searchKey}
  type="text"
  placeholder="Pesquise..."
  class="absolute bottom-0 right-1 block w-[400px] rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
/>
