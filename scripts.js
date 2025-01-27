// Sayfa yüklenmesi ile animasyonları başlat
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('active');
            }
        });
    });

    // Scroll ile görünürlük kontrolü
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
});
