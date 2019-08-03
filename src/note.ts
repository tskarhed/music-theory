const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export class Note {
  absoluteSemitones: number;
  freq: number;
  octave: number;
  noteIndex: number;
  note: string; // Consider creating type
  scientific: string;

  constructor(notation: string | number) {
    const note = this.decodeNotation(
      typeof notation == "number" ? this.encodeNotation(notation) : notation
    );

    this.note = note.note;
    this.noteIndex = note.noteIndex;
    this.octave = note.octave;
    this.absoluteSemitones = note.absolute;
    this.freq = this.getFrequency(note.absolute);
    this.scientific = note.scientific;
  }

  // private
  // @n n half notes steps from C0 (Including black keys). Starts at C0. A4 is number 57.
  getFrequency(n: number) {
    return Math.pow(2, (n - 57) / 12) * 440;
  }

  //Returns amount of half-notes steps away from C0
  decodeNotation(string: string) {
    let note;
    if (string.length === 3) {
      note = string.slice(0, -1).toUpperCase();
    } else if (string.length === 2) {
      note = string[0].toUpperCase();
    } else {
      throw new Error("Faulty music notation");
    }
    const octave = parseInt(string.slice(-1), 10);

    return {
      note,
      noteIndex: notes.indexOf(note),
      octave,
      absolute: notes.indexOf(note) + 12 * octave,
      scientific: string
    };
  }

  encodeNotation(n: number) {
    const note = notes[n % 12];
    const octave = Math.floor(Math.floor(n) / 12);
    return note + octave;
  }
}
