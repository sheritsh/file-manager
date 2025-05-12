import { resolve } from 'node:path';
import { writeFile, mkdir, rename, rm } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

export async function handleCat(path) {
  if (!path) {
    console.error('Invalid input');
    return;
  }
  const filePath = resolve(process.cwd(), path);
  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
  await new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}

export async function handleAdd(filename) {
  if (!filename) {
    console.error('Invalid input');
    return;
  }
  const filePath = resolve(process.cwd(), filename);
  await writeFile(filePath, '');
}

export async function handleMkdir(dirname) {
  if (!dirname) {
    console.error('Invalid input');
    return;
  }
  const dirPath = resolve(process.cwd(), dirname);
  await mkdir(dirPath);
}

export async function handleRn(source, newName) {
  if (!source || !newName) {
    console.error('Invalid input');
    return;
  }
  const sourcePath = resolve(process.cwd(), source);
  const newPath = resolve(process.cwd(), newName);
  await rename(sourcePath, newPath);
}

export async function handleCp(source, destination) {
  if (!source || !destination) {
    console.error('Invalid input');
    return;
  }
  const sourcePath = resolve(process.cwd(), source);
  const destPath = resolve(process.cwd(), destination);
  await pipeline(createReadStream(sourcePath), createWriteStream(destPath));
}

export async function handleMv(source, destination) {
  if (!source || !destination) {
    console.error('Invalid input');
    return;
  }
  await handleCp(source, destination);
  await handleRm(source);
}

export async function handleRm(path) {
  if (!path) {
    console.error('Invalid input');
    return;
  }
  const filePath = resolve(process.cwd(), path);
  await rm(filePath);
}
