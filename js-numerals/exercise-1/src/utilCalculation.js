let numbers = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  15: "fifteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
};

let divider = [10, 100, 1000, 1000000];

const spellNumBetweenTenAndTwenty = (num, remainder) => {
  return (numbers[num] = numbers[remainder].concat("teen"));
};

const spellNumBetweenTwentyAndNinetyNine = (remainder, num, divisor) => {
  if (remainder === 0) {
    if (num / divisor === 8) {
      return numbers[num / divisor].concat("y");
    } else {
      return numbers[num / divisor].concat("ty");
    }
  } else {
    if (Math.floor(num / divisor) === 8) {
      return numbers[Math.floor(num / divisor)].concat(
        "y-",
        numbers[remainder]
      );
    } else if (20 < num && num < 60) {
      return numbers[num - remainder].concat("-", numbers[remainder]);
    } else {
      return numbers[Math.floor(num / divisor)].concat(
        "ty-",
        numbers[remainder]
      );
    }
  }
};

export const spellNum = (num) => {
  let tempNum;

  if (isNaN(num)) {
    return "The input is invalid";
  }

  if (num === "-0") {
    return numbers[0];
  }

  if (num in numbers) {
    return numbers[num];
  }

  if (num < 0) {
    tempNum = num * -1;
    if (tempNum in numbers) {
      return (numbers[num] = "minus ".concat(numbers[tempNum]));
    }
  } else {
    tempNum = num;
  }

  for (let iterNum = 0; iterNum <= tempNum; iterNum++) {
    if (iterNum in numbers) {
      continue;
    }

    let firstDivideNum;

    for (let index = divider.length - 1; index >= 0; index--) {
      if (Math.floor(iterNum / divider[index]) >= 1) {
        firstDivideNum = divider[index];
        break;
      }
    }

    let remainder = iterNum % firstDivideNum;

    if (10 < iterNum && iterNum < 20 && !(iterNum in numbers)) {
      numbers[iterNum] = spellNumBetweenTenAndTwenty(iterNum, remainder);
    }

    if (20 < iterNum && iterNum < 100) {
      numbers[iterNum] = spellNumBetweenTwentyAndNinetyNine(
        remainder,
        iterNum,
        firstDivideNum
      );
    }

    let quotient = iterNum / firstDivideNum;

    if (100 < iterNum) {
      numbers[iterNum] =
        remainder === 0
          ? numbers[Math.floor(quotient)].concat(" ", numbers[firstDivideNum])
          : numbers[Math.floor(quotient)].concat(
              " ",
              numbers[firstDivideNum],
              " ",
              spellNum(remainder)
            );
    }
  }

  return num > 0 ? numbers[num] : "minus ".concat(numbers[tempNum]);
};
