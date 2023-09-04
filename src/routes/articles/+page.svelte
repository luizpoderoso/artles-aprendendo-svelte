<script>
  import Search from "$lib/components/articles/Search.svelte";
  import NormalElement from "$lib/components/list/NormalElement.svelte";
  import { writable } from "svelte/store";

  export let data;
  let articles = [...data.articles];

  // list working
  let listStore = writable([...articles]);
  let list;
  $: listStore.subscribe(value => list = [...value]);
</script>

<div class="mt-4 relative inline-flex w-full items-center justify-between">
  <h2 class="ml-1 text-xl tracking-wide uppercase font-semibold mt-8">
    Artigos Publicados
  </h2>

  <Search {articles} {listStore} />
</div>

<ul
  class="mt-8 p-4 border grid grid-cols-[repeat(3,_250px)] gap-y-12 justify-between w-full"
>
  {#if list.length === 0}
    <p class="h-[150px]">Nenhum artigo foi encontrado...</p>
  {/if}
  {#each list as { id, title, abstract, author_id } (id)}
    <NormalElement {id} {title} {abstract} {author_id} />
  {/each}
</ul>
