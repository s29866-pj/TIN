function isPythagoreanTriple(a, b, c) {
    const [x, y, z] = [a, b, c].sort((a, b) => a - b); // Sortujemy liczby rosnąco
    return x * x + y * y === z * z;
}


console.log(isPythagoreanTriple(3, 4, 5)); 
console.log(isPythagoreanTriple(5, 12, 13)); 
console.log(isPythagoreanTriple(1, 2, 3)); 
