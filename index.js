import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const favicon = await readFile(path.join(__dirname, 'assets/favicon.ico'));

export default async function (ctx, app, next) {
  if (ctx.method === 'GET' && ctx.path === '/favicon.ico') {
    ctx.type = 'image/x-icon';
    ctx.body = favicon;
    return;
  }

  await next();
}
