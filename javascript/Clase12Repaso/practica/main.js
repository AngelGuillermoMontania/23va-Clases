
// Evento que asegura toda la funcionalidad se agregue al terminar de cargar el html
window.onload = () => {

  // Funcion que selecciona un elemento
  const $ = element => document.querySelector(element)

  // ----------- INICIO DE SELECCIONES DE ELEMENTOS -----------------
  const $inputTextoTop = $("#textoTop")
  const $inputTextoBottom = $("#textoBottom")
  const $inputColorText = $("#colorText")
  const $inputColorBackground = $("#colorBackground")
  const $inputAlignText = $("#alignText")
  const $divCard = $("#card")
  const $h1TopCard = $("#topCard")
  const $h3BottomCard = $("#bottomCard")
  const $buttonDownload = $("#download")
  const $buttonReestablecer = $("#reestablecer")
  // ----------- FIN DE SELECCIONES DE ELEMENTOS -----------------

  function reestablecerValores() {
    $h1TopCard.innerText = "meme"
    $inputTextoTop.value = "meme"
    $h3BottomCard.innerText = "prueba"
    $inputTextoBottom.value = "prueba"
    $divCard.style.color = ""
  }

  function agregarEventosInputs() {
    $inputTextoTop.addEventListener("input", () => {
      $h1TopCard.innerText = $inputTextoTop.value
    })
    
    $inputTextoBottom.addEventListener("input", () => {
      $h3BottomCard.innerText = $inputTextoBottom.value
    })
    
    $inputColorText.addEventListener("input", () => {
      $divCard.style.color = $inputColorText.value
    })
    
    $inputColorBackground.addEventListener("input", () => {
      $divCard.style.backgroundColor = $inputColorBackground.value
    })
    
    $inputAlignText.addEventListener("input", () => {
      $divCard.style.textAlign = $inputAlignText.value
    })
    
  }

  function agregarEventosBotones() {
    $buttonDownload.addEventListener("click", () => {
      domtoimage.toBlob($divCard).then((blob) => {
        saveAs(blob, "pepeHonguito.png");
      });
    })
  
    $buttonReestablecer.addEventListener("click", reestablecerValores)
  }
  
  agregarEventosInputs()
  agregarEventosBotones()
  reestablecerValores()
}