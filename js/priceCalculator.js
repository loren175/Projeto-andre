function calculator(event) {
  event.preventDefault()

  const inputNumber1 = document.querySelector("#price1")
  const inputNumber2 = document.querySelector("#price2")
  const inputNumber3 = document.querySelector("#price3")
  const inputNumber4 = document.querySelector("#price4")
  const inputNumber5 = document.querySelector("#price5")
  const inputNumber6 = document.querySelector("#discount")
  const results = document.querySelector(".results")

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

export { calculator }