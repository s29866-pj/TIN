const areaCalculators = {
    rectangle: (a, b) => a * b,
    trapezoid: (a, b, h) => ((a + b) / 2) * h,
    parallelogram: (a, h) => a * h,
    triangle: (a, h) => (a * h) / 2
};

function calculateAreaCallback(type, ...params) {
    return areaCalculators[type](...params);
}

console.log(calculateAreaCallback('rectangle', 5, 10)); // 50
console.log(calculateAreaCallback('trapezoid', 5, 10, 4)); // 30
console.log(calculateAreaCallback('parallelogram', 6, 8)); // 48
console.log(calculateAreaCallback('triangle', 5, 40)); // 25
