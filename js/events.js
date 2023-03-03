import { btnChange, btnBack, calculate, send, clear } from "./elements.js"
import { calculator } from "./priceCalculator.js"
import { toggleScreen } from "./screenChange.js"
import { addClient, showClient, clearClients } from "./clientRegister.js"

export default function () {
  calculate.addEventListener("click", calculator)
  btnChange.addEventListener("click", toggleScreen)
  btnChange.addEventListener("click", showClient)
  btnBack.addEventListener("click", toggleScreen)
  send.addEventListener("click", addClient)
  clear.addEventListener("click", clearClients)
}
