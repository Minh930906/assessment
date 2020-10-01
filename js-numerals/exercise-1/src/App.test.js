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
