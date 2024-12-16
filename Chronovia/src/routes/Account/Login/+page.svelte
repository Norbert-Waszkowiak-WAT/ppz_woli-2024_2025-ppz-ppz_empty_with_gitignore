<script lang="ts">
  import { isLoggedIn, username, email, userId, sessionsid } from '$lib/account/account';
  import { ServerAddress, Headers } from '$lib/connection';
  import { addToast } from '$lib/Toaster.svelte';
  import { fetch } from "@tauri-apps/plugin-http";
  import { goto } from '$app/navigation';
  import { resendCode } from '$lib/account/resendCode';

  let emailInput = '';
  let passwordInput = '';
  let errorMessage = '';
  let loading = false;

  const login = async () => {
    loading = true;
    errorMessage = '';

    try {
      const response = await fetch(ServerAddress + '/users/login', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        addToast({
          data: {
            title: "Authorization successful!",
            description: data.message,
            color: '#1D1'
          }
        });
        
        // Assuming the response structure is as described
        const { User, message } = data;
        isLoggedIn.set(true);
        username.set(User.userName);
        email.set(emailInput);
        userId.set(User.userId);
        //sessionsid.set(Cookies.get('session.sid')); // Assuming token is the session ID
        
        goto('/');
      } 
      else {
        if (data.message === 'Please verify your email address') {
          addToast({
            data: {
              title: "Error (Code: " + data.statusCode + ")",
              description: data.message,
              color: '#DD1'
            }
          });

          resendCode();
          goto("/Account/VerifyEmail");
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
  <h2>Login</h2>
  <form on:submit|preventDefault={login} class=inputs>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={emailInput} required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={passwordInput} required />
    </div>
    <button class="button" type="submit" disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
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

  p {
    text-align: center;
    margin-top: 1em;
    color: #ff4081; 
  }
</style>
  