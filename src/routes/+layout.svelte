<script>
  import Footer from "$lib/layout/Footer.svelte";
import Header from "$lib/layout/Header.svelte";
  import "../app.postcss";

  const px = 'px-40';
</script>

<div id="root" class="relative w-screen h-screen overflow-y-auto overflow-x-hidden">
  <Header {px} />
  <slot />
  <Footer />
</div>
