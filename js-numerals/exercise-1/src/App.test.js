import { spellNum } from "./utilCalculation";

it("spell one digit number", () => {
  expect(spellNum(2)).toBe("two");
  expect(spellNum(5)).toBe("five");
  expect(spellNum(8)).toBe("eight");
});
