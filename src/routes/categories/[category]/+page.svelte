<script>
  import NormalElement from "$lib/components/list/NormalElement.svelte";

  export let data;
  const list = data.list;
  const category = data.category;
</script>

<h2 class="mt-6 w-full flex justify-center text-2xl uppercase font-semibold">{category}</h2>

<ul class="mt-1 w-full grid grid-cols-[repeat(3,_250px)] justify-between border p-2">
  {#each list as article}
    <NormalElement {...article} />
  {/each}
</ul>
