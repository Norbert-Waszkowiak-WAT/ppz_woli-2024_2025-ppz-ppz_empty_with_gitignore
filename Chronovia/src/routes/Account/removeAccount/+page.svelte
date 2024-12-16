<script lang="ts">
  import { isLoggedIn, username, email, userId, sessionsid } from '$lib/account/account';
  import { ServerAddress, Headers } from '$lib/connection';
  import { addToast } from '$lib/Toaster.svelte';
  import { fetch } from "@tauri-apps/plugin-http";
  import { goto } from '$app/navigation';
    import { removeAccount } from '$lib/account/removeAccount';

  let emailInput = '';
  let passwordInput = '';
  let errorMessage = '';
  let loading = false;

  const login = async () => {
    loading = true;
    errorMessage = '';

    removeAccount(passwordInput);
    
    loading = false;
  };
</script>

<main>
  <h2>Account Removal</h2>
  <p>It's sad to see you go...</p>
  <form on:submit|preventDefault={login} class=inputs>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={passwordInput} required />
    </div>
    <button class="button" type="submit" disabled={loading}>
      {loading ? 'Removing acocunt...' : 'Remove account'}
    </button>
    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
  </form>
</main>

<style>
  main {
    padding: 1em;
    max-width: 400px;
    margin: auto;
    align-items: center;
    text-align: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    display: block;
    margin: 0.5em 0;
    padding: 0.5em;
    border: 1px solid #444; /* Dark border */
    border-radius: 4px;
    background-color: #1e1e1e; /* Dark input background */
    color: #ffffff; /* Light text color */
    font-size: 1em;
    width: auto;
  }

  input::placeholder {
    color: #888; /* Placeholder color */
  }

  .button {
      text-decoration: none;
      background-color: #6200ea;

      border: 0;
      border-radius: 10px;

      box-shadow: 0 5px #332f38;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      margin-bottom: 20px;
      padding: 5px;
      padding-left: 10px;
      padding-right: 10px;

      transition: 0.1s ease;
  }

  .button:hover {
      cursor: pointer;
      filter: invert(5%); /* Darker shade on hover */
  }

  .button:active {
      background-color: #3700b3;
      box-shadow: 0 0px #1c053b;
      transform: translateY(5px);
  }
</style>
  