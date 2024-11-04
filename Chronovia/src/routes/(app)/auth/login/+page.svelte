<script>
  import { onMount } from 'svelte';
  let username = '';
  let password = '';
  let message = '';
  let token = '';

  const apiUrl = 'http://localhost:3000'; // Change this to your API URL

  async function login() {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      message = `Login successful! Welcome back, ${data.user.username}`;
      token = data.token; // Store the token for future requests
    } else {
      message = data.message || 'Login failed';
    }
  }
</script>

<main>
  <h1>Login Page</h1>
  <form on:submit|preventDefault={login}>
    <h2>Login</h2>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
  </form>

  {#if message}
    <p>{message}</p>
  {/if}
</main>

<style>
  main {
    padding: 1em;
    max-width: 400px;
    margin: auto;
  }
  input {
    display: block;
    margin: 0.5em 0;
  }
</style>
