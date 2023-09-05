<script>
  import Search from "$lib/components/articles/Search.svelte";
  import NormalElement from "$lib/components/list/NormalElement.svelte";
  import { writable } from "svelte/store";

  export let data;
  let articles = [...data.articles];
  // can be filtered
  let list = writable([...articles]);
</script>

<div class="mt-4 relative inline-flex w-full items-center justify-between">
  <h2 class="w-0 h-0 invisible md:visible md:w-fit md:h-fit ml-1 text-xl tracking-wide uppercase font-semibold mt-8">
    Artigos Publicados
  </h2>

  <Search {articles} {list} />
</div>

<ul
  class="mt-8 p-4 border flex flex-col items-center md:grid md:grid-cols-[repeat(2,_250px)] lg:grid-cols-[repeat(3,_250px)] 2xl:grid-cols-[repeat(4,_250px)] md:gap-y-12 space-y-6 md:space-y-0 justify-between w-full"
>
  <!-- if the list is empty -->
  {#if $list.length === 0}
    <p class="h-[150px]">Nenhum artigo foi encontrado...</p>
  {:else}
    <!-- the list elements -->
    {#each $list as article (article.id)}
      <NormalElement {...article} />
    {/each}
  {/if}
</ul>
