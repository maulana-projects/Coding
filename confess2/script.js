const music = document.getElementById("bg-music");
const startBtn = document.getElementById("start-music");
const pauseBtn = document.getElementById("pause-music");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// ✅ Play musik
startBtn.addEventListener("click", () => {
  music.play()
    .then(() => {
      console.log("▶️ Musik diputar");
      startBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
    })
    .catch(err => console.error("❌ Gagal play musik:", err));
});

// ✅ Pause musik
pauseBtn.addEventListener("click", () => {
  music.pause();
  pauseBtn.style.display = "none";
  startBtn.style.display = "inline-block";
  console.log("⏸️ Musik dijeda");
});

// ✅ Slide control
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  });
});

// ✅ Animasi hati
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
