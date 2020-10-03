import { spellNum } from "./utilCalculation";

describe(
  "spelling numbers",
  () => {
    it("spell one digit number", () => {
      expect(spellNum(2)).toBe("two");
      expect(spellNum(5)).toBe("five");
      expect(spellNum(8)).toBe("eight");
    });

    it("spell 2 digit numbers between 10 and 20 ending with -teen", () => {
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
      expect(spellNum(43)).toBe("forty-three");
      expect(spellNum(94)).toBe("ninety-four");
    });

    it("spell 3 digit numbers between", () => {
      expect(spellNum(123)).toBe("one hundred twenty-three");
      expect(spellNum(315)).toBe("three hundred fifteen");
      expect(spellNum(537)).toBe("five hundred thirty-seven");
    });

    it("spell 4 digit numbers between", () => {
      expect(spellNum(1235)).toBe("one thousand two hundred thirty-five");
      expect(spellNum(4648)).toBe("four thousand six hundred forty-eight");
      expect(spellNum(1872)).toBe("one thousand eight hundred seventy-two");
    });

    it("spell 5 digit numbers between 10000 and 99999", () => {
      expect(spellNum(10000)).toBe("ten thousand");
      expect(spellNum(20000)).toBe("twenty thousand");
      expect(spellNum(30000)).toBe("thirty thousand");
      expect(spellNum(12358)).toBe("twelve thousand three hundred fifty-eight");
      expect(spellNum(15178)).toBe(
        "fifteen thousand one hundred seventy-eight"
      );
      expect(spellNum(99999)).toBe(
        "ninety-nine thousand nine hundred ninety-nine"
      );
      expect(spellNum(100000)).toBe("hundred thousand");
      expect(spellNum(115648)).toBe(
        "one hundred fifteen thousand six hundred forty-eight"
      );
      expect(spellNum(982475)).toBe(
        "nine hundred eighty-two thousand four hundred seventy-five"
      );
    });

    it("spell number higher than a million", () => {
      expect(spellNum(5321358)).toBe(
        "five million three hundred twenty-one thousand three hundred fifty-eight"
      );
      expect(spellNum(8723441)).toBe(
        "eight million seven hundred twenty-three thousand four hundred forty-one"
      );
      expect(spellNum(9999999)).toBe(
        "nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
      );
    });

    it("spell 100,1000,and million", () => {
      expect(spellNum(100)).toBe("one hundred");
      expect(spellNum(1000)).toBe("one thousand");
      expect(spellNum(1000000)).toBe("one million");
    });
  },
  describe("check input", () => {
    it("check if input is valid", () => {
      expect(spellNum("a number")).toBe("The input is invalid");
    });
  })
);
