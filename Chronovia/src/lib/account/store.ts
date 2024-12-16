import { load } from '@tauri-apps/plugin-store';

let storeInstance: Awaited<ReturnType<typeof load>> | null = null;

export async function initializeStore() {
  if (!storeInstance) {
    storeInstance = await load('store.json', { autoSave: true });
  }
  return storeInstance;
}

export function getStoreInstance() {
  if (!storeInstance) {
    throw new Error('Store has not been initialized. Call `initializeStore` first.');
  }
  return storeInstance;
}

