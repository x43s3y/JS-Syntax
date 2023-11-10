function printEveryNthElement(array=[], n) {
    outcome = []
    for (var i = 0; i <= array.length; i+=n) {
        outcome.push(array[i]);
    }
    return outcome;
}   

console.log(printEveryNthElement(['5',

'20',

'31',

'4',

'20'],

2));