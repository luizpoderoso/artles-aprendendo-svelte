<script>
  import NormalElement from "$lib/components/list/NormalElement.svelte";

  export let data;
  const listByCategory = data.listByCategory;
</script>

<h2 class="mt-6 text-2xl tracking-wider uppercase font-semibold">Categorias</h2>

<!-- list of category's filter lists -->
<ul class="ml-1">
  {#each listByCategory as {category, list}}
    <li class="mt-12">
      <a href="/categories/{category}" class="font-semibold text-xl text-purple-600 transition hover:text-purple-700">{category}</a>
      <hr class="mt-1 mb-2" />
      <!-- filtered list by category -->
      <ul class="inline-flex space-x-10 overflow-x-auto">
        {#each list as article}
          <NormalElement {...article} />
        {/each}
      </ul>
    </li>
  {/each}
</ul>