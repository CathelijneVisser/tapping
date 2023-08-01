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
    if (array.length > 0) {       
        var random = random_item(array)
        random.classList.add("active") 
        for( var i = 0; i < array.length; i++){ 
                                    
            if ( array[i] === random) { 
                array.splice(i, 1); 
                i--; 
            }
        }
    }
}
//change speed
const slider = document.querySelector(".speed")
var value = slider.value + "00"

slider.addEventListener("change", () => {
    value = slider.value + "00"
    // console.log(value)
})

console.log(value)
setInterval(activate, value)

//change color
const input = document.querySelector(".color")

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
