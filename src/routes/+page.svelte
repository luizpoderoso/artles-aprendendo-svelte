<script>
  import Phrase from "$lib/home/Phrase.svelte";
  import { articles } from "$lib/api/articles";
  import { authors } from "$lib/api/authors";

  const searchAuthor = (id=2772) => {
    return authors.find(author => author.id === id)?.name;
  };
</script>

<div>
  <div class="px-40">
    <Phrase />
    <p class="ml-1 text-xl">Artigos mais recentes:</p>
    <ul class="mt-2 pl-2 inline-flex items-center w-full h-[180px] space-x-16 border-y">
      {#each articles as {id, title, abstract, author_id} (id)}
        <li class="relative w-[250px] h-[150px] p-1 rounded shadow-inner text-sm text-slate-500 bg-slate-50 transition duration-300 hover:bg-slate-100">
          <a href="/articles/{id}" class="transition hover:text-purple-400 overflow-x-auto">{title}</a>
          <p class="h-max text-xs my-2 mx-1 px-1 py-1 text-justify line-clamp-5 overflow-ellipsis border-y">
            {abstract}
          </p>
          <a href="/authors/{author_id}" class="transition hover:text-purple-400 absolute left-1 bottom-0">{searchAuthor(author_id)}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
