<script>
  export let data;

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{data.post.frontmatter.title}</title>
</svelte:head>

<article class="blog-post">
  <header class="post-header">
    <h1>{data.post.frontmatter.title}</h1>
    <div class="post-meta">
      <time datetime={data.post.frontmatter.date}>
        {formatDate(data.post.frontmatter.date)}
      </time>
      <div class="tags">
        {#each data.post.frontmatter.tags as tag}
          <a href="/blog/tag/{tag}" class="tag">#{tag}</a>
        {/each}
      </div>
    </div>
  </header>
  
  <div class="content">
    {@html data.post.content}
  </div>
</article>

<style>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .post-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--accent-color);
  }

  .post-meta {
    margin-top: 1rem;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
  }

  .tag {
    background: var(--accent-color);
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    color: var(--secondary-color);
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .tag:hover {
    background: var(--link-color);
    color: white;
  }

  .content {
    margin-top: 2rem;
  }

  .content :global(h2) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .content :global(p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  .content :global(pre) {
    background: var(--accent-color);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .content :global(ul) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  .content :global(li) {
    margin-bottom: 0.5rem;
  }
</style> 