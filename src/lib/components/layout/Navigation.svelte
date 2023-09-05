<script>
  import { page } from "$app/stores";
  import { links } from "$lib/api/links";
</script>

<ul class="tracking-wider inline-flex items-center text-sm md:text-base space-x-1 md:space-x-12 lg:space-x-16">
  {#each links as link}
    <li>
      <a
        class="relative group px-1"
        href={link.href}
      >
        {link.text}
        <div class={$page.url.pathname === link.href
          ? 'absolute w-full h-[2px] rounded-2xl bg-purple-600'
          : 'absolute transition bg-transparent w-0 group-hover:w-full h-0 group-hover:h-[2px] rounded-2xl group-hover:bg-purple-500'}>
        </div>
      </a>
    </li>
  {/each}
</ul>
