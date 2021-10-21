
const dev = process.env.NODE_ENV !== 'production';

export const API_URL = dev ? process.env.API_URL : "";
export const NEXT_URL = dev ? process.env.NEXT_URL : "";