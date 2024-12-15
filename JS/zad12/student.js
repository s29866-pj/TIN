import Ocena from './ocena.js';

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = []; // Tablica na oceny (prywatna)
        this.srednia = 0; // Pole na średnią ocen
    }

    // Metoda powitalna
    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia.toFixed(2)}.`;
    }

    // Setter oceny: dodaje obiekt klasy Ocena i przelicza średnią
    set ocena(ocena) {
        if (ocena instanceof Ocena) {
            this._oceny.push(ocena);
            this.przeliczSrednia();
        } else {
            throw new Error("Ocena musi być obiektem klasy Ocena.");
        }
    }

    // Getter oceny: zwraca listę ocen w formacie tekstowym
    get oceny() {
        if (this._oceny.length === 0) {
            return "Brak ocen.";
        }
        return this._oceny
            .map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`)
            .join(". ");
    }

    // Przelicza średnią ocen
    przeliczSrednia() {
        const suma = this._oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
        this.srednia = this._oceny.length > 0 ? suma / this._oceny.length : 0;
    }
}

export default Student;
