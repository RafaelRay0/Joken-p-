/* 
humanScoreNumber -> Camel Case
TUDO_JUNTO       -> Snake Case
*/


let scoreAlexa = 0
let scoreVocê = 0


const TUDO_JUNTO = {/* ENUM -> Facilita muito */

  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors"
  
}//Fim DO ENUM

const playHuman = (valorhuman) => {

  playtheGame(valorhuman, playMachine())

}

const playMachine = () => {

  const valores = [TUDO_JUNTO.ROCK, TUDO_JUNTO.PAPER, TUDO_JUNTO.SCISSORS]

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

  } else if (humano === TUDO_JUNTO.ROCK && maquina === TUDO_JUNTO.SCISSORS || humano === TUDO_JUNTO.PAPER && maquina === TUDO_JUNTO.ROCK || humano === TUDO_JUNTO.SCISSORS && maquina === TUDO_JUNTO.PAPER) {

    scoreVocê++
    valueHuman.innerHTML = scoreVocê
    p.innerHTML = "Você ganhou!"

  } else {

    scoreAlexa++
    valueAlexa.innerHTML = scoreAlexa
    p.innerHTML = "Alexa ganhou!"

  }

}
