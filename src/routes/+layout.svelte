<script>
  import Title from "$lib/title.svelte";
  import "../styles/global.css";
</script>

<header>
  <nav>
    <div>
      <Title title="Ninja Gaming Guides" />
    </div>

    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/guides">Guides</a>
    </div>
  </nav>
</header>

<main>
  <!-- Page conent -->
  <slot />
</main>

<footer>
  <p>Copyright 2023 Ninja Gaming Guides</p>
</footer>

<style>
  header {
    display: flex;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
  header {
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    justify-content: flex-end;
  }
</style>
