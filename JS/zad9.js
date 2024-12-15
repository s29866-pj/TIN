function pascalsTriangle(height) {
    const triangle = [];
    for (let i = 0; i < height; i++) {
        const row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        if (i > 0) row.push(1);
        triangle.push(row);
        console.log(row.join(' '));
    }
}

// Przykład
pascalsTriangle(10);

