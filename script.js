const bellRain = document.querySelector(".bell-rain");
const soundBtn = document.getElementById("soundBtn");

const introMusic = document.getElementById("introMusic");
const gameMusic = document.getElementById("gameMusic");

const startBtn = document.querySelector(".start-btn");

let playing = false;
let musicTimer;

for (let i = 0; i < 35; i++) {
  let bell = document.createElement("div");

  bell.className = "falling-bell";
  bell.innerHTML = "🔔";

  bell.style.fontSize = Math.random() * 25 + 15 + "px";
  bell.style.left = Math.random() * 100 + "%";
  bell.style.animationDuration = Math.random() * 8 + 5 + "s";
  bell.style.animationDelay = Math.random() * 8 + "s";
  bell.style.opacity = Math.random() * 0.6 + 0.3;

  bellRain.appendChild(bell);
}

window.addEventListener("pageshow", function () {
  document.body.style.opacity = "1";
  document.body.style.transition = "1s";

  playing = false;

  if (soundBtn) {
    soundBtn.innerHTML = "🔇";
  }

  clearTimeout(musicTimer);
});

soundBtn.onclick = function () {
  if (playing) {
    clearTimeout(musicTimer);

    introMusic.pause();
    gameMusic.pause();

    introMusic.currentTime = 0;
    gameMusic.currentTime = 0;

    soundBtn.innerHTML = "🔇";

    playing = false;
  } else {
    introMusic.currentTime = 0;
    introMusic.play();

    soundBtn.innerHTML = "🔊";

    playing = true;
  }
};

introMusic.onended = function () {
  if (playing) {
    musicTimer = setTimeout(() => {
      if (playing) {
        gameMusic.currentTime = 0;
        gameMusic.play();
      }
    }, 5000);
  }
};

gameMusic.onended = function () {
  if (playing) {
    musicTimer = setTimeout(() => {
      if (playing) {
        gameMusic.currentTime = 0;
        gameMusic.play();
      }
    }, 5000);
  }
};

startBtn.onclick = function () {
  clearTimeout(musicTimer);

  introMusic.pause();
  gameMusic.pause();

  introMusic.currentTime = 0;
  gameMusic.currentTime = 0;

  document.body.style.transition = "1s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "game/game.html";
  }, 1000);
};

// =====================================================
// ĐIỀU KHIỂN TRANG MỞ ĐẦU BẰNG BÀN PHÍM
// =====================================================

document.addEventListener("keydown", function (event) {
  // Không kích hoạt liên tục khi giữ phím
  if (event.repeat) return;

  // ===================================================
  // SPACE = BẮT ĐẦU TRÒ CHƠI
  // ===================================================

  if (event.code === "Space") {
    event.preventDefault();

    startBtn.click();

    return;
  }

  // ===================================================
  // MŨI TÊN LÊN ↑ = BẬT / TẮT ÂM THANH
  // ===================================================

  if (event.code === "ArrowUp") {
    event.preventDefault();

    soundBtn.click();

    return;
  }
});
