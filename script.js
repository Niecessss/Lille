function createHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }, i * 150);
  }
}

createHearts();
setInterval(createHearts, 5000);

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const title = document.querySelector("h2");

let yesScale = 1;

function growYes() {
  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.transition = "transform 0.2s ease";
}

function moveNoButton() {
  const maxX = card.offsetWidth - noBtn.offsetWidth - 20;
  const maxY = card.offsetHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // 👉 À CHAQUE FUITE DU NO
  growYes();
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Bien essayé 😏");
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  alert("Youpiii ! Je savais que tu m'adore 🥰");
  title.innerHTML = "Après tous chui vraiment incroyable quoi 🥰🥰🥰";

  yesBtn.style.transform = "scale(1.4)";
});