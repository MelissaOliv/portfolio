document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slide-in');

    const handleScroll = () => {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                image.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa no carregamento inicial
});
