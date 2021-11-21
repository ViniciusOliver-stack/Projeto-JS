const html = document.querySelector('html')
//Responsável por fazer a alteração, toda vez que fizermos uma mudança no checkbox ele vai aplciar alguma coisa 
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    /*Como fazer para pegar as cores no CSS? 
    Podemos fazer de um jeito mais simples sem precisar fazer repetições utilizando function*/
    //bg: window.getComputedStyle(html).getPropertyValue('--bg')

    bg: getStyle(html, "--bg"),
    bgText: getStyle(html, "--bg-text"),
    bgCard: getStyle(html, "--bg-card"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--colo-text"),
}

const lightMode = {
    bg: '#FCFCFC',
    bgText: '#333333',
    bgCard: '#EBEBEB',
    colorHeadings: '#3664FF',
    colorText: '#B5B5B5'
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) =>{
    /*Estratégia para fazer a alteração do meu HTML */
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key]))

}

checkbox.addEventListener("change", ({target})=>{
   target.checked ? changeColors(lightMode) : changeColors(initialColors)
})