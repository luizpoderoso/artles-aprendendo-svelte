<script>
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import "../app.postcss";

  const px = "px-2 md:px-10 lg:px-20 xl:px-40";
</script>

<div
  id="root"
  class="w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden"
>
  <Header {px} />
  <main class="relative {px} flex-grow">
    <slot />
  </main>
  <Footer />
</div>
