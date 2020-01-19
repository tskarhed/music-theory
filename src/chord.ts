import { Scale } from "./scale";
import { Notes } from "./notes";

export class Chord extends Notes {
  constructor(chordString: string, ocatve = 4) {
    super();
  }
}

export const validateChordString = (chordString: string) =>
  chordRegExp.test(chordString);

export const chordRegExp = /^[a-g]#?m?(sus|aug|add)?\d?$/i;
