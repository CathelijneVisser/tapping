//make it work
var array = []
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    array.push(button)

    button.addEventListener("click", function () {
        button.classList.remove("active")
        array.push(button)
    })
})

function random_item(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function activate() {
    console.log("test")
    var random = random_item(array)
    random.classList.add("active") 
    for( var i = 0; i < array.length; i++){ 
                                   
        if ( array[i] === random) { 
            array.splice(i, 1); 
            i--; 
        }
    }
}
setInterval(activate, 200)


//change color
const input = document.querySelector("input")
const form = document.querySelector("form")

const colorUpdate = (cssVars) => {
    const root = document.querySelector(":root")
    const keys = Object.keys(cssVars)
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key])
    })
  }
  
input.addEventListener("input", (e) => {
    const cssPropName = `--color${e.target.getAttribute("data-id")}`
    colorUpdate({
    [cssPropName]: e.target.value
    })
})

//change speed