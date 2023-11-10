function vacation(groupSize, groupType, weekDay) {
  let price;
  let checkOutPrice;
  if (groupType === "Students") {
    if (weekDay === "Friday") {
      price = 8.45;
    } else if (weekDay === "Saturday") {
      price = 9.8;
    } else if (weekDay === "Sunday") {
      price = 10.46;
    }
  }

  if (groupType === "Business") {
    if (weekDay === "Friday") {
      price = 10.90;
    } else if (weekDay === "Saturday") {
      price = 15.6;
    } else if (weekDay === "Sunday") {
      price = 16;
    }
  }

  if (groupType === "Regular") {
    if (weekDay === "Friday") {
      price = 15;
    } else if (weekDay === "Saturday") {
      price = 20;
    } else if (weekDay === "Sunday") {
      price = 22.5;
    }
  }
  checkOutPrice = price * groupSize;
  if (groupType === "Students" && groupSize >= 30) {
    checkOutPrice -= checkOutPrice * (15/100)
  }else if (groupType === "Business" && groupSize >= 100){
    checkOutPrice -= price * 10
  }else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20){
    checkOutPrice -= checkOutPrice * (5/100)
  }
  return `Total price: ${checkOutPrice.toFixed(2).toString()}`;
}