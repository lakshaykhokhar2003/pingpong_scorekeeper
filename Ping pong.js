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

let winscore = 1;
let isGameover = false;

function Scores(player, opponent) {
    if (!isGameover) {
        player.Display += 1
        if (player.Display === winscore) {
            isGameover = true;
            player.Score.classList.toggle('win');
            opponent.Score.classList.toggle('lose');
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.Score.innerText = player.Display;
        if (player.Display === opponent.Display && winscore >= player.Display + 1) {
            winscore = player.Display + 2;
        }
    }
}

function resets() {
    for (let p of [one, Two]) {
        p.Score.innerText = 0;
        p.Display = 0;
        p.Button.disabled = false;
        p.Score.classList.remove("win", "lose")
        winscore = parseInt(upto.value);
    }
    isGameover = false;
}

upto.addEventListener('change', function () {
    winscore = parseInt(this.value);
    resets();
})

one.Button.addEventListener('click', function () { Scores(one, Two) })

Two.Button.addEventListener('click', function () { Scores(Two, one) })

reset.addEventListener('click', resets)

