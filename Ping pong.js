const one = {
    Button: document.querySelector(".oneBtn"),
    Score: document.querySelector(".PlayerOne"),
    Display: 0
}

const Two = {
    Button: document.querySelector(".twoBtn"),
    Score: document.querySelector(".PlayerTwo"),
    Display: 0

}
const reset = document.querySelector(".reset")
const upto = document.querySelector("#point")

let winScore = 1;
let isGameOver = false;

function Scores(player, opponent) {
    if (!isGameOver) {
        player.Display += 1
        if (player.Display === winScore) {
            isGameOver = true;
            player.Score.classList.toggle('win');
            opponent.Score.classList.toggle('lose');
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.Score.innerText = player.Display;
        if (player.Display === opponent.Display && winScore >= player.Display + 1) {
            winScore = player.Display + 2;
        }
    }
}

function resets() {
    for (let p of [one, Two]) {
        p.Score.innerText = 0;
        p.Display = 0;
        p.Button.disabled = false;
        p.Score.classList.remove("win", "lose")
        winScore = parseInt(upto.value);
    }
    isGameOver = false;
}

upto.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resets();
})

one.Button.addEventListener('click', function () { Scores(one, Two) })

Two.Button.addEventListener('click', function () { Scores(Two, one) })

reset.addEventListener('click', resets)

