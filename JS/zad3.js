function multiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= size; j++) {
            row += (i * j).toString().padStart(4, ' '); 
        }
        console.log(row.trim());
    }
}

// Przykład
multiplicationTable(4);
// 1   2   3
// 2   4   6
// 3   6   9
