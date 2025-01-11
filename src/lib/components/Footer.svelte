<script>
  const socialLinks = {
    github: 'https://github.com/reeserj',
    twitter: 'https://X.com/reganjreese'
  };
</script>

<footer>
  <div class="footer-content">
    <div class="footer-column">
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" class="social-link">
        <svg class="social-icon github" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
        </svg>
        GitHub
      </a>
    </div>

    <div class="footer-column">
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" class="social-link">
        <svg class="social-icon twitter" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        Twitter, I'm not calling it X
      </a>
    </div>

    <div class="footer-column message">
      <p class="footer-message">If you like this awesome. If not LOL</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--accent-color);
    padding: 2rem;
    width: 100%;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
  }

  .footer-column {
    text-align: center;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .social-link:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .social-icon {
    width: 24px;
    height: 24px;
  }

  .footer-message {
    font-size: 1.1rem;
    color: var(--secondary-color);
    font-style: italic;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .footer-column {
      padding: 0.5rem 0;
    }

    .footer-message {
      font-size: 1rem;
    }

    footer {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    .social-link {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
    }

    .social-icon {
      width: 20px;
      height: 20px;
    }
  }
</style> 