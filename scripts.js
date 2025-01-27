// Sayfa yüklemesi ile animasyonları başlat
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

    // Hover efektleri için animasyon
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
