let result = document.getElementById("result");
let moneta = ["boh", "testa", "croce"]

function lancia() {
    let x = Math.floor(Math.random() * 2 + 1)
    result.textContent = moneta[x]
}
