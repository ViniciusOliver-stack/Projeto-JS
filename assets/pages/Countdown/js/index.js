import Countdown from "./countdown.js";

const tempoEvent = new Countdown("01 January 2022 00:00:00 GMT-0300")


const tempos = document.querySelectorAll('[data-time]')

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoEvent.total[index]
    })
}

mostrarTempo()
setInterval(mostrarTempo, 1000)


