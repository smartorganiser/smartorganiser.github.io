// Animasyonları tetiklemek için scroll dinleyicisi
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('active');
            }
        });
    });

    // Scroll ile element görünürse aktif et
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
});
