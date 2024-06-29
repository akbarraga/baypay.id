/**
 * script menu icon
 */
const MenuIcon = document.getElementById("menu-icon");
const MenuList = document.getElementById("menu-list");

MenuIcon.addEventListener("click", () => {
    MenuList.classList.toggle("hidden");
});

document.getElementById('topup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const game = document.getElementById('game').value;
    const amount = document.getElementById('amount').value;

    const userConfirmed = confirm(`Pesanan Diproses : ${amount} Diamond ${game}. 
Silahkan Lakukan Pembayaran Dengan Mengklik Tombol OK Dibawah!.`);
    
    if (userConfirmed) {
        window.location.href = 'payment.html';
    }
});

/**
 * script menu dropdown
 */
const gameLink = document.getElementById("game-link");
const dropdownmenu = document.getElementById("dropdown-menu");

gameLink.addEventListener("click", () => {
    dropdownmenu.classList.toggle("hidden");
});

/* Script card*/
document.querySelectorAll('.card-wrapper').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300); // Match the animation duration
    });
});
