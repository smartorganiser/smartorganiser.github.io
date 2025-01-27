// Sayfa yüklendiğinde animasyonlar için başlangıç
document.addEventListener('DOMContentLoaded', () => {
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach((section) => {
        section.classList.add('fade-in');
    });
});

// Scroll ile animasyon ekleme
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

// Elementin görünür olup olmadığını kontrol etme fonksiyonu
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}
