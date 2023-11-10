function pascalCaseSplitter(string) {
    return string.split(/(?=[A-Z])/).join(', ');
}

console.log(pascalCaseSplitter('ThisIKsTheStringToSplit'));