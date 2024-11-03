<script>
  import { onMount } from 'svelte';
  let username = '';
  let password = '';
  let message = '';
  let token = '';

  const apiUrl = 'http://localhost:3000'; // Change this to your API URL

  async function register() {
    const response = await fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      message = `Registration successful! Welcome, ${data.user.username}`;
      token = data.token; // Store the token for future requests
    } else {
      message = data.message || 'Registration failed';
    }
  }

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

  async function logout() {
    const response = await fetch(`${apiUrl}/logout`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the header
      },
    });

    if (response.ok) {
      message = 'Logout successful!';
      token = ''; // Clear the token
    } else {
      message = 'Logout failed';
    }
  }
</script>

<main>
  <h1>Login Page</h1>
  <form on:submit|preventDefault={register}>
    <h2>Register</h2>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Register</button>
  </form>

  <form on:submit|preventDefault={login}>
    <h2>Login</h2>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
  </form>

  <button on:click={logout}>Logout</button>

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
