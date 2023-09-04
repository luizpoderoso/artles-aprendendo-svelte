<script>
  import {searchAuthor} from '../../functions/authorsFunctions';

  export let id;
  export let title;
  export let abstract;
  export let author_id;
</script>

<li
  class="relative w-[250px] h-[150px] p-1 rounded shadow-inner text-sm text-slate-500 bg-slate-50 transition duration-300 hover:bg-slate-100"
>
  <a
    {title}
    href="/articles/{id}"
    class="transition hover:text-purple-400 overflow-x-auto line-clamp-1"
    >{title}</a
  >
  <p
    title="{abstract}"
    class="h-max text-xs my-2 mx-1 px-1 py-1 text-justify line-clamp-5 overflow-ellipsis border-y"
  >
    {abstract}
  </p>
  <a
    title={searchAuthor(author_id)}
    href="/authors/{author_id}"
    class="transition hover:text-purple-400 absolute left-1 bottom-0 line-clamp-1"
    >{searchAuthor(author_id)}
  </a>
</li>
