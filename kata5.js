const urlEncode = function(text) {
  let string = '';
  text = text.replace();
  for (let char of text) {
    if (char === ' ') {
      char = '%20';
      string += char;
    } else {
      string += char;
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));