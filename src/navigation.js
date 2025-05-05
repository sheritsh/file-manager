import { chdir } from 'node:process';
import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { center, getLsTableWidths, getLsTableBorder, getLsTableHeader } from './utils.js';

export async function handleUp() {
  const currentDir = process.cwd();
  const parentDir = resolve(currentDir, '..');
  if (parentDir !== currentDir) {
    chdir(parentDir);
  }
}

export async function handleCd(path) {
  if (!path) {
    console.error('Invalid input');
    return;
  }
  const targetPath = resolve(process.cwd(), path);
  try {
    chdir(targetPath);
  } catch (error) {
    throw new Error('Operation failed');
  }
}

export async function handleLs() {
  const items = await readdir(process.cwd(), { withFileTypes: true });
  const dirs = items
    .filter((item) => item.isDirectory())
    .map((item) => ({ name: item.name, type: 'directory' }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const files = items
    .filter((item) => item.isFile())
    .map((item) => ({ name: item.name, type: 'file' }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const allItems = [...dirs, ...files];

  const { nameColWidth, typeColWidth, indexColWidth } = getLsTableWidths(allItems);
  const border = getLsTableBorder(indexColWidth, nameColWidth, typeColWidth);
  const header = getLsTableHeader(indexColWidth, nameColWidth, typeColWidth);

  console.log(border);
  console.log('|' + header + '|');
  console.log(border);
  allItems.forEach((item, idx) => {
    console.log(
      '|' +
        [
          center(idx, indexColWidth),
          center(` '${item.name}' `, nameColWidth),
          center(` '${item.type}' `, typeColWidth),
        ].join('|') +
        '|'
    );
  });
  console.log(border + '\n');
}
