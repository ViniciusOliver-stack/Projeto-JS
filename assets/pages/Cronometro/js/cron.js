//onload -> ele é só para garantir que o nosso script seja disparado quando todo o conteúdo da página for carregado
window.onload = function(){

    var minutes = 00
    //Var que vai armazenar nossos segundos
    var seconds = 00
    //Var para nossas dezenas
    var tens = 00

    var appendSeconds = document.querySelector('#seconds')
    var appendTens = document.querySelector('#tens')
    var appendMinutes = document.querySelector('#minutes')
    var buttonStart = document.querySelector('#btn-start')
    var buttonStop = document.querySelector('#btn-stop')
    var buttonReset = document.querySelector('#btn-reset') 

    var interval;

    /*Vamos começar a criar as funções:
    •  Vamos pegar nossa var e vamos chamar o onclick, logo será liberado uma função para nos*/
    buttonStart.onclick = function(){
        //clearInterval() -> O que ele faz? Ele serve para parar o tempo, usado juntamente com o setInterval() que é executado em "ms"
        //Como não quremos que essa função (setInterval()) seja repetida toda vez que a gente apertar o botão Start, acaba que várias funçoes fiquem rodando ao mesmo tempo para que isso não ocorra vamos utilizar o clearInterval()
        clearInterval(interval)
        /*Dentro so setInterval vamos declarar dois parâmetros 1- a função que queremos 2- o tempo em ms */
        interval = setInterval(startTime, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(interval)
    }

    buttonReset.onclick = function(){
        clearInterval(interval)
        tens = "00"
        seconds = "00"

        appendSeconds.innerHTML = seconds
        appendTens.innerHTML = tens
    }

    function startTime(){
        tens++

        if(tens <= 9){
            appendTens.innerHTML = '0' + tens
        }
        if(tens > 9){
            appendTens.innerHTML = tens
        }
        if(tens > 99){
            console.log('seconds')
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0
            appendTens.innerHTML = '0' + 0
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        }
        if(seconds > 60){
            minutes++
            appendMinutes.innerHTML = '0'+ minutes
            seconds = 0
            appendSeconds.innerHTML = '0'  + 0
    
        }
        if(minutes > 9){
            appendMinutes.innerHTML = minutes
        }
    }

}