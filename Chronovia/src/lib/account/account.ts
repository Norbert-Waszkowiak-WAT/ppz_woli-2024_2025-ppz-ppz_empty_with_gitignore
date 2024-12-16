import { writable, get} from 'svelte/store';
import { getStoreInstance } from '$lib/account/store';

const store = getStoreInstance();

// Factory function to create a writable store synchronized with Tauri store
export function createTauriStore<T>(key: string, initialValue: T) {
    const svelteStore = writable(initialValue, (set) => {
        // Load the initial value from the Tauri store
        const loadInitialValue = async () => {
            const storedValue = await store.get<{ value: T }>(key);
            if (storedValue !== undefined) {
                if (!(typeof storedValue.value === 'string' && storedValue.value === '')){
                    set(storedValue.value);
                }
            }
        };

        loadInitialValue();
    });

    // Subscribe to changes in the store and save to Tauri store
    svelteStore.subscribe((value) => {
        if (typeof value === 'string' && value === ''){
            value = initialValue;
        }
        const saveValue = async (value: T) => {
            await store.set(key, { value });
        };

        saveValue(value);
    });

    return svelteStore;
}

export const isLoggedIn = createTauriStore<boolean>('isLoggedIn', false);
export const email = createTauriStore<string>('email', '');
export const username = createTauriStore<string>('username', 'Not logged in');
export const userId = createTauriStore<string>('userId', '');
export const sessionsid = createTauriStore<string>('sessionsid', '');

export let temporaryPassword = writable('');