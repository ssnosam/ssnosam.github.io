// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import protectWork from './integrations/protect-work.mjs';

const { WORK_PASSWORD } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://shelby-mason.com',
  integrations: [protectWork({ password: WORK_PASSWORD, email: 'hello@shelby-mason.com' })],
});
