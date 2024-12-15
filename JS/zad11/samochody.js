// Dodaje auto do tablicy, jeśli jego cena jest większa niż 10000
export function dodajAuto(auto, tablica) {
    if (auto.cena_koncowa > 10000) {
        tablica.push(auto);
    }
}

// Dla wszystkich aut w tablicy zwiększa rok o 1 i przelicza cenę
export function zwiekszRokDlaWszystkich(tablica, biezacyRok) {
    tablica.forEach(auto => {
        auto.rok += 1;
        auto.aktualizujAuto(0, auto.rok, biezacyRok);
    });
}
