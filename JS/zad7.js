function rectangleArea(a, b) {
    return a * b;
}

function trapezoidArea(a, b, h) {
    return ((a + b) / 2) * h;
}

function parallelogramArea(a, h) {
    return a * h;
}

function triangleArea(a, h) {
    return (a * h) / 2;
}

function calculateArea(type, ...params) {
    switch (type) {
        case 'rectangle':
            return rectangleArea(...params);
        case 'trapezoid':
            return trapezoidArea(...params);
        case 'parallelogram':
            return parallelogramArea(...params);
        case 'triangle':
            return triangleArea(...params);
        default:
            throw new Error('Unknown figure type');
    }
}

// Przykład
console.log(calculateArea('rectangle', 5, 10)); 
console.log(calculateArea('trapezoid', 5, 10, 4)); 
console.log(calculateArea('parallelogram', 6, 8)); 
console.log(calculateArea('triangle', 5, 10)); 
