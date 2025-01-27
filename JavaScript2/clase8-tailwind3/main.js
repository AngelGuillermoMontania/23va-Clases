document.querySelector("#darkMode").addEventListener("click", () => {
  document.documentElement.classList.contains("dark") ? (localStorage.theme = "light") : (localStorage.theme = "dark");
  document.documentElement.classList.toggle("dark");
});

window.onload = () => {
  if (localStorage.theme == "light") {
    document.documentElement.classList.remove("dark");
  } else if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
