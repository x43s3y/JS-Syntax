function reversedChars(firstChar, secondChar, thirdChar) {
    let string = firstChar + secondChar + thirdChar;
    return string.split("").reverse().join(" ");
}