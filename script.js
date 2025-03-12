// Fungsi untuk menghitung waktu sampai tanggal tertentu
function countdownTimer() {
    const eventDate = new Date("2025-12-02T00:00:00").getTime(); // Ganti dengan tanggal momen spesial kalian
    const now = new Date().getTime();
    const timeDifference = eventDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

    if (timeDifference < 0) {
        document.getElementById("timer").innerHTML = "Hari Spesial Sudah Tiba!";
    }
}

// Update countdown setiap detik
setInterval(countdownTimer, 1000);
