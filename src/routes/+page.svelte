<script>
  let title = "Ninja Gaming Guides";

  const updateTitle = () => {
    title = "Something completely different";
  };
</script>

<div class="index">
  <h2>{title}</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in commodi
    dignissimos quaerat facilis? Velit sed neque ipsa voluptatibus saepe
    asperiores dolores, doloribus at similique. Commodi adipisci ducimus ratione
    earum!
  </p>
  <input type="text" bind:value={title} />
  <button on:click={updateTitle}>Change Title</button>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>
