<script>
  export let authors = '';
  export let title = false;
  export let textTailwind = 'text-base font-semibold text-purple-500 transition hover:text-purple-600';

  const authorsArray = authors.split(", ");
</script>

<p title={title ? authors : null} class="line-clamp-1">
  {#each authorsArray as author, index}
    {#if index !== 0}
      <span>&nbsp;-&nbsp;</span>
    {/if}
      <a  class="{textTailwind}" href="/authors/{authorsArray[index]}">{author}</a>
  {/each}
</p>
