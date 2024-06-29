function calculateMatchesNeeded() {
    // Mengambil nilai dari input
    var totalMatches = parseInt(document.getElementById("totalMatches").value);
    var currentWinRate = parseInt(document.getElementById("currentWinRate").value);
    var targetWinRate = parseInt(document.getElementById("targetWinRate").value);

    // Menghitung total kemenangan yang dibutuhkan tanpa kekalahan
    var winsNeeded = Math.ceil((totalMatches * (targetWinRate / 100) - (totalMatches * (currentWinRate / 100))) / (1 - (targetWinRate / 100)));

    // Menampilkan hasil di dalam elemen dengan id "result"
    document.getElementById("result").innerHTML = "Kamu memerlukan <strong>" + winsNeeded + "</strong> kemenangan tanpa kekalahan untuk mencapai win rate sebesar " + targetWinRate + "%.";
}


const MenuIcon = document.getElementById("menu-icon");
const MenuList = document.getElementById("menu-list");

MenuIcon.addEventListener("click", () => {
    MenuList.classList.toggle("hidden");
});