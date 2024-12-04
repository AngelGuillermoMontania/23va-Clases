window.onload = () => {
  
  function $(element) {
    return document.querySelector(element)
  }

  const $h1Title = $("#title")

  $h1Title.addEventListener("click", () => {
    // ponele color al h1
    $h1Title.style.color = "red"
  })
  
}