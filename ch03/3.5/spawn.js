import spawn from 'child_process';

const process = spawn('python3', ['test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
});