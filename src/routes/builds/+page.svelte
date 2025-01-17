<script>
  const builds = [
    {
      title: 'Svelte Landing Page',
      description: 'A documentation site built with SvelteKit, featuring blog functionality and project showcases.',
      image: '/images/svelte.png',
      github: 'https://github.com/reeserj/SS2',
      demo: 'https://reeserj.github.io/SS2'
    },
    {
      title: 'Crypto Price Tracker',
      description: 'Real-time cryptocurrency price tracking application.',
      image: '/images/Markettracker.png',
      github: 'https://github.com/reeserj/markettracker',
      demo: 'https://reeserj.github.io/markettracker'
    },
    {
      title: 'Timer',
      description: 'Timer app',
      image: '/images/Timer.png',
      github: 'https://github.com/reeserj/Pomodoro-Timer',
      demo: 'https://reeserj.github.io/Pomodoro-Timer'
    }
  ];
</script>

<svelte:head>
  <title>My Builds</title>
</svelte:head>

<div class="builds-container">
  <h1>My Builds</h1>
  
  <div class="builds-grid">
    {#each builds as build}
      <article class="build-card">
        <img src={build.image} alt={build.title} />
        <div class="build-content">
          <h2>{build.title}</h2>
          <p>{build.description}</p>
          <div class="build-links">
            <a href={build.github} target="_blank" rel="noopener noreferrer" class="github-link">
              <svg class="github-icon" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              View on GitHub
            </a>
            {#if build.demo}
              <a href={build.demo} target="_blank" rel="noopener noreferrer" class="demo-link">
                Live Demo
              </a>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .builds-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .builds-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .build-card {
    background: var(--accent-color);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .build-card:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .build-content {
    padding: 1.5rem;
  }

  h2 {
    margin: 0 0 1rem 0;
  }

  p {
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }

  .view-build {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .view-build:hover {
    background: var(--secondary-color);
  }

  .build-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .github-link, .demo-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .github-link {
    background: #24292e;
    color: white;
  }

  .demo-link {
    background: var(--primary-color);
    color: white;
  }

  .github-link:hover, .demo-link:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  .github-icon {
    width: 20px;
    height: 20px;
  }
</style> 