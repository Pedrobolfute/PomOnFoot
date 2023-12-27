let toy = []
toy[0] = `
*_* <br>
/|\\ <br>
/ \\ <br>
... <br>
`

toy[1] = `
*_* <br>
/|\\ <br>
| | <br>
.., <br>
`

toy[2] = `
*_^ <br>
/|\\ <br>
/ \\ <br>
.,. <br>
`
toy[3] = `
*_* <br>
/|\\ <br>
| | <br>
,.. <br>
`

toy[4] = `
*_* <br>
/|\\  <br>
/ \\ <br>
.., <br>
`

toy[5] = `
*_* <br>
/|\\  <br>
| | <br>
,.. <br>
`

let toyPosition = 0
function animationBoy() {
  const icon = document.querySelector('.columnLeft h6')
  icon.innerHTML = toy[toyPosition]
  toyPosition += 1
  if (toyPosition > toy.length - 1) { toyPosition = 0 }
}


let k = true
function animationTimer() {
  let time = document.querySelector('.dial-plate .time')
  if (k) {
    time.style.transform = 'scale(1.0)'
    k = false
  } else {
    time.style.transform = 'scale(1.1)'
    k = true
  }
}