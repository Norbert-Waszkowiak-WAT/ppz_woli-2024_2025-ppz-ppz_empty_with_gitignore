import { isLoggedIn, username, email, userId, sessionsid } from "./account";
import { ServerAddress, Headers } from "$lib/connection";
import { addToast } from "$lib/Toaster.svelte";
import { fetch } from "@tauri-apps/plugin-http";

export const logout = async () => {
    const response = await fetch(ServerAddress + '/users/logout', {
        method: 'GET',
        headers: Headers
    });

    const data = await response.json();

    isLoggedIn.set(false);
    username.set('');
    email.set('');
    userId.set('');
    sessionsid.set('');

    addToast({
        data: {
            title: "Logged out",
            description: data.message,
            color: '#1D1'
        }
    });
};