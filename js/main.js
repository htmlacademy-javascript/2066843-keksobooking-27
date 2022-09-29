let getRandom = function(min, max, floatNumber){
  if(min < 0 || max < 0 || floatNumber < 0){
    return NaN
  } else if (min > max){
    let c = min;
    min = max;
    max = c;
  } else if (min === max){
    return min;
  } else {
  }

  const randomNumbder = (Math.random() * (max - min) + min).toFixed(floatNumber);
  return parseFloat(randomNumbder);
}

let result = getRandom(5, 40, 10);
console.log(result);
