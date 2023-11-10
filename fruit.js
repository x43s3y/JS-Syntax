function fruit(fruitType, fruitWeight, pricePerKilo) {
    let fruitPrice = pricePerKilo * (fruitWeight/1000); 
    return `I need $${fruitPrice.toFixed(2)} to buy ${(fruitWeight/1000).toFixed(2)} kilograms ${fruitType}.`

}
console.log(fruit('orange', 2500, 1.80));