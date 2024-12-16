// Initializing store function
import { initializeStore, getStoreInstance } from '$lib/account/store';
import { addToast } from '$lib/Toaster.svelte'

(async () => {
    await initializeStore();
    console.log('Store initialized');
  
    const store = getStoreInstance();
  
    const val = await store.get<{ value: boolean }>('isLoggedIn');
  
    if (val === undefined || val.value === false) {
      addToast({
        data: {
          title: 'Not logged in',
          description: 'You should log into your account!',
          color: '#D11',
        },
        closeDelay: 30000,
      });
  
      await store.set('isLoggedIn', { value: false });
    }
  })();