document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Zamknij wszystkie sekcje
        document.querySelectorAll('.accordion-content').forEach(el => {
            el.classList.remove('active');
        });

        // Otwórz aktualną sekcję, jeśli nie była aktywna
        if (!isActive) {
            content.classList.add('active');
        }
    });
});