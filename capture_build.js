const { spawn } = require('child_process');
const fs = require('fs');

const child = spawn('npx', ['vite', 'build'], { shell: true });

let output = '';

child.stdout.on('data', (data) => {
    output += data.toString();
});

child.stderr.on('data', (data) => {
    output += data.toString();
});

child.on('close', (code) => {
    fs.writeFileSync('build_output.txt', output, 'utf8');
    console.log(`Process exited with code ${code}`);
});
