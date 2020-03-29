const $playButton = document.getElementById("play")
const emojis = {
    piedra: "🗿 Piedra",
    papel: "📃 Papel",
    tijeras: "✂️ Tijeras",
    lagartija: "🦎 Lagartija",
    spock: "🖖 Spock"
}

const computerOptions = ["piedra", "papel", "tijeras", "lagartija", "spock"]

$playButton.addEventListener("click", () => {
    const $player1name = document.getElementById("first-player").value
    const $player2name = document.getElementById("second-player").value
    const $player1select = document.getElementById("first-player-move").value
    const $player2select = document.getElementById("second-player-move").value
    const $compSelect = document.getElementById("second-player-move")
    const $result = document.getElementById("result")

    $compSelect.value = "computer"

    if (!$player1name) {
        alert("Oye! No estás jugando?!")
        return
    }

    const compRand = Math.floor(Math.random() * computerOptions.length)

    const computerPick = computerOptions[compRand]


    // const result = solveProblem($player1name,$player2name,$player1select,$player2select);

    const result = jsGame($player1name, "computer", $player1select, computerPick);
    let resultText

    result.ganador !== "none" ? resultText = `El ganador es ${result.ganador} 🥇🍾 seleccionando [${emojis[result.ganadorEscoge]}] sobre [${emojis[result.perdedorEscoge]}]` : resultText = "Es un empate! 🤷‍♂️🤷‍♀️"


    $result.innerText = "🥁🥁🥁🥁🥁🥁"
    setTimeout(() => {
        $result.innerText = resultText
        $compSelect.value = computerPick
    }, 600)

})