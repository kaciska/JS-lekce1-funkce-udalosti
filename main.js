// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b
  let result = document.getElementById('vysledek')
  result.innerText = c
}

/**
 * Upozorní uživatele při spuštění.
 */
window.onload = () => {
  let text = 'Gratulace, právě jsi spustila tuto funkci!'

  console.log(text)
  alert(text)
  document.querySelector('.ctverecek').innerText = text
}

function changeRectangleColor() {
  let rectangle = document.querySelector('.ctverecek')
  rectangle.style.backgroundColor = 'green'
}
