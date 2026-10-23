const question = document.getElementById("question");
const answers = document.getElementById("answers");
const timerBox = document.getElementById("timer");
const result = document.getElementById("result");

const showAnswerBtn = document.getElementById("showAnswerBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const bonusBtn = document.getElementById("bonusBtn");
const endBtn = document.getElementById("endBtn");

const gameScreen = document.getElementById("gameScreen");
const thank = document.getElementById("thank");

const musicTimer = document.getElementById("musicTimer");
const musicAnswer = document.getElementById("musicAnswer");
const musicEnd = document.getElementById("musicEnd");

const bellRain = document.querySelector(".bell-rain");

let questions = [];
let bonusQuestions = [];

let questionIndex = 0;
let bonusIndex = 0;

let currentQuestion;
let isBonus = false;

let time = 15;
let timer;
let timerStarted = false;

// =====================================================
// TẠO CHUÔNG RƠI
// =====================================================

for (let i = 0; i < 35; i++) {
  const bell = document.createElement("div");

  bell.className = "falling-bell";
  bell.innerHTML = "🔔";

  bell.style.left = Math.random() * 100 + "%";
  bell.style.fontSize = Math.random() * 25 + 15 + "px";

  bell.style.animationDuration = Math.random() * 8 + 5 + "s";

  bell.style.animationDelay = Math.random() * 8 + "s";

  bellRain.appendChild(bell);
}

// =====================================================
// ĐỌC DỮ LIỆU TỪ question.js
// =====================================================

questions = questionData.mainQuestions || [];
bonusQuestions = questionData.bonusQuestions || [];

if (questions.length === 0) {
  endGame();
} else {
  loadQuestion();
}

// =====================================================
// TỰ ĐỘNG ĐIỀU CHỈNH CỠ CHỮ ĐÁP ÁN
// =====================================================

function fitAnswerText(element) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let maxSize;
  let minSize;

  // =================================================
  // MÀN HÌNH 2K / 4K
  // =================================================

  if (screenWidth >= 2560) {
    maxSize = 60;
    minSize = 30;
  }

  // =================================================
  // FULL HD 1920x1080 / TV / MÁY CHIẾU
  // =================================================
  else if (screenWidth >= 1600) {
    maxSize = 52;
    minSize = 27;
  }

  // =================================================
  // LAPTOP / DESKTOP
  // =================================================
  else if (screenWidth >= 1000) {
    maxSize = 42;
    minSize = 23;
  }

  // =================================================
  // TABLET
  // =================================================
  else if (screenWidth >= 600) {
    maxSize = 34;
    minSize = 20;
  }

  // =================================================
  // ĐIỆN THOẠI
  // =================================================
  else {
    maxSize = 29;
    minSize = 17;
  }

  // =================================================
  // MÀN HÌNH THẤP
  // Ví dụ: laptop 1366x768
  // =================================================

  if (screenHeight <= 800 && screenWidth > 600) {
    maxSize = Math.min(maxSize, 38);
  }

  // =================================================
  // BẮT ĐẦU BẰNG CỠ CHỮ LỚN NHẤT
  // =================================================

  let size = maxSize;

  element.style.fontSize = size + "px";

  // =================================================
  // NẾU CHỮ KHÔNG VỪA Ô
  // THÌ GIẢM TỪNG 1PX
  // =================================================

  while (
    (element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth) &&
    size > minSize
  ) {
    size--;

    element.style.fontSize = size + "px";
  }
}

// =====================================================
// TỰ ĐỘNG ĐIỀU CHỈNH CỠ CHỮ CÂU HỎI
// =====================================================

function fitQuestionText() {
  const screenWidth = window.innerWidth;

  let maxSize;
  let minSize;

  // Full HD / TV

  if (screenWidth >= 1600) {
    maxSize = 50;
    minSize = 34;
  }

  // Laptop
  else if (screenWidth >= 1000) {
    maxSize = 42;
    minSize = 30;
  }

  // Tablet
  else if (screenWidth >= 600) {
    maxSize = 34;
    minSize = 25;
  }

  // Điện thoại
  else {
    maxSize = 27;
    minSize = 20;
  }

  let size = maxSize;

  question.style.fontSize = size + "px";

  // Giảm chữ nếu câu hỏi quá dài

  while (question.scrollHeight > question.clientHeight && size > minSize) {
    size--;

    question.style.fontSize = size + "px";
  }
}

// =====================================================
// TẢI CÂU HỎI
// =====================================================

function loadQuestion() {
  clearInterval(timer);

  stopMusic();

  // Reset thời gian

  time = 15;

  timerStarted = false;

  timerBox.innerHTML = time;

  // =================================================
  // HIỆN LẠI CÁC THÀNH PHẦN
  // =================================================

  question.style.display = "flex";

  answers.style.display = "grid";

  document.querySelector(".clock").style.display = "flex";

  // Ẩn kết quả

  result.style.display = "none";

  result.innerHTML = "";

  result.className = "";

  // Ẩn nút đáp án

  showAnswerBtn.style.display = "none";

  // Hiện nút tiếp theo

  nextBtn.style.display = "inline-block";

  // Ẩn các nút khác

  bonusBtn.style.display = "none";

  endBtn.style.display = "none";

  // Hiện nút quay lại

  backBtn.style.display = "block";

  // Xóa đáp án câu trước

  answers.innerHTML = "";

  // =================================================
  // LẤY CÂU HỎI
  // =================================================

  if (isBonus) {
    currentQuestion = bonusQuestions[bonusIndex];

    question.innerHTML =
      "Câu hỏi phụ " + (bonusIndex + 1) + ": " + currentQuestion.question;
  } else {
    currentQuestion = questions[questionIndex];

    question.innerHTML =
      "Câu " + (questionIndex + 1) + ": " + currentQuestion.question;
  }

  // =================================================
  // TẠO 4 ĐÁP ÁN
  // =================================================

  currentQuestion.answers.forEach((item) => {
    const div = document.createElement("div");

    div.className = "answer";

    div.innerHTML = item;

    answers.appendChild(div);

    // =========================================
    // QUAN TRỌNG:
    // Mỗi đáp án tự tính cỡ chữ riêng
    // =========================================

    requestAnimationFrame(() => {
      fitAnswerText(div);
    });
  });

  // =================================================
  // TỰ ĐIỀU CHỈNH CHỮ CÂU HỎI
  // =================================================

  requestAnimationFrame(() => {
    fitQuestionText();
  });

  // =================================================
  // BẤM VÀO ĐỒNG HỒ ĐỂ BẮT ĐẦU
  // =================================================

  timerBox.onclick = function () {
    if (!timerStarted) {
      timerStarted = true;

      // Khi bắt đầu đếm
      // ẩn nút câu tiếp theo

      nextBtn.style.display = "none";

      startTimer();
    }
  };
}

// =====================================================
// BỘ ĐẾM 15 GIÂY
// =====================================================

function startTimer() {
  musicTimer.currentTime = 0;

  musicTimer.play().catch(() => {});

  timer = setInterval(
    () => {
      time--;

      timerBox.innerHTML = time;

      // Sau khi bắt đầu đếm
      // cho phép hiện đáp án

      showAnswerBtn.style.display = "inline-block";

      // Hết giờ

      if (time <= 0) {
        clearInterval(timer);

        stopTimer();
      }
    },

    1000,
  );
}

// =====================================================
// QUAY LẠI CÂU TRƯỚC
// =====================================================

backBtn.onclick = function () {
  clearInterval(timer);

  stopMusic();

  // =================================================
  // ĐANG Ở CÂU HỎI PHỤ
  // =================================================

  if (isBonus) {
    if (bonusIndex > 0) {
      bonusIndex--;

      loadQuestion();
    } else {
      // Câu phụ đầu tiên
      // quay về câu chính cuối cùng

      isBonus = false;

      questionIndex = questions.length - 1;

      loadQuestion();
    }
  }

  // =================================================
  // ĐANG Ở CÂU CHÍNH
  // =================================================
  else {
    if (questionIndex > 0) {
      questionIndex--;

      loadQuestion();
    } else {
      // Nếu đang ở câu 1
      // quay lại trang trước

      window.history.back();
    }
  }
};

// =====================================================
// HIỆN ĐÁP ÁN
// =====================================================

showAnswerBtn.onclick = function () {
  // Dừng âm thanh cũ

  musicAnswer.pause();

  musicTimer.pause();

  musicAnswer.currentTime = 0;

  musicTimer.currentTime = 0;

  // Phát âm thanh đáp án

  musicAnswer.play().catch(() => {});

  // =================================================
  // ẨN CÂU HỎI
  // =================================================

  question.style.display = "none";

  // =================================================
  // ẨN 4 PHƯƠNG ÁN
  // =================================================

  answers.style.display = "none";

  // =================================================
  // ẨN ĐỒNG HỒ
  // =================================================

  document.querySelector(".clock").style.display = "none";

  // =================================================
  // HIỆN ĐÁP ÁN ĐÚNG
  // =================================================

  result.style.display = "flex";

  result.innerHTML = currentQuestion.answers[currentQuestion.correct];

  result.className = "answer-show";

  // Ẩn nút đáp án

  showAnswerBtn.style.display = "none";

  // =================================================
  // CÂU CHÍNH CUỐI CÙNG
  // =================================================

  if (!isBonus && questionIndex === questions.length - 1) {
    // Có câu phụ

    if (bonusQuestions.length > 0) {
      bonusBtn.style.display = "inline-block";
    }

    endBtn.style.display = "inline-block";
  }

  // =================================================
  // ĐANG Ở CÂU PHỤ
  // =================================================
  else if (isBonus) {
    endBtn.style.display = "inline-block";

    // Nếu vẫn còn câu phụ

    if (bonusIndex < bonusQuestions.length - 1) {
      bonusBtn.style.display = "inline-block";
    }
  }

  // =================================================
  // CÂU CHÍNH BÌNH THƯỜNG
  // =================================================
  else {
    nextBtn.style.display = "inline-block";
  }
};

// =====================================================
// CÂU TIẾP THEO
// =====================================================

nextBtn.onclick = function () {
  clearInterval(timer);

  stopTimer();

  // =================================================
  // CÂU PHỤ
  // =================================================

  if (isBonus) {
    bonusIndex++;

    if (bonusIndex < bonusQuestions.length) {
      loadQuestion();
    }
  }

  // =================================================
  // CÂU CHÍNH
  // =================================================
  else {
    questionIndex++;

    if (questionIndex < questions.length) {
      loadQuestion();
    }
  }
};

// =====================================================
// CÂU HỎI PHỤ
// =====================================================

bonusBtn.onclick = function () {
  if (bonusQuestions.length === 0) {
    return;
  }

  // Bắt đầu câu phụ

  if (!isBonus) {
    isBonus = true;

    bonusIndex = 0;
  } else {
    bonusIndex++;
  }

  // Nếu vẫn còn câu phụ

  if (bonusIndex < bonusQuestions.length) {
    loadQuestion();
  }
};

// =====================================================
// NÚT KẾT THÚC
// =====================================================

endBtn.onclick = function () {
  endGame();
};

// =====================================================
// DỪNG NHẠC ĐẾM GIỜ
// =====================================================

function stopTimer() {
  musicTimer.pause();

  musicTimer.currentTime = 0;
}

// =====================================================
// DỪNG TẤT CẢ NHẠC
// =====================================================

function stopMusic() {
  musicTimer.pause();

  musicTimer.currentTime = 0;

  musicAnswer.pause();

  musicAnswer.currentTime = 0;
}

// =====================================================
// KẾT THÚC TRÒ CHƠI
// =====================================================

function endGame() {
  clearInterval(timer);

  stopMusic();

  gameScreen.style.display = "none";

  musicEnd.currentTime = 0;

  musicEnd.play().catch(() => {});

  thank.style.display = "block";
}

// =====================================================
// KHI THAY ĐỔI KÍCH THƯỚC MÀN HÌNH
// =====================================================

let resizeTimer;

window.addEventListener(
  "resize",

  function () {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(
      () => {
        // =====================================
        // TÍNH LẠI CỠ CHỮ CÂU HỎI
        // =====================================

        if (question.style.display !== "none") {
          fitQuestionText();
        }

        // =====================================
        // TÍNH LẠI RIÊNG TỪNG ĐÁP ÁN
        // =====================================

        document.querySelectorAll(".answer").forEach((answer) => {
          fitAnswerText(answer);
        });
      },

      100,
    );
  },
);

// =====================================================
// KHI XOAY ĐIỆN THOẠI / TABLET
// =====================================================

window.addEventListener(
  "orientationchange",

  function () {
    setTimeout(
      () => {
        // Câu hỏi

        if (question.style.display !== "none") {
          fitQuestionText();
        }

        // Các đáp án

        document.querySelectorAll(".answer").forEach((answer) => {
          fitAnswerText(answer);
        });
      },

      300,
    );
  },
);

// =====================================================
// ĐIỀU KHIỂN TRÒ CHƠI BẰNG BÀN PHÍM
// =====================================================

document.addEventListener("keydown", function (event) {
  // Không xử lý liên tục khi giữ phím
  if (event.repeat) return;

  // ===================================================
  // SPACE
  //
  // Lần 1: Bắt đầu đồng hồ
  // Lần 2: Hiện đáp án
  // Lần 3: Sang câu tiếp theo
  // ===================================================

  if (event.code === "Space") {
    event.preventDefault();

    // Nếu đã kết thúc trò chơi
    if (gameScreen.style.display === "none") {
      return;
    }

    // =================================================
    // SPACE LẦN 3
    // ĐÁP ÁN ĐANG HIỆN -> SANG CÂU TIẾP
    // =================================================

    if (result.style.display === "flex") {
      // Nếu đang ở câu chính
      if (!isBonus) {
        // Nếu chưa phải câu cuối
        if (questionIndex < questions.length - 1) {
          nextBtn.click();
        }

        // Nếu là câu cuối và có câu hỏi phụ
        else if (bonusQuestions.length > 0) {
          bonusBtn.click();
        }

        // Nếu là câu cuối và không có câu hỏi phụ
        else {
          endBtn.click();
        }
      }

      // Nếu đang ở câu hỏi phụ
      else {
        // Nếu còn câu hỏi phụ
        if (bonusIndex < bonusQuestions.length - 1) {
          bonusBtn.click();
        }

        // Hết câu hỏi phụ
        else {
          endBtn.click();
        }
      }

      return;
    }

    // =================================================
    // SPACE LẦN 1
    // CHƯA CHẠY ĐỒNG HỒ -> BẮT ĐẦU
    // =================================================

    if (!timerStarted) {
      timerStarted = true;

      // Ẩn nút Next
      nextBtn.style.display = "none";

      // Bắt đầu đồng hồ
      startTimer();

      return;
    }

    // =================================================
    // SPACE LẦN 2
    // ĐỒNG HỒ ĐANG/ĐÃ CHẠY -> HIỆN ĐÁP ÁN
    // =================================================

    if (timerStarted) {
      // Dừng đồng hồ
      clearInterval(timer);

      // Dừng âm thanh đếm giờ
      stopTimer();

      // Hiện đáp án
      showAnswerBtn.click();

      return;
    }
  }

  // ===================================================
  // MŨI TÊN PHẢI →
  // SANG CÂU TIẾP THEO
  // ===================================================

  if (event.code === "ArrowRight") {
    event.preventDefault();

    if (gameScreen.style.display === "none") {
      return;
    }

    // Câu chính
    if (!isBonus) {
      if (questionIndex < questions.length - 1) {
        nextBtn.click();
      }
    }

    // Câu phụ
    else {
      if (bonusIndex < bonusQuestions.length - 1) {
        nextBtn.click();
      }
    }

    return;
  }

  // ===================================================
  // MŨI TÊN TRÁI ←
  // QUAY LẠI CÂU TRƯỚC
  // ===================================================

  if (event.code === "ArrowLeft") {
    event.preventDefault();

    if (gameScreen.style.display === "none") {
      return;
    }

    backBtn.click();

    return;
  }
});
