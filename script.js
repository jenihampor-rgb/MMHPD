// Ambil elemen lingkaran sebagai parent untuk batang
const circleContainer = document.getElementById("circleContainer");

// Jumlah batang yang akan dibuat
const numBars = 6;

// Hitung berapa batang yang sudah aktif
let activeBars = 4;

// Membuat batang-batang dan menambahkan ke circleContainer
for(let i = 0; i < numBars; i++){
    const bar = document.createElement("div"); // Buat elemen div baru
    bar.className = "bar";                     // Tambahkan class "bar"
    
    // Posisi batang secara melingkar
    bar.style.transform = `rotate(${(360 / numBars) * i}deg) translateY(-170px)`;
    
    // Masukkan batang ke dalam circleContainer
    circleContainer.appendChild(bar);
}

// Fungsi untuk animasi batang aktif
function animateBars(){
    // Ambil semua elemen batang
    const bars = document.querySelectorAll(".bar");
    
    // Interval untuk mengubah batang menjadi aktif
    setInterval(()=>{
        // Tambahkan class 'active' pada batang yang sesuai index
        bars[activeBars % numBars].classList.add("active");

        // Hapus class 'active' dari batang 8 langkah sebelumnya agar efek bergerak
        if(activeBars > 8){
            bars[(activeBars - 8) % numBars].classList.remove("active");
        }

        // Tambah hitungan batang aktif
        activeBars++;
    
    },100); // Setiap 100ms (0.1 detik) jalankan interval
}

// Panggil fungsi animasi untuk mulai looping
animateBars();
