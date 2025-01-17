<script>
  import { convertMarkdownToHtml } from '$lib/utils/markdown';
  
  export let data;

  // Format date function
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<div class="blog-container">
  <h1>Blog Posts</h1>
  
  <div class="blog-grid">
    {#each data.posts as post}
      <article class="blog-card">
        <h2>
          <a href="/blog/{post.slug}">{post.frontmatter.title}</a>
        </h2>
        <div class="post-meta">
          <time datetime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
        </div>
        <p class="description">{post.frontmatter.description}</p>
        <div class="tags">
          {#each post.frontmatter.tags as tag}
            <a href="/blog/tag/{tag}" class="tag">#{tag}</a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .blog-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .blog-card {
    background: var(--accent-color);
    padding: 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .blog-card:hover {
    transform: translateY(-3px);
  }

  .post-meta {
    font-size: 0.9rem;
    color: var(--secondary-color);
    margin: 0.5rem 0;
  }

  .description {
    margin: 0.5rem 0;
    color: var(--secondary-color);
    font-size: 0.95rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    background: var(--background-color);
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
</style> 