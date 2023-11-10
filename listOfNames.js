function listOfNames(array) {
    array.sort()
    answer = "";
    for (var i = 1; i <= array.length; i++) {
        answer += `${i}.` + array[i-1] + '\n'
    }
    return answer.trim();
}

console.log(listOfNames(["John"]))