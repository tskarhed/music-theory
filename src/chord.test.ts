import { validateChordString, Chord } from "./chord";

describe("Chord", () => {
  it("validates the chord string", () => {
    expect(validateChordString("D")).toBe(true);
    expect(validateChordString("D7")).toBe(true);
    expect(validateChordString("Asus9")).toBe(true);
    expect(validateChordString("B#aug4")).toBe(true);
    expect(validateChordString("D44")).toBe(false);
    expect(validateChordString("B#aug4B#aug4")).toBe(false);
  });

  it("should construct the correct root note", () => {
    const chord = new Chord("D");
    expect(chord.getNotes()[0]).toBe("D4");
  });
});
