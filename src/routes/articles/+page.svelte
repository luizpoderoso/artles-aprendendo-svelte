<script>
  import NormalElement from "$lib/components/list/NormalElement.svelte";
  export let data;
  let articles = [...data.articles];
  let list = [...articles];
  
  // search filter
  let search = "";

  // need to be improved
  const searchKey = () => {
    if (!search) return list = [...articles];
    list = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
        ? true
        : article.abstract.toLowerCase().includes(search.toLowerCase())
        ? true
        : false
    );
  };
</script>

<div class="mt-4 relative inline-flex w-full items-center justify-between">
  <h2 class="ml-1 text-xl tracking-wide uppercase font-semibold mt-8">
    Artigos Publicados
  </h2>

  <input
    bind:value={search}
    on:input={searchKey} 
    type="text"
    placeholder="Pesquise..."
    class="absolute bottom-0 right-1 block w-[400px] rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
  />
</div>

<ul
  class="box-content min-h-[150px] mt-8 p-4 border grid grid-cols-[repeat(3,_250px)] gap-y-12 justify-between w-full"
>
  {#if list.length === 0}
    <p>Nenhum artigo foi encontrado...</p>
  {/if}
  {#each list as { id, title, abstract, author_id } (id)}
    <NormalElement {id} {title} {abstract} {author_id} />
  {/each}
</ul>
