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
    textWhite: getStyle(html, "--text-white"),
    colorText: getStyle(html, "--colo-text"),
}

const lightMode = {
    bg: '#FCFCFC',
    bgText: '#333333',
    bgCard: '#f2f2f2',
    textWhite: '#121212',
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

//LocalStorage

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(lightMode) 
    createOrEditLocalStorage('modo','lightMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(lightMode);
}