const btn = document.getElementById("btn")

function incrementBtnLabel() {
  let btnLabel = btn.innerHTML
  btnLabel++
  btn.innerHTML = btnLabel
}

btn.addEventListener("click", incrementBtnLabel)
