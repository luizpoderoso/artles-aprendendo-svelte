<script>
  import NormalElement from "$lib/components/list/NormalElement.svelte";

  export let data;
  const list = data.list;
  const author = data.author;
</script>

<h2 class="mt-6 w-full flex justify-center text-2xl uppercase font-semibold">{author}</h2>

<ul class="mt-4 w-full grid grid-cols-[repeat(3,_250px)] justify-between border p-2">
  {#each list as article}
    <NormalElement {...article} />
  {/each}
</ul>
