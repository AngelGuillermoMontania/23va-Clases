const $ = element => document.querySelector(element)

const $buttonCreate = $("#create")
const $divContainModel = $(".contain-modal")
const $buttonClose = $("#close")
const $buttonConfirm = $("#confirm")

$buttonCreate.addEventListener("click", () => {
  $divContainModel.style.display = "flex"
})

$buttonClose.addEventListener("click", () => {
  $divContainModel.style.display = "none"
})

$buttonConfirm.addEventListener("click", () => {
  // CONFIRMA EL MODAL
})