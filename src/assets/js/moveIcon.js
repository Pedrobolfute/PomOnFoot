function animationBoy(){

  let toy = []
  toy[0] = `
  (*_*)<br>
.||\\.<br>
..|..<br>
./ |.<br>`

toy[1] = `
(*_*)<br>
./\|\\.<br>
..|..<br>
./ /.<br>`

toy[2] = `
(*_*)<br>
.|||.<br>
..|..<br>
./ \\.<br>`

toy[3] = `
(*_*)<br>
./||.<br>
..|..<br>
.| |.<br>`

  const icon = document.querySelector('.columnLeft h6')
  let toyPosition = 0
  setInterval(()=>{
    icon.innerHTML = toy[toyPosition]
    toyPosition += 1
    if(toyPosition > 3){ toyPosition = 0}
  }, 250)
}