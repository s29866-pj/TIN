function choinkaNoca(height) {
    for (let i = height; i >= 1; i--) {
        const stars = '*'.repeat(i);
        const spaces = ' '.repeat(height - i);
        console.log(stars + spaces + spaces + stars);
    }
    console.log('*'.repeat(height * 2));
}

choinkaNoca(8);

