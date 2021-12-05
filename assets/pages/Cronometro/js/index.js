window.onload = function(){

    var time = document.querySelector('#time')
    var startBtn = document.querySelector('#btn-start')
    var stopBtn = document.querySelector('#btn-stop')
    var resetBtn = document.querySelector('#btn-reset')

    var interval

    var ms = 0
    var sec = 00
    var min = 00
    var hr = 00

    startBtn.onclick = function(){
        clearInterval(interval)
        interval = setInterval(watch, 10)
    }

    stopBtn.onclick = function(){
        clearInterval(interval)
    }

    resetBtn.onclick = function(){
        clearInterval(interval)
        ms = 0
        sec = 0
        min = 0
        hr = 0

        time.innerHTML = '00:00:00:00'
    }

    //Função vai pegar o numero verifica se ele é menor que 10 se ele for menor ele adicionar um 0
    function twoDigits (digit){
        if(digit < 10){
            return('0'+digit)
        }else{
            return(digit)
        }
    }

    function watch(){
       ms++
       
       if(ms == 60){
           sec++
           ms = 0
       }if(sec == 60){
           min++
           sec = 0
       }if(min == 60){
           hr++
           min = 0
       }
        
        time.innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}:${twoDigits(ms)}`
    }

}