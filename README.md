# File Manager

A command-line file manager built with Node.js (v22.14+), supporting navigation, file operations, OS info, hashing, and compression—all using only Node.js built-in modules.

## Features

- CLI navigation (`cd`, `up`, `ls`)
- File operations (`cat`, `add`, `mkdir`, `rn`, `cp`, `mv`, `rm`)
- OS info (`os --EOL`, `os --cpus`, `os --homedir`, `os --username`, `os --architecture`)
- Hash calculation (`hash`)
- Compression/decompression with Brotli (`compress`, `decompress`)
- Beautiful, table-formatted output for `ls`
- No external dependencies

## Getting Started

### Prerequisites

- Node.js v22.14.0 or higher

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd file-manager
   ```

2. Install dependencies (none required, but run to create `node_modules` if needed):
   ```sh
   npm install
   ```

### Usage

Start the file manager with your username:

```sh
npm run start -- --username=your_username
```

You'll see:

```
Welcome to the File Manager, your_username!
You are currently in /your/home/directory
```

### Commands

#### Navigation & Working Directory

- `up`  
  Go up one directory (does not go above root).
- `cd <path_to_directory>`  
  Change to a specific directory (relative or absolute).
- `ls`  
  List files and folders in the current directory in a formatted table.

#### File Operations

- `cat <path_to_file>`  
  Print file content.
- `add <new_file_name>`  
  Create an empty file.
- `mkdir <new_directory_name>`  
  Create a new directory.
- `rn <path_to_file> <new_filename>`  
  Rename a file.
- `cp <path_to_file> <path_to_new_directory>`  
  Copy a file.
- `mv <path_to_file> <path_to_new_directory>`  
  Move a file (copy + delete original).
- `rm <path_to_file>`  
  Delete a file.

#### OS Info

- `os --EOL`  
  Print system End-Of-Line symbol.
- `os --cpus`  
  Print CPU info.
- `os --homedir`  
  Print home directory.
- `os --username`  
  Print system username.
- `os --architecture`  
  Print CPU architecture.

#### Hash

- `hash <path_to_file>`  
  Print SHA256 hash of a file.

#### Compression

- `compress <path_to_file> <path_to_destination>`  
  Compress a file using Brotli.
- `decompress <path_to_file> <path_to_destination>`  
  Decompress a Brotli-compressed file.

#### Exit

- `.exit`  
  Exit the file manager.

## Notes

- The current working directory is always shown after each command.
- Invalid commands or errors will print a helpful message.
- You cannot navigate above your root directory.
