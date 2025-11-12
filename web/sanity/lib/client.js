import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'tt2ed1zq',
  dataset: 'production',
  apiVersion: '2025-11-12', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: true,
});
