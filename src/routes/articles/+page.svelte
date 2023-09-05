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
  <h2 class="ml-1 text-xl tracking-wide uppercase font-semibold mt-8">
    Artigos Publicados
  </h2>

  <Search {articles} {list} />
</div>

<ul
  class="mt-8 p-4 border grid grid-cols-[repeat(3,_250px)] gap-y-12 justify-between w-full"
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
