function calcular(){
    let idade = document.querySelector('#idade').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value

    let resul = document.querySelector('.resultado')

    //Verificação de dados
    let infoidade = document.querySelector('.info-idade')
    let infoaltura = document.querySelector('.info-altura')
    let infopeso = document.querySelector('.info-peso')
    
    if(idade === ''){
        infoidade.style.color = "#FF0F0F";
        infoidade.innerHTML += 'Verifique os dados novamente'
    }
    if(altura === ''){
        infoaltura.style.color = "#FF0F0F";
        infoaltura.innerHTML += 'Verifique os dados novamente'
    }
    if(peso === ''){
        infopeso.style.color = "#FF0F0F";
        infopeso.innerHTML += 'Verifique os dados novamente'
    }else{

        //Limpando da tela
        infoidade.style.display = "none";
        infoaltura.style.display = "none";
        infopeso.style.display = "none";

        altura = altura / 100
    
        let imc = peso / (altura * altura)
    

        if(imc < 16){
            classificacao = 'Baixo peso muito grave'
        }
        if(imc >= 16 && imc <= 16.99){
            classificacao = 'Baixo peso grave'
            classificacao.style.color += '#FF0F0F'
        }
        if(imc >= 17 && imc <= 18.49){
            classificacao = 'Baixo Peso'
        }
        if(imc >= 18.50 && imc <= 24.99){
            classificacao = 'Peso Normal'
        }
        if(imc >= 25 && imc <= 29.99){
            classificacao = 'Sobre Peso'
        }
        if(imc >= 30 && imc <= 34.99){
            classificacao = 'Obesidade Grau I'
        }
        if(imc >= 35 && imc <= 39.99){
            classificacao = 'Obesidade Grau II'
        }
        if(imc > 40){
            classificacao = 'Obesidade Grau III'
        }

        resul.innerHTML = `De acordo com a OMS, sue IMC é considerado ${classificacao} para a sua altura.`      
    }
}