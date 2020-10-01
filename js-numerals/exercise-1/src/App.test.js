import { spellNum } from "./utilCalculation";

it("spell one digit number", () => {
  expect(spellNum(2)).toBe("two");
  expect(spellNum(5)).toBe("five");
  expect(spellNum(8)).toBe("eight");
});

it("spell 2 digit numbers between 10 and 20", () => {
  expect(spellNum(16)).toBe("sixteen");
  expect(spellNum(17)).toBe("seventeen");
  expect(spellNum(19)).toBe("nineteen");
});

it("spell 2 digit numbers ending with -ty", () => {
  expect(spellNum(70)).toBe("seventy");
  expect(spellNum(80)).toBe("eighty");
  expect(spellNum(90)).toBe("ninety");
});

it("spell 2 digit numbers between 20 and 99", () => {
  expect(spellNum(65)).toBe("sixty-five");
  expect(spellNum(73)).toBe("seventy-three");
  expect(spellNum(94)).toBe("ninety-four");
});

it("spell 3 digit numbers between", () => {
  expect(spellNum(100)).toBe("hundred");
  expect(spellNum(315)).toBe("three hundred fifteen");
  expect(spellNum(537)).toBe("five hundred thirty-seven");
});

it("spell 4 digit numbers between", () => {
  expect(spellNum(1235)).toBe("one thousand two hundred thirty-five");
  expect(spellNum(4638)).toBe("four thousand six hundred thirty-eight");
  expect(spellNum(1872)).toBe("one thousand eight hundred seventy-two");
});

it("spell 5 digit numbers between", () => {
  expect(spellNum(12358)).toBe("twelve thousand three hundred fifty-eight");
  expect(spellNum(15678)).toBe("fifteen thousand six hundred seventy-eight");
  expect(spellNum(99999)).toBe("ninety-nine thousand nine hundred ninety-nine");
});
