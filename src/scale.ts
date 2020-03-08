import { Notes } from "./notes";
import { Note } from "./note";

type ScaleName = "persian" | "major" | "minor" | "pentatonic" | "pentatonic minor";

export class Scale extends Notes {
  startNote: Note;
  type: ScaleName;
  constructor(start: string, scale: ScaleName, length?: number) {
    super();
    this.startNote = new Note(start);
    this.type = scale;
    this.setScale(this.startNote, scale, length);
  }

  setScale(start: Note, scale: ScaleName, length?: number) {
    const steps = this.getSteps(scale);
    const scaleLength = length ? length - 1 : steps.length;

    this.notes.push(start);
    for (let i = 0; i < scaleLength; i++) {
      let previousNote = this.notes[i];
      this.notes.push(
        new Note(previousNote.absoluteSemitones + steps[i % steps.length])
      );
    }
  }

  getSteps(scale: ScaleName) {
    switch (scale) {
      case "minor":
        return [2, 1, 2, 2, 1, 2, 2];
      case "persian":
        return [1, 3, 1, 1, 2, 3, 1];
      case "pentatonic minor":
        return [3, 2, 2, 3, 2];
      case "pentatonic":
        return [2, 2, 3, 2, 3]
      case "major":
      default:
        return [2, 2, 1, 2, 2, 2, 1];
    }
  }
}
