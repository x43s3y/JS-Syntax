function arrayRotation(array=[], rotations) {
    for(let i = 0; i < rotations; i++) {
        array.push(array.shift());
    }
    return array.join(' ');
}

console.log(arrayRotation([51, 47, 32, 61, 21], 2));