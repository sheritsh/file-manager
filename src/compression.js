import { resolve } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
// Brotli is a compression algorithm that is more efficient than gzip
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';

export async function handleCompress(source, destination) {
  if (!source || !destination) {
    console.error('Invalid input');
    return;
  }
  const sourcePath = resolve(process.cwd(), source);
  const destPath = resolve(process.cwd(), destination);
  await pipeline(createReadStream(sourcePath), createBrotliCompress(), createWriteStream(destPath));
}

export async function handleDecompress(source, destination) {
  if (!source || !destination) {
    console.error('Invalid input');
    return;
  }
  const sourcePath = resolve(process.cwd(), source);
  const destPath = resolve(process.cwd(), destination);
  await pipeline(
    createReadStream(sourcePath),
    createBrotliDecompress(),
    createWriteStream(destPath)
  );
}
