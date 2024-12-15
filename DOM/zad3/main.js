const cars = [
    { rok: 2018, przebieg: 120000, cena_wyjsciowa: 50000, cena_koncowa: 35000 },
    { rok: 2020, przebieg: 80000, cena_wyjsciowa: 75000, cena_koncowa: 65000 },
    { rok: 2015, przebieg: 180000, cena_wyjsciowa: 30000, cena_koncowa: 20000 },
    { rok: 2022, przebieg: 45000, cena_wyjsciowa: 100000, cena_koncowa: 90000 }
];

function createCarTable(cars) {
    const table = document.createElement('table');
    
    // Nagłówki
    const headerRow = table.insertRow();
    const headers = ['Rok', 'Przebieg', 'Cena Wyjściowa', 'Cena Końcowa'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Dane samochodów
    cars.forEach(car => {
        const row = table.insertRow();
        row.insertCell().textContent = car.rok;
        row.insertCell().textContent = car.przebieg;
        row.insertCell().textContent = car.cena_wyjsciowa;
        row.insertCell().textContent = car.cena_koncowa;
    });

    document.getElementById('tableContainer').appendChild(table);
}

// Wywołanie funkcji
createCarTable(cars);