import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

export async function handleHash(path) {
  if (!path) {
    console.error('Invalid input');
    return;
  }
  const filePath = resolve(process.cwd(), path);
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);
  await new Promise((resolve, reject) => {
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', resolve);
    stream.on('error', reject);
  });
  console.log(hash.digest('hex'));
}
