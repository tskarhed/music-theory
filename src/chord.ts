import { Scale } from "./scale";
import { Notes } from "./notes";
import { Note } from "./note";

export class Chord extends Notes {
  constructor(chordString: string, octave = 4) {
    super();
    if (!validateChordString(chordString)) {
      throw new Error("The string does not represent a valid chord");
    }
    this.notes[0] = new Note(chordString[0] + octave);
  }
}

export const validateChordString = (chordString: string) =>
  chordRegExp.test(chordString);

export const chordRegExp = /^[a-g]#?m?(sus|aug|add)?\d?$/i;
