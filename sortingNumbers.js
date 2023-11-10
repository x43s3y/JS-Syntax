function sortingNumbers(array) {
    array.sort((a, b) => a-b);
    let ascendingArray = [...array];
    array.reverse();
    let desendingArray = [...array];
    let answer = [];
    for(var i = 0; i < array.length; i++) {
        answer.push(ascendingArray[i]);
        answer.push(desendingArray[i]);
    }
    return answer.slice(0, array.length);
}

console.log(sortingNumbers([22,
    9,
    63,
    3,
    2,
    19,
    54,
    11,
    21,
    18]));