function stringSubstring(word, string) {
    let answer;
    let array = string.split(' ');
    for(var i = 0; i < array.length; i++) {
        if ((array[i].toLowerCase().indexOf(word.toLowerCase()) !== -1) && array[i].length === word.length) {
            answer = word;
            break;
        } else {
            answer = `${word} not found!`;
        }
    }
    return answer;
}

console.log(stringSubstring('Python',

'PyThOn is the best  programming language'));