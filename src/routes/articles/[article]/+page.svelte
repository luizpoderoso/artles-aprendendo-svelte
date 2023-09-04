<script>
  import { searchAuthor } from '$lib/functions/authorsFunctions.js';

  export let data;
  const {title, author_id, abstract, id} = data.article;
</script>

<div class="absolute px-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border w-[100%] h-[450px]">
  <div class="w-full h-full py-4 relative">
    <p>Título: {title}</p>
    <p>Autor{(author_id.length > 1) ? '(es)' : ''}: {searchAuthor(author_id)}</p>
    <p class="absolute bottom-4 border p-2 text-justify">Resumo: {abstract}</p>
  </div>
</div>