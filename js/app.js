const input = document.querySelector(".element__input")
const validate = document.querySelector(".element__validate")

input.addEventListener("invalid", (event) => {
    event.preventDefault()
    if (validateEmail(input.value) !== true) {
        validate.classList.add("active")
        input.style.borderColor = "hsl(354, 100%, 66%)"
    }
})

input.addEventListener("keydown", (event) => {
    validate.classList.remove("active")
    input.style.borderColor = "hsl(223, 100%, 95%)"
})

function validateEmail(email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}