function toggleScreen() {
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

export { toggleScreen }
