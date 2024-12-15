import Auto from './auto.js';
import { dodajAuto, zwiekszRokDlaWszystkich } from './samochody.js';

// Tworzenie nowego auta
const auto1 = new Auto(2015, 150000, 40000);
auto1.aktualizujAuto(0, auto1.rok, 2024);
console.log('Auto przed dodaniem:', auto1);

// Tablica samochodów
const samochody = [];

// Dodanie auta do tablicy
dodajAuto(auto1, samochody);
console.log('Samochody po dodaniu:', samochody);

// Zwiększenie roku dla wszystkich aut w tablicy
zwiekszRokDlaWszystkich(samochody, 2025);
console.log('Samochody po zwiększeniu roku:', samochody);
