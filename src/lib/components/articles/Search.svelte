<script>
  import { writable } from "svelte/store";

  // search filter
  export let articles = [];
  export let list = writable(articles);
  let search = "";

  // need to be improved - add author search
  const searchKey = () => {
    if (!search) return list.set([...articles]);
    list.set(
      articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
          ? true
          : article.abstract.toLowerCase().includes(search.toLowerCase())
          ? true
          : article.authors.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
</script>

<input
  bind:value={search}
  on:input={searchKey}
  type="text"
  placeholder="Pesquise..."
  class="absolute top-4 md:top-1/2 md:-translate-1/2 md:right-1 block w-full md:w-[400px] h-[40px] rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
/>
