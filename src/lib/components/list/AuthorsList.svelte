<script>
  import { searchAuthor } from "$lib/functions/authorsFunctions";
  export let author_id = [2772];
  export let title = false;
  export let textTailwind = 'text-base font-semibold text-purple-500 transition hover:text-purple-600';

  const authors = searchAuthor(author_id).split(", ");
</script>

<p title={title ? authors.join(', ') : null} class="line-clamp-1">
  {#each authors as author, index}
    {#if index !== 0}
      <span>&nbsp;-&nbsp;</span>
    {/if}
      <a  class="{textTailwind}" href="/authors/{author_id[index]}">{author}</a>
  {/each}
</p>
