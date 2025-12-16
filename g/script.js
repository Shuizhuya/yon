// 图片路径
const images = [
    "img/img1.jpg", "img/img2.jpg", "img/img3.jpg", 
    "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", 
    "img/img7.jpg", "img/img8.jpg", "img/img9.jpg"
];

// 添加最终图片
const finalImage = "img/bao.jpg";

let imgIndex = 0;
// 可怜台词
const pityLines = [
    "呜呜…你真的不想我吗…",
    "宝宝看看我🥺🥺再想想嘛……",
    "宝宝肯定是想我的吧…",
    "再按一下我要哭了……",
    "别走…快说想我……",
    "我不相信！😭😭",
    "不要再口是心非了！",
    "我想你…你肯定也想我::>_<::",
    "不准不想我！！重新说＞﹏﹏＜"
];
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const message = document.getElementById("message");
const img = document.getElementById("display-img");
const btnGroup = document.querySelector(".btn-group");
// 按钮逃跑速度
let speed = 5;
let noBtnScale = 1;
// 点击不要按钮
noBtn.addEventListener("click", function() {
    // 随机可怜台词
    message.textContent = pityLines[Math.floor(Math.random() * pityLines.length)];
    // 切换图片
    imgIndex = (imgIndex + 1) % images.length;
    img.src = images[imgIndex];
    // 和好按钮变大
    const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";
    // 不要按钮逃跑
    moveNoBtn();
    
    // 不要按钮变小
    noBtnScale = Math.max(0.3, noBtnScale - 0.1);
    noBtn.style.transform = `scale(${noBtnScale})`;
    // 越来越快
    speed += 10;
    noBtn.style.transition = `left ${speed}ms, top ${speed}ms, transform 300ms`;
});
// 鼠标悬停时按钮逃跑
noBtn.addEventListener("mouseenter", function() {
    moveNoBtn();
});
// 移动按钮的函数
function moveNoBtn() {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
// 点击和好按钮
yesBtn.addEventListener("click", function() {
    title.innerText = "我也超级想你宝宝！！！^₌₌>ᴗᴗ<₌₌^";
    btnGroup.style.display = "none";
    img.src = finalImage;
    message.style.display = "none";
    
    // 创建庆祝效果
    createCelebration();
    
    setTimeout(() => {
        alert("我们世界第一好！！💖💖");
    }, 500);
});
// 创建庆祝效果
function createCelebration() {
    const container = document.querySelector(".container");
    
    // 添加爱心动画
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "💖";
            heart.style.position = "absolute";
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.top = Math.random() * 100 + "%";
            heart.style.zIndex = "1000";
            heart.style.animation = `floatUp ${Math.random() * 2 + 1}s ease-out forwards`;
            
            container.appendChild(heart);
            
            // 移除元素
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 100);
    }
    
    // 添加CSS动画
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}