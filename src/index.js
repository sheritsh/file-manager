import { homedir } from 'node:os';
import { createInterface } from 'node:readline';
import { chdir } from 'node:process';
import { handleCommand } from './cli.js';

const username = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')[1];

if (!username) {
  console.error('Please provide a username using --username=your_username');
  process.exit(1);
}

console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());
console.log(`You are currently in ${process.cwd()}`);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async (input) => {
  if (input === '.exit') {
    rl.close();
  }

  try {
    await handleCommand(input);
    console.log(`You are currently in ${process.cwd()}`);
  } catch (error) {
    console.error('Operation failed');
  }
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
