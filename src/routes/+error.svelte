<script>
  import { page } from "$app/stores";
  const errorMessages = {
    404: "Not Found abi zorlama!",
  };
</script>

<div class="error">
  <h1>{$page.status}</h1>
  <h2>{errorMessages[$page.status]}</h2>
</div>

<style>
  .error {
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: center;
    align-items: center;
  }
</style>
