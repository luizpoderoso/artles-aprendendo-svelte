<script>
  import AuthorsList from '$lib/components/list/AuthorsList.svelte';

  export let data;
  const {title, category, authors, abstract, releasedAt} = data.article;
</script>

<div class="absolute px-2 md:px-20 xl:px-40 md:left-1/2 top-4 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border w-[100%] min-h-[450px] h-fit">
  <div class="w-full h-full py-1 md:py-4 relative flex flex-col justify-between">
    <div>
      <p>Título: <span class="text-purple-500 font-semibold">{title}</span></p>
      <p>Categoria: <a href="/categories/{category}" class="transition text-purple-500 hover:text-purple-600 font-semibold">{category}</a></p>
      <p class="inline-flex">Autor{(authors.split(', ').length > 1) ? '(es)' : ''}:&nbsp;<AuthorsList {authors} /></p>
      <p>Publicado em: <span class="font-semibold text-purple-500">{releasedAt}</span></p>
    </div>
    <button class="w-[150px] min-h-[40px] my-4 rounded-lg bg-purple-500 transition duration-300 hover:bg-purple-600 active:bg-purple-700 ring-purple-200 active:ring-purple-300 hover:ring text-white">Ler o Artigo</button>
    <div class="h-fit">
      <p class="ml-1">Resumo: </p>
      <p class="border p-2 text-justify">{abstract}</p>
    </div>
  </div>
</div>