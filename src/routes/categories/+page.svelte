<script>
  import NormalElement from "$lib/components/list/NormalElement.svelte";

  export let data;
  const listByCategory = data.listByCategory;
</script>

<h2 class="mt-6 text-2xl tracking-wider uppercase font-semibold">Categorias</h2>

<!-- list of category's filter lists -->
<ul class="w-full ml-1">
  {#each listByCategory as { category, list }}
    <li class="flex flex-col mt-4 md:mt-12 overflow-x-auto">
      <a
        href="/categories/{category}"
        class="font-semibold text-xl text-purple-600 transition hover:text-purple-700"
        >{category}</a
      >
      <!-- filtered list by category -->
      <ul class="mt-1 inline-flex space-x-10">
        {#each list as article}
          <li>
            <NormalElement {...article} />
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
