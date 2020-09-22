let characters = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r\\  '];
let time = 0;
for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
  time += 200;
};