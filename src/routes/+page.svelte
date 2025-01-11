<script>
  import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<svelte:head>
  <title>My Build Process</title>
</svelte:head>

<section class="hero">
  <h1>Welcome to My Build Process</h1>
  <p>Documenting my journey and sharing my experiences</p>
</section>

<Newsletter />

<style>
  .hero {
    text-align: center;
    padding: 4rem 0;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
</style> 