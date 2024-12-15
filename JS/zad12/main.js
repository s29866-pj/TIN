import Ocena from './ocena.js';
import Student from './student.js';

// Tworzenie nowego studenta
let student = new Student("Jan", "Kowalski");
console.log(student.hello());
// Witaj Jan Kowalski, Twoja średnia ocen to: 0.

// Dodawanie ocen
student.ocena = new Ocena("WPR", 4);
student.ocena = new Ocena("TIN", 3);
student.ocena = new Ocena("POJ", 2);

console.log(student.hello());
// Witaj Jan Kowalski, Twoja średnia ocen to: 3.00.

console.log(student.oceny);
// Przedmiot: WPR - ocena 4. Przedmiot: TIN - ocena 3. Przedmiot: POJ - ocena 2.
