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

const inputInfo1 = document.querySelector("#info1")
const inputInfo2 = document.querySelector("#info2")
const inputInfo3 = document.querySelector("#info3")
const inputInfo4 = document.querySelector("#info4")
const inputInfo5 = document.querySelector("#info5")
const inputInfo6 = document.querySelector("#info6")
const inputInfo7 = document.querySelector("#info7")

const infos = [
  {
    name: inputInfo1.value,
    number: inputInfo2.value,
    product: inputInfo3.value,
    email: inputInfo4.value,
    instagram: inputInfo5.value,
    adress: inputInfo6.value,
    zipcode: inputInfo7.value,
  },
]

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

function signUp(event) {
  event.preventDefault()

  screen2.querySelector("#p3").innerText = `Nome: ${infos.name} 
  \n Número: ${infos.number} 
  \n Produto: ${infos.product} 
  \n Email: ${infos.email} 
  \n Instagram: ${infos.instagram} 
  \n Endereço: ${infos.adress} 
  \n CEP: ${infos.zipcode}`

  /* necessário criar memória da página e if para não aparecer dados incompletos*/
}

calculate.addEventListener("click", calculator)
btnChange.addEventListener("click", handleChangeClick)
btnBack.addEventListener("click", handleBackClick)
send.addEventListener("click", signUp)
