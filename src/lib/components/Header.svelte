<script>
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Builds', href: '/builds' },
  ];
</script>

<header>
  <nav>
    <div class="logo">
      <a href="/">Your Logo</a>
    </div>
    <ul>
      {#each navItems as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem;
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  a:hover {
    color: #666;
  }
</style> 