import { Note } from "./note";

export class Notes {
  notes: Note[];
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes.map(note => {
      return note.scientific;
    });
  }
}
