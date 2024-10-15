const startBtn = document.getElementById('startbtn');
const sections = document.getElementsByTagName('section');
const main = sections[0];
const game = sections[1];
const end = sections[2];

startBtn.onclick = () => {
    game.style.display = 'block';
}
