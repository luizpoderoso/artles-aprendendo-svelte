<script>
  import AuthorsList from '$lib/components/list/AuthorsList.svelte';

  export let data;
  const {title, author_id, abstract, id} = data.article;
</script>

<div class="absolute px-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border w-[100%] h-[450px]">
  <div class="w-full h-full py-4 relative">
    <p>Título: <span class="text-purple-500 font-semibold">{title}</span></p>
    <p class="inline-flex">Autor{(author_id.length > 1) ? '(es)' : ''}:&nbsp;<AuthorsList {author_id} /></p>
    <button class="absolute top-4 right-4 w-[150px] h-[40px] rounded-lg bg-purple-500 transition duration-300 hover:bg-purple-600 active:bg-purple-700 ring-purple-200 active:ring-purple-300 hover:ring text-white">Ler o Artigo</button>
    <p class="absolute bottom-4 border p-2 text-justify">Resumo: {abstract}</p>
  </div>
</div>