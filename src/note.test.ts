import { Note, isScientificNotation, noteRegExp } from "./note";

describe("Music theory", () => {
  let theory: Note;
  beforeEach(() => {
    theory = new Note("A4");
  });
  describe("should decode scientific music notation", () => {
    it("should return the correct octave", () => {
      expect(theory.decodeNotation("A5").octave).toBe(5);
    });
    it("should handle input with length of 3", () => {
      expect(theory.decodeNotation("C#1")).toEqual({
        octave: 1,
        absolute: 13,
        note: "C#",
        noteIndex: 1,
        scientific: "C#1"
      });
    });
    it("should fail when sending in too many characters", () => {
      expect(() => {
        theory.decodeNotation("A#23");
      }).toThrow();
    });
  });

  describe("should encode scientific notation from number", () => {
    it("encodes properly", () => {
      expect(theory.encodeNotation(13)).toBe("C#1");
    });
  });

  describe("should return proper frequencies", () => {
    it("A4", () => {
      expect(theory.getFrequency(57)).toBe(440);
    });
    it("C0", () => {
      expect(theory.getFrequency(0)).toBeCloseTo(16.35);
    });
  });

  describe("test scientific notation assertion", () => {
    it("fetches regex properly", () => {
      expect(noteRegExp).toStrictEqual(/^[a-g]#?\d$/i);
    });
    it("checks 2 character notation", () => {
      expect(isScientificNotation("C0")).toBe(true);
    });
    it("fails on faulty string", () => {
      expect(isScientificNotation("c00")).toBe(false);
    });

    it("accepts sharp note", () => {
      expect(isScientificNotation("F#3")).toBe(true);
    });

    it("fails at letter outside of scope", () => {
      expect(isScientificNotation("J2")).toBe(false);
    });

    it("fails at multiple notes", () => {
      expect(isScientificNotation("C4D#4")).toBe(false);
    });
  });

  describe("Getting modified notes", () => {
    it("gets relative note", () => {
      const note = new Note("D4");
      expect(note.getRelativeNote(3)).toStrictEqual(new Note("F4"));
    });
  });
});
