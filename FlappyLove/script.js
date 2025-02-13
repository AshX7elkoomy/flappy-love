const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ضبط أبعاد الكانفاس لتناسب جميع الأجهزة
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// تحميل الصور
const bird = new Image();
bird.src = "bird.png"; // تأكد من وجود الصورة في نفس المجلد

// متغيرات اللعبة
let birdX = 50, birdY = canvas.height / 2, gravity = 2, velocity = 0;

// التحديث في كل إطار
function update() {
    velocity += gravity * 0.1; // إضافة تأثير الجاذبية
    birdY += velocity;

    if (birdY + bird.height > canvas.height) {
        birdY = canvas.height - bird.height; // منع سقوط الطائر خارج الشاشة
        velocity = 0;
    }

    draw();
    requestAnimationFrame(update);
}

// رسم اللعبة
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird, birdX, birdY, 50, 50);
}

// بدء اللعبة عند النقر على الشاشة
window.addEventListener("click", () => {
    velocity = -5;
});

update();
