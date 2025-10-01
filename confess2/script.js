const music = document.getElementById("bg-music");
const startMusicBtn = document.getElementById("start-music");
const musicControl = document.getElementById("music-control");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// ❌ Hapus autoplay rumit supaya HP friendly
window.addEventListener("load", () => {
    // Cek autoplay, tapi jangan sembunyikan tombol dulu
    music.play().then(() => {
        console.log("Musik autoplay jalan");
        musicControl.style.display = "none";
    }).catch(err => {
        console.warn("Autoplay diblok browser:", err);
        musicControl.style.display = "block";
    });
});

// ✅ Tombol musik: hanya satu listener, delay sebelum sembunyikan
startMusicBtn.addEventListener("click", () => {
    music.play()
        .then(() => {
            console.log("▶️ Musik diputar!");
            // Sembunyikan tombol setelah 200ms supaya browser HP gak blok
            setTimeout(() => {
                startMusicBtn.style.display = "none";
            }, 200);
        })
        .catch(err => console.error("Gagal play musik:", err));
});

// Next button untuk pindah slide
document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    });
});

// Stop musik saat tab ditutup
window.addEventListener("beforeunload", () => {
    music.pause();
    music.currentTime = 0;
});

// Animasi hati
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
