var numbers = {
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

export const spellNum = (num) => {
  return numbers[num];
};
