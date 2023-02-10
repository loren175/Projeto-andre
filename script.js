let history = []

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnChange = document.querySelector("#btnChange")
const btnBack = document.querySelector("#btnBack")

const inputNumber1 = document.querySelector("#price1")
const inputNumber2 = document.querySelector("#price2")
const inputNumber3 = document.querySelector("#price3")
const inputNumber4 = document.querySelector("#price4")
const inputNumber5 = document.querySelector("#price5")
const inputNumber6 = document.querySelector("#discount")

const calculate = document.querySelector("#calculate")
const results = document.querySelector(".results")
const clients = document.querySelector("#clients")
const send = document.querySelector("#send")

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleChangeClick() {
  toggleScreen()
}

function handleBackClick() {
  toggleScreen()
}

function calculator(event) {
  event.preventDefault()

  if (Number(inputNumber6.value) == 0) {
    results.querySelector("p").innerText = `O valor total da compra foi de: R$${
      Number(inputNumber1.value) +
      Number(inputNumber2.value) +
      Number(inputNumber3.value) +
      Number(inputNumber4.value) +
      Number(inputNumber5.value)
    }.`
  } else if (Number(inputNumber6.value) > 0) {
    results.querySelector(
      "#p2"
    ).innerText = `O valor da compra com desconto fica: R$${
      Number(inputNumber1.value) +
      Number(inputNumber2.value) +
      Number(inputNumber3.value) +
      Number(inputNumber4.value) +
      Number(inputNumber5.value) -
      Number(inputNumber6.value)
    }.`
  }
}

function addClient() {
  if (localStorage.myArr) {
    history = JSON.parse(localStorage.getItem("myArr"))
  }

  let newClient1 = document.getElementById("info1").value
  let newClient2 = document.getElementById("info2").value
  let newClient3 = document.getElementById("info3").value
  let newClient4 = document.getElementById("info4").value
  let newClient5 = document.getElementById("info5").value
  let newClient6 = document.getElementById("info6").value
  let newClient7 = document.getElementById("info7").value
  history.push(
    newClient1,
    newClient2,
    newClient3,
    newClient4,
    newClient5,
    newClient6,
    newClient7
  )
  localStorage.myArr = JSON.stringify(history)
}

function showClient() {
  let clientHistory = document.getElementById("p3")
  clientHistory.innerHTML = ""
  if (localStorage.myArr) {
    history = JSON.parse(localStorage.getItem("myArr"))
  }

  for (var i in history) {
    let p = document.createElement("p")
    p.innerHTML = "Dados: " + history[i]
    clientHistory.append(p)
  }
}

function clearClients() {
  history = []
  localStorage.myArr = JSON.stringify(history)
}

calculate.addEventListener("click", calculator)
btnChange.addEventListener("click", handleChangeClick)
btnBack.addEventListener("click", handleBackClick)
