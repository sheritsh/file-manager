import { handleUp, handleCd, handleLs } from './navigation.js';
import {
  handleCat,
  handleAdd,
  handleMkdir,
  handleRn,
  handleCp,
  handleMv,
  handleRm,
} from './fileOps.js';
import { handleOs } from './osInfo.js';
import { handleHash } from './hash.js';
import { handleCompress, handleDecompress } from './compression.js';

export async function handleCommand(input) {
  const [command, ...args] = input.trim().split(' ');

  switch (command) {
    case 'up':
      await handleUp();
      break;
    case 'cd':
      await handleCd(args[0]);
      break;
    case 'ls':
      await handleLs();
      break;
    case 'cat':
      await handleCat(args[0]);
      break;
    case 'add':
      await handleAdd(args[0]);
      break;
    case 'mkdir':
      await handleMkdir(args[0]);
      break;
    case 'rn':
      await handleRn(args[0], args[1]);
      break;
    case 'cp':
      await handleCp(args[0], args[1]);
      break;
    case 'mv':
      await handleMv(args[0], args[1]);
      break;
    case 'rm':
      await handleRm(args[0]);
      break;
    case 'os':
      await handleOs(args[0]);
      break;
    case 'hash':
      await handleHash(args[0]);
      break;
    case 'compress':
      await handleCompress(args[0], args[1]);
      break;
    case 'decompress':
      await handleDecompress(args[0], args[1]);
      break;
    default:
      console.error('Invalid input');
  }
}
