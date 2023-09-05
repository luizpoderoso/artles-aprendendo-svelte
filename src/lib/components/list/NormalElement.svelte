<script>
  import AuthorsList from './AuthorsList.svelte';

  export let id;
  export let category;
  export let releasedAt;
  export let title;
  export let abstract;
  export let authors;
</script>

<li
  class="relative min-w-[250px] max-w-min h-[150px] p-1 rounded shadow-inner text-sm text-slate-500 bg-slate-50 transition duration-300 hover:bg-slate-100"
>
  <a
    {title}
    href="/articles/{id}"
    class="transition hover:text-purple-400 overflow-x-auto line-clamp-1"
    >{title}</a
  >
  <p
    title="{abstract}"
    class="text-xs my-2 mx-1 px-1 py-1 text-justify line-clamp-5 overflow-ellipsis border-y"
  >
    {abstract}
  </p>
  <AuthorsList {authors} textTailwind="transition hover:text-purple-400" title={true} />
</li>
