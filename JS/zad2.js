function divisibleNumbers(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

// Przykład
divisibleNumbers(10, 20, 3); // 12, 15, 18
