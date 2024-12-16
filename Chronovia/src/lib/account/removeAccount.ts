import { email, sessionsid, username, userId, temporaryPassword, isLoggedIn } from "./account";
import { get } from "svelte/store";
import { ServerAddress, Headers } from "$lib/connection";
import { addToast } from "$lib/Toaster.svelte";
import { fetch } from "@tauri-apps/plugin-http";
import { goto } from "$app/navigation";

export const removeAccount = async (passwordInput: string) => {
  try {
    const response = await fetch(ServerAddress + '/users/delete-user', {
      method: 'POST',
      headers: Headers,
      body: JSON.stringify({
        email: get(email),
        password: passwordInput
      })
    });

    const data = await response.json();

    if (response.ok && typeof data.message === 'string' && data.message === 'User deleted successfully') {
      addToast({
        data: {
            title: "Account removal",
            description: data.message,
            color: '#1D1'
        }
      });

      isLoggedIn.set(false);
      email.set('');
      username.set('Not logged in');
      userId.set('');
      sessionsid.set('');
      temporaryPassword.set('');

      goto('/');
    }
    else {
      addToast({
        data: {
            title: "Error: account removal",
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
};