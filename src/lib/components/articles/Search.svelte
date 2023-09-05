<script>
  import { selectKey } from "$lib/api/selectFilter";
  import { searchKey } from "$lib/functions/search";
  import { writable } from "svelte/store";

  // search filter
  export let articles = [];
  export let list = writable(articles);

  let search = "";
  let filter = "all";
  // will run every time that the page reload
  $: list.set(searchKey(search, articles, filter));
</script>

<form
  class="absolute top-4 md:top-1/2 md:-translate-1/2 md:right-0 inline-flex w-full md:w-[500px] h-[40px] group"
>
  <input
    bind:value={search}
    on:input={searchKey}
    type="text"
    placeholder="Pesquise..."
    class="w-[380px] h-full rounded-l-md border-gray-300 shadow-sm focus:border-0 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
  />
  <select
    bind:value={filter}
    class="w-[120px] h-full border-gray-300 text-purple-500 focus:border-0 focus:ring-purple-200 focus:ring rounded-r-md"
  >
    {#each selectKey as { key, label }}
      <option value={key}>{label}</option>
    {/each}
  </select>
</form>
