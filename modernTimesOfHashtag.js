function modernTimesOfHashtag(string) {
    string = string.split("#");
    let answer = "";
    for (var i = 1; i < string.length; i++) {
        word = string[i].split(" ").shift();
        answer += (/^[a-zA-Z]+$/.test(word)) ? word + '\n' : "";
    }
    return answer;
}

console.log(modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia'));