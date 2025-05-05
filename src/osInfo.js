import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

export async function handleOs(arg) {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--cpus':
      console.log(`Overall amount of CPUs: ${cpus().length}`);
      cpus().forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model} (${cpu.speed / 1000} GHz)`);
      });
      break;
    case '--homedir':
      console.log(homedir());
      break;
    case '--username':
      console.log(userInfo().username);
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.error('Invalid input');
  }
}
