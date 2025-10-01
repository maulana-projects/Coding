document.getElementById("play-btn").addEventListener("click", function () {
    const music = document.getElementById("bg-music");
    music.play()
        .then(() => {
            console.log("Musik diputar!");
        })
        .catch((err) => {
            console.log("Gagal play musik:", err);
        });
});
