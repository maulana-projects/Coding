const music = document.getElementById("bg-music");
const startMusicBtn = document.getElementById("start-music");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Tombol musik (klik user = langsung play)
startMusicBtn.addEventListener("click", () => {
  music.play()
    .then(() => {
      console.log("▶️ Musik diputar!");
      startMusicBtn.style.display = "none"; // hilangin tombol setelah diputar
    })
    .catch(err => {
      console.error("❌ Gagal play musik:", err);
    });
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
