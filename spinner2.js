const spinner = async(sentence) => {
  process.stdout.write(sentence);
  const delayValues = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r|  ', "\n"];
  let delayCounter = 100;
  for (const char of delayValues) {
    setTimeout(async() => {
      process.stdout.write(char);
    }, delayCounter);
    delayCounter += 200;
  }
};

spinner('hello from spinner2.js... \rheyyy\n');