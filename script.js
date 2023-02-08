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

function signUp(event) {
  event.preventDefault()
  const name = document.querySelector("#info1")
  const number = document.querySelector("#info2")
  const product = document.querySelector("#info3")
  const email = document.querySelector("#info4")
  const instagram = document.querySelector("#info5")
  const adress = document.querySelector("#info6")
  const zipcode = document.querySelector("#info7")
  
  const value1 = name.value
  const value2 = number.value
  const value3 = product.value
  const value4 = email.value
  const value5 = instagram.value
  const value6 = adress.value
  const value7 = zipcode.value
  
  screen2.querySelector("#p3").innerText = 
      `Nome: ${value1} 
      \n Número: ${value2} 
      \n Produto: ${value3} 
      \n Email: ${value4} 
      \n Instagram: ${value5} 
      \n Endereço: ${value6} 
      \n CEP: ${value7}`
    
  }



calculate.addEventListener("click", calculator)
btnChange.addEventListener("click", handleChangeClick)
btnBack.addEventListener("click", handleBackClick)
send.addEventListener("click", signUp)
