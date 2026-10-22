// Password-protects /work and every case study beneath it.
//
// The site is static (GitHub Pages), so there is no server to check a
// password. Instead, after the build, each page's full HTML is encrypted with
// AES-GCM under a key derived from the password, and the file is replaced by a
// small unlock page. The real page only exists in the browser once the right
// password is entered, and nothing in the deployed files reveals it.
//
// The password comes from the WORK_PASSWORD environment variable (a .env file
// locally, a repository secret in the deploy workflow), never from the source.
import { webcrypto as crypto } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ITERATIONS = 310000;
const STORAGE_KEY = 'work-access';

const b64 = (bytes) => Buffer.from(bytes).toString('base64');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    })
  );
  return nested.flat();
}

async function deriveKey(password, salt) {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );
}

function gatePage({ title, stylesheets, payload, email }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<title>${title}</title>
<script>
  // A returning visitor is unlocked straight away, so keep the form out of
  // sight rather than flashing it first.
  try { if (localStorage.getItem('${STORAGE_KEY}')) document.documentElement.classList.add('gate-pending'); } catch {}
</script>
${stylesheets.join('\n')}
<style>
  .gate-pending .gate { visibility: hidden; }
  .gate { min-height: 70vh; display: grid; place-items: center; padding: var(--space-7) 0; }
  .gate-card { max-width: 26rem; width: 100%; }
  .gate-card h1 { margin-bottom: var(--space-3); }
  .gate-card p { color: var(--color-text-muted); }
  .gate-form { display: grid; gap: var(--space-3); margin-top: var(--space-5); }
  .gate-form label { font-weight: 600; font-size: var(--text-sm); }
  .gate-form input {
    font: inherit; padding: var(--space-2) var(--space-3);
    border: 1px solid var(--color-border); border-radius: var(--radius-md, 8px);
    background: var(--color-surface); color: var(--color-text);
  }
  .gate-form input:focus { outline: 2px solid var(--color-accent); outline-offset: 1px; }
  .gate-form .btn { justify-self: start; border: 0; cursor: pointer; font: inherit; }
  .gate-error { color: var(--color-accent-ink); font-size: var(--text-sm); min-height: 1.5em; margin: 0; }
  .gate-back { display: inline-block; margin-top: var(--space-5); font-size: var(--text-sm); }
</style>
</head>
<body>
<div class="page-sheet">
  <main class="gate">
    <div class="container gate-card">
      <h1>My Work</h1>
      <p>My case studies are password protected. If we're talking about a role, use the password I shared with you, or <a href="mailto:${email}">email me</a> to ask for access.</p>
      <form class="gate-form" id="gate-form">
        <label for="gate-password">Password</label>
        <input id="gate-password" type="password" autocomplete="current-password" required autofocus />
        <p class="gate-error" id="gate-error" role="alert"></p>
        <button class="btn" type="submit" id="gate-submit">View my work</button>
      </form>
      <a class="gate-back" href="/">&larr; Back to home</a>
    </div>
  </main>
</div>
<script type="application/json" id="gate-payload">${JSON.stringify(payload)}</script>
<script>
(() => {
  const payload = JSON.parse(document.getElementById('gate-payload').textContent);
  const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const store = {
    get() { try { return JSON.parse(localStorage.getItem('${STORAGE_KEY}')); } catch { return null; } },
    set(v) { try { localStorage.setItem('${STORAGE_KEY}', JSON.stringify(v)); } catch {} },
    clear() { try { localStorage.removeItem('${STORAGE_KEY}'); } catch {} },
  };

  // Replacing the document only works once this one has finished parsing;
  // before that, the new page is appended under the form instead.
  const parsed = new Promise((resolve) => {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', resolve);
    else resolve();
  });

  async function open(key) {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: bytes(payload.iv) }, key, bytes(payload.data)
    );
    const html = new TextDecoder().decode(plain);
    await parsed;
    document.open();
    document.write(html);
    document.close();
  }

  // Once unlocked, the derived key is remembered so moving between case
  // studies doesn't ask again. A new build uses a new salt, which retires it.
  const saved = store.get();
  const showForm = () => document.documentElement.classList.remove('gate-pending');
  if (saved && saved.salt === payload.salt) {
    crypto.subtle.importKey('raw', bytes(saved.key), 'AES-GCM', false, ['decrypt'])
      .then(open)
      .catch(() => { store.clear(); showForm(); });
  } else {
    showForm();
  }

  const form = document.getElementById('gate-form');
  const input = document.getElementById('gate-password');
  const error = document.getElementById('gate-error');
  const submit = document.getElementById('gate-submit');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.textContent = '';
    submit.disabled = true;
    submit.textContent = 'Unlocking…';
    try {
      const material = await crypto.subtle.importKey(
        'raw', new TextEncoder().encode(input.value), 'PBKDF2', false, ['deriveKey']
      );
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: bytes(payload.salt), iterations: ${ITERATIONS}, hash: 'SHA-256' },
        material, { name: 'AES-GCM', length: 256 }, true, ['decrypt']
      );
      await open(key);
      const raw = new Uint8Array(await crypto.subtle.exportKey('raw', key));
      store.set({ salt: payload.salt, key: btoa(String.fromCharCode(...raw)) });
    } catch {
      error.textContent = "That password didn't work. Please try again.";
      submit.disabled = false;
      submit.textContent = 'View my work';
      input.select();
    }
  });
})();
</script>
</body>
</html>
`;
}

export default function protectWork({ password, email, paths = ['work'] }) {
  return {
    name: 'protect-work',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (!password) {
          throw new Error(
            'WORK_PASSWORD is not set, so the /work pages would be published unprotected. ' +
              'Add it to .env locally or as a repository secret for the deploy workflow.'
          );
        }

        const root = fileURLToPath(dir);
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const key = await deriveKey(password, salt);

        // /work itself is either work.html or work/index.html depending on
        // the build format; the case studies all sit beneath work/.
        const files = [];
        for (const path of paths) {
          const flat = join(root, `${path}.html`);
          if (await readFile(flat).then(() => true, () => false)) files.push(flat);
          const nested = join(root, path);
          files.push(...(await readdir(nested).then(() => htmlFiles(nested), () => [])));
        }

        for (const file of files) {
          const html = await readFile(file, 'utf8');
          const iv = crypto.getRandomValues(new Uint8Array(12));
          const data = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            key,
            new TextEncoder().encode(html)
          );
          const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? 'My Work';
          const stylesheets = html.match(/<link rel="stylesheet"[^>]*>/g) ?? [];
          const payload = { salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(data)) };
          await writeFile(file, gatePage({ title, stylesheets, payload, email }));
        }

        logger.info(`Password-protected ${files.length} page(s) under /${paths.join(', /')}`);
      },
    },
  };
}
