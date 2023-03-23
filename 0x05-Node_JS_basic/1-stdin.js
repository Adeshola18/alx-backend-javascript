console.log = () => {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
};

console.log();
// process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const line = process.stdin.read();

  if (line) {
    process.stdout.write(`Your name is: ${line}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
