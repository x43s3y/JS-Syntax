function printAndSum(start, end) {
    let sum = 0;
    let numbers = "";
    for (let index = start; index <= end; index++) {
        numbers += index + " ";
        sum += index
    }
    console.log(numbers);
    result = "Sum: " + sum;
    console.log(result);
}

printAndSum(5, 10)