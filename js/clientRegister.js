let history = []

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
  clientHistory.textContent = ""
  if (localStorage.myArr) {
    history = JSON.parse(localStorage.getItem("myArr"))
  }

  for (var i in history) {
    let p = document.createElement("p")
    p.textContent = history[i]
    clientHistory.append(p)
  }
}

function clearClients() {
  if (
    confirm("Tem certeza de que deseja apagar todos os itens da lista?") ==
    false
  ) {
    return
  } else {
    history = []
    localStorage.myArr = JSON.stringify(history)
  }
}

export { addClient, showClient, clearClients }
