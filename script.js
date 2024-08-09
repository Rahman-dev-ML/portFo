document.addEventListener("DOMContentLoaded", function() {
    const background1 = document.getElementById('background1');
    const background2 = document.getElementById('background2');

    setTimeout(() => {
        background1.style.opacity = '0';
        background2.style.opacity = '1';
    }, 1500);

    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);
});
