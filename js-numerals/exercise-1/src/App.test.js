import { spellNum } from "./utilCalculation";

it("spell one digit number", () => {
  expect(spellNum(2)).toBe("two");
  expect(spellNum(5)).toBe("five");
  expect(spellNum(8)).toBe("eight");
});

it("spell 2 digit numbers", () => {
  expect(spellNum(16)).toBe("sixteen");
  expect(spellNum(17)).toBe("seventeen");
  expect(spellNum(19)).toBe("nineteen");
});
