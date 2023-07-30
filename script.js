var array = []
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    array.push(button)

    button.addEventListener("click", function () {
        button.classList.remove("active")
    })


})

function random_item(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function activate() {
    random_item(array).classList.add("active")
}
setInterval(activate, 200)
