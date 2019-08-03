import { Notes } from "./notes";
import { Note } from "./note";

type ScaleName = "major" | "minor";

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
    const scaleLength = length ? length : steps.length;

    this.notes.push(start);
    for (let i = 0; i < scaleLength - 1; i++) {
      let previousNote = this.notes[i];
      this.notes.push(
        new Note(previousNote.absoluteSemitones + steps[i % scaleLength])
      );
    }
  }

  getSteps(scale: ScaleName) {
    switch (scale) {
      case "major":
      default:
        return [2, 2, 1, 2, 2, 2, 1];
    }
  }
}
