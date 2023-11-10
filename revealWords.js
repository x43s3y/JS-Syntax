function revealWords(fillers, string = "") {
  fillers = fillers.split(", ");
  string = string.split(" ");
  for (let j = 0; j < string.length; j++) {
    for (var i = 0; i < fillers.length; i++) {
      if (string[j].length == fillers[i].length) {
        if (string[j] === "*".repeat(fillers[i].length)) {
          string.splice(j, 1, fillers[i]);
        }
      }
    }
  }
  return string.join(' ');
}
console.log(revealWords('great, learning',

'softuni is ***** place for ******** new programming languages'));
