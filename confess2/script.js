const music = document.getElementById("bg-music");
const startMusicBtn = document.getElementById("start-music");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// ✅ Coba autoplay saat halaman load (khusus laptop/desktop)
window.addEventListener("load", () => {
  music.play()
    .then(() => {
      console.log("🎶 Musik autoplay jalan");
      startMusicBtn.textContent = "⏸ Pause Musik"; // kalau autoplay berhasil
      startMusicBtn.style.display = "block"; // tombol tetap ada buat pause
    })
    .catch(() => {
      console.log("⛔ Autoplay dicegah, tampilkan tombol manual");
      startMusicBtn.textContent = "▶️ Putar Musik";
      startMusicBtn.style.display = "block"; 
    });
});

// ✅ Toggle Play/Pause
startMusicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play()
      .then(() => {
        console.log("▶️ Musik diputar manual!");
        startMusicBtn.textContent = "⏸ Pause Musik";
      })
      .catch(err => {
        console.error("❌ Gagal play musik:", err);
      });
  } else {
    music.pause();
    console.log("⏸ Musik dijeda");
    startMusicBtn.textContent = "▶️ Putar Musik";
  }
});

// Next button untuk pindah slide
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });
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
