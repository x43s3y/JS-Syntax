function sameNumbers(number) {
    let sum = 0;
    let flag = false;
    let digit = number % 10;
    let lastDigit = digit;
    let result = "";
    while (number !== 0) {
        let digit = number % 10;
        number = Math.trunc(number / 10);
        if (lastDigit !== digit){
            flag = true;
        }
        lastDigit = digit;
        sum += digit;
    }
    result = (flag) ? "false\n" + sum : "true\n" + sum;
    return result;
}

console.log(sameNumbers(1234));
