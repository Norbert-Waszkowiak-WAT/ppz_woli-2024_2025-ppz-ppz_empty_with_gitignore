import { email } from "./account";
import { get } from "svelte/store";
import { ServerAddress, Headers } from "$lib/connection";
import { addToast } from "$lib/Toaster.svelte";
import { fetch } from "@tauri-apps/plugin-http";

export const resendCode = async () => {
    const response = await fetch(ServerAddress + '/users/resend-verification-code', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify({
          email: get(email)
        })
    });

    const data = await response.json();

    if (response.ok) {
      addToast({
        data: {
            title: "Verification",
            description: data.message,
            color: '#DD1'
        }
      });
    }
};