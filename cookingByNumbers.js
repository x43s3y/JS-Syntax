function cookingByNumbers(number, ...args) {
    number = Number(number);
    while (args.length) {
        command = args.shift();
        if (command === "chop") {
            number /= 2;
        } else if (command === "dice"){
            number = Math.sqrt(number);
        }else if (command === "spice"){
            number++;
        }else if (command === "bake"){
            number *= 3;
        }else if (command === "fillet"){
            number -= number / 5;
        }
        console.log(number);
    }
}
