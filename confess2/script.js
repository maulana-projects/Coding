const music = document.getElementById("bg-music");
const startMusicBtn = document.getElementById("start-music");
const musicControl = document.getElementById("music-control");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Coba autoplay saat halaman load
window.addEventListener("load", () => {
  music.play().then(() => {
    console.log("🎶 Musik otomatis diputar");
  }).catch(err => {
    console.warn("Autoplay dicegah browser:", err);
    musicControl.style.display = "block"; // tampilkan tombol manual
  });
});

// Play / Pause toggle musik
function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      console.log("▶️ Musik diputar");
      startMusicBtn.textContent = "⏸ Pause Musik";
    }).catch(err => {
      console.error("Gagal play musik:", err);
    });
  } else {
    music.pause();
    console.log("⏸ Musik dijeda");
    startMusicBtn.textContent = "▶️ Putar Musik";
  }
}

// Event tombol musik (klik & sentuh untuk HP)
startMusicBtn.addEventListener("click", toggleMusic);
startMusicBtn.addEventListener("touchstart", toggleMusic);

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

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);
