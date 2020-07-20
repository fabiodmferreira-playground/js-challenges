const { Writable } = require('stream');
const { Readable } = require('stream');


const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

// process.stdin.pipe(outStream);

// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXYZ');

// inStream.push(null); // No more data

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
