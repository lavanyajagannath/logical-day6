const string = 'Mr red has a red house and a red car';
const regex = /red/gi;
const newText = string.replace(regex, 'blue');
console.log(newText);