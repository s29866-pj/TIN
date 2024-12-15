class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    // Powiększa cenę wyjściową o 1000
    zwiekszCeneWyjsciowa() {
        this.cena_wyjsciowa += 1000;
        this.cena_koncowa = this.cena_wyjsciowa;
    }

    // Obniża cenę końcową o 1000 za każdy rok wieku
    obnizCeneZaWiek(biezacyRok) {
        const lata = biezacyRok - this.rok;
        this.cena_koncowa -= lata * 1000;
    }

    // Obniża cenę końcową o 10000 za każde 100000 km przebiegu
    obnizCeneZaPrzebieg() {
        const setkiTysiecy = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= setkiTysiecy * 10000;
    }

    // Dopisuje nowy przebieg i rok, automatycznie przeliczając cenę
    aktualizujAuto(nowyPrzebieg, nowyRok, biezacyRok) {
        this.przebieg += nowyPrzebieg;
        this.rok = nowyRok;
        this.cena_koncowa = this.cena_wyjsciowa; // Reset ceny końcowej
        this.obnizCeneZaWiek(biezacyRok);
        this.obnizCeneZaPrzebieg();
    }
}

export default Auto;
