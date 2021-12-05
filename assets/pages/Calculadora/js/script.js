function calcular(tipo, valor){
    if(tipo === 'funcao'){

        //Limpando os dados do input
        if(valor === 'ac'){
            document.querySelector('#resultado').value = ''
        }

        if(valor === '%'  || valor === '/' || valor === 'x' ||
        valor === '-' || valor === '+' || valor === '.'){

            document.querySelector('#resultado').value += valor
        }

        if(valor === '='){
            let campo = eval(document.querySelector('#resultado').value)

            document.querySelector('#resultado').value = campo
        }

    }else if(tipo === 'valor'){
        document.querySelector('#resultado').value += valor
    }
}