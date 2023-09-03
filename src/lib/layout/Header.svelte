<script>
  import Navigation from "./Navigation.svelte";

  export let px = 'px-0';
</script>

<header class="{px} inline-flex w-full h-[100px] justify-between shadow-lg">
  <div class="w-fit h-full inline-flex items-center">
    <a href="/" class="w-[48px] h-[48px] rounded-lg bg-gradient-to-r from-purple-600 to-purple-900">{''}</a>
    <div>
      <h1 class="ml-2 w-fit h-fit text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purple-900">Artles</h1>
    </div>
  </div>
  <Navigation />
</header>
