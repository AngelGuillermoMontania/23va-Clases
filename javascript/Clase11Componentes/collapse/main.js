const $ = element => document.querySelector(element)

const $divBurger = $("#burger")
const $buttonCloseBurger = $("#closeBurger")
const $buttonOpenBurger = $("#openBurger")

$buttonOpenBurger.addEventListener("click", () => {
  $divBurger.style.display = "block"
  $buttonOpenBurger.style.display = "none"
})

$buttonCloseBurger.addEventListener("click", () => {
  $divBurger.style.display = "none"
  $buttonOpenBurger.style.display = "block"
})