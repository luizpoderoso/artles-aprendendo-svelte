<script>
  import { page } from "$app/stores";
  import { links } from "$lib/api/links";
</script>

<ul class="tracking-wider inline-flex items-center space-x-20">
  {#each links as link}
    <li>
      <a
        class={$page.url.pathname === link.href
          ? "text-purple-600"
          : "transition hover:text-purple-400"}
        href={link.href}
      >
        {link.text}
      </a>
    </li>
  {/each}
</ul>
