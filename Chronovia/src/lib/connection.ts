import { getName, getVersion } from '@tauri-apps/api/app';

const UserAgent = getName() + '/' + getVersion();
export const ServerAddress = "http://localhost:3000";
export const Headers = {'Content-Type': 'application/json', 'User-Agent': UserAgent };