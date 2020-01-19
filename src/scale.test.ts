import { Scale } from "./scale";

describe("Scale", () => {
  it("sets major scale", () => {
    let scale = new Scale("C4", "major");

    expect(scale.getNotes()).toEqual([
      "C4",
      "D4",
      "E4",
      "F4",
      "G4",
      "A4",
      "B4",
      "C5"
    ]);
  });
  it("sets minor scale", () => {
    let scale = new Scale("C4", "minor");

    expect(scale.getNotes()).toEqual([
      "C4",
      "D4",
      "D#4",
      "F4",
      "G4",
      "G#4",
      "A#4",
      "C5"
    ]);
  });
  it("handles cusotm length", () => {
    let scale = new Scale("C4", "major", 8);
    expect(scale.getNotes().length).toBe(8);
    expect(scale.getNotes()[7]).toBe("C5");
  });
  it("sets persion scale", () => {
    let scale = new Scale("C4", "persian");

    expect(scale.getNotes()).toEqual([
      "C4",
      "C#4",
      "E4",
      "F4",
      "F#4",
      "G#4",
      "B4",
      "C5"
    ]);
  });
});
