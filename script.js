

let scoreAlexa = 0
let scoreVocê = 0

const playHuman = (valorhuman) => {

  playtheGame(valorhuman, playMachine())

}

const playMachine = () => {

  const valores = ["rock", "paper", "scissors"]

  const random = Math.floor(Math.random() * 3)

  return (`${valores[random]}`)

}

function playtheGame(humano, maquina) {

  const valueHuman = document.querySelector("#minha-pont")
  const valueAlexa = document.querySelector("#pont-alexa")
  const p = document.querySelector(".result")
  
  console.log(`Você botou: ${humano} Maquina botou: ${maquina}`)

  if (humano === maquina) {

    p.innerHTML = "Empate"

  } else if (humano === "rock" && maquina === "scissors" || humano === "paper" && maquina === "rock" || humano === "scissors" && maquina === "paper") {

    scoreVocê++
    valueHuman.innerHTML = scoreVocê
    p.innerHTML = "Você ganhou!"

  } else {

    scoreAlexa++
    valueAlexa.innerHTML = scoreAlexa
    p.innerHTML = "Alexa ganhou!"

  }

}
