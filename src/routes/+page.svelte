<script>
  import Phrase from "$lib/components/home/Phrase.svelte";
  import NormalElement from "$lib/components/list/NormalElement.svelte";
  import { articlesList } from "../store/stores";
  
  let articles;
  articlesList.subscribe(value => {
    articles = value.length > 6 ? value.slice(0, 6) : value;
  });
</script>

<Phrase />
<p class="ml-1 text-lg">Artigos mais recentes:</p>
<ul
  class="mt-1 pl-2 inline-flex items-center w-full h-[180px] space-x-16 border-y"
>
  {#each articles as { id, title, abstract, author_id } (id)}
    <NormalElement {id} {title} {abstract} {author_id} />
  {/each}
</ul>
