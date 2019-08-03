# :musical_score: music-theory

Create notes and get their frequencies! Create scales! Create chords!

## Usage

### Create new note using scientific notation
```typescript
import { Note } from 'music-theory';

let note = new Note('D#4');
note.freq //Gives frequency

```


### Create scales
```typescript
import { Scale } from 'music-theory';

let scale = new Scale('C3', 'major'); //Generates one loop of the scale
scale.getNotes();// Prints all the notes in the scale


let scale = new Scale('D4', 'minor', 8); //Generates 8 notes in the minor scale
```
