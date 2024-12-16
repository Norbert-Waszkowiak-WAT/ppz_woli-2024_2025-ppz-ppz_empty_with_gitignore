<script lang="ts">
  import { isLoggedIn, username, email, userId, temporaryPassword } from '$lib/account/account';
  import { ServerAddress, Headers } from '$lib/connection';
  import { addToast } from '$lib/Toaster.svelte';
  import { fetch } from "@tauri-apps/plugin-http";
  import { goto } from '$app/navigation';
  import { resendCode } from '$lib/account/resendCode';
  import { get } from 'svelte/store';

  let codeInput = '';
  let errorMessage = '';
  let loading = false;

  const login = async () => {
    loading = true;
    errorMessage = '';

    try {
      const response = await fetch(ServerAddress + '/users/verify-sentcode', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify({
          email: get(email),
          password: get(temporaryPassword),
          code: codeInput
        }),
      });

      const data = await response.json();

      if (response.ok && typeof data.message === 'string' && data.message === 'Email verified successfully') {
        addToast({
          data: {
            title: "Authorization successful!",
            description: data.message + ". Now it's your turn to log in.",
            color: '#1D1'
          }
        });
        
        temporaryPassword.set('');

        goto('/Account/Login');
      } 
      else {
        // Handle errors based on the response
        addToast({
          data: {
            title: "Error",
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
    <h2>Now verify your email</h2>
    <p>To verify, you need to check your inbox and paste the 6-digit code to the input below</p>
    <form on:submit|preventDefault={login} class=inputs>
        <div>
          <label for="code">Code:</label>
          <input type="code" id="code" bind:value={codeInput} required />
        </div>
        <button class="button" type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>
    </form>   
    <button class="button" disabled={loading} on:click={resendCode}>
      Resend Code
    </button>
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