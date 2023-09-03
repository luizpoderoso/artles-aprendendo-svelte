<script>
  import Footer from "$lib/layout/Footer.svelte";
import Header from "$lib/layout/Header.svelte";
  import "../app.postcss";

  const px = 'px-40';
</script>

<div id="root" class="relative grid grid-rows-[100px_1fr] w-screen h-screen overflow-hidden">
  <Header {px} />
  <div class="overflow-y-auto">
    <slot />
    <Footer />
  </div>
</div>
