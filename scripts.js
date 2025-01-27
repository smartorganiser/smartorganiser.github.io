// Abonelik Formu Kontrolü
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Formun normal şekilde gönderilmesini engeller

    var email = document.getElementById("email").value;

    if (email) {
        alert("Abonelik başarılı! E-posta adresiniz: " + email);
        document.getElementById("email").value = "";  // Formu sıfırla
    } else {
        alert("Lütfen geçerli bir e-posta adresi girin.");
    }
});
