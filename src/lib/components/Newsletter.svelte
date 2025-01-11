<script>
  let email = '';
  let subscribed = false;
  let error = '';

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await fetch('https://app.kit.com/forms/7557346/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          fields: {}
        }),
      });

      if (response.ok) {
        subscribed = true;
        email = '';
        error = '';
      } else {
        error = 'Something went wrong. Please try again.';
      }
    } catch (e) {
      error = 'Something went wrong. Please try again.';
    }
  }
</script>

<div class="newsletter-container">
  <h2>Join the Newsletter</h2>
  <p class="subtitle">I'll spam you don't click this</p>
  
  {#if subscribed}
    <div class="success-message">
      Success! Now check your email to confirm your subscription.
    </div>
  {:else}
    <form on:submit={handleSubmit} class="newsletter-form">
      <input
        type="email"
        bind:value={email}
        placeholder="Email Address"
        required
        aria-label="Email address"
      />
      <button type="submit">Subscribe</button>
    </form>
    {#if error}
      <p class="error-message">{error}</p>
    {/if}
  {/if}
  <p class="guarantee">Unsubscribe at any time.</p>
</div>

<style>
  .newsletter-container {
    background-color: rgb(25, 128, 230);
    padding: 2rem;
    border-radius: 9px;
    margin: 2rem 0;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
  }

  h2 {
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 18px;
    margin-bottom: 1.5rem;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  input {
    padding: 12px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    font-size: 15px;
    color: rgb(0, 0, 0);
    width: 100%;
  }

  button {
    background-color: rgb(22, 190, 106);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: rgb(18, 165, 91);
  }

  .success-message {
    color: #ffffff;
    font-weight: bold;
    padding: 1rem;
  }

  .error-message {
    color: #fde8e2;
    margin-top: 0.5rem;
  }

  .guarantee {
    font-size: 13px;
    margin-top: 1rem;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    .newsletter-form {
      flex-direction: row;
    }

    input {
      flex: 1;
    }

    button {
      width: auto;
    }
  }
</style> 