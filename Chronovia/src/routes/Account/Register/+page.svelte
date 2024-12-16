<script lang="ts">
  import { isLoggedIn, username, email, userId, temporaryPassword } from '$lib/account/account';
  import { ServerAddress, Headers } from '$lib/connection';
  import { addToast } from '$lib/Toaster.svelte';
  import { fetch } from "@tauri-apps/plugin-http";
  import { goto } from '$app/navigation';

  let usernameInput = '';
  let emailInput = '';
  let passwordInput = '';
  
  let errorMessage = '';
  let loading = false;

  const register = async () => {
    loading = true;
    errorMessage = '';

    try {
      const response = await fetch(ServerAddress + '/users/register', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify({
          username: usernameInput,
          email: emailInput,
          password: passwordInput
        }),
      });

      const data = await response.json();

      if (response.ok) {
        addToast({
          data: {
            title: "There's something to be done...",
            description: data.message,
            color: '#DD1'
          }
        });

        temporaryPassword.set(passwordInput);
        email.set(emailInput);

        goto('/Account/VerifyEmail');
      } 
      else {
        // Handle errors based on the response
        addToast({
          data: {
            title: "Error (Code: " + data.statusCode + ")",
            description: data.message,
            color: '#D11'
          }
        });
      }
    } 
    catch (error) {
      addToast({
        data: {
          title: 'Server error',
          description: 'An unexpected error occurred! (Maybe server is down)',
          color: '#D11'
        },
      });
    } 
    finally {
      loading = false;
    }
  };
</script>

<main>
  <h2>Register</h2>
  <form on:submit|preventDefault={register} class=inputs>
    <div>
      <label for="username">Username:</label>
      <input type="username" id="username" bind:value={usernameInput} required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={emailInput} required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={passwordInput} required />
    </div>
    <button class="button" type="submit" disabled={loading}>
      {loading ? 'Registering...' : 'Register'}
    </button>
  </form>
  <a href="/Account/VerifyEmail">Verify Email page</a>
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
  