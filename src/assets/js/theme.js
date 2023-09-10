const body = document.body
const theme = document.querySelector('#theme')
const thElements = document.getElementsByTagName('th')
const tdElements = document.getElementsByTagName('td')
const elements = document.querySelectorAll('#theme, #return')
let whichTheme

getTheme()
theme.addEventListener('click', function () {
  body.classList.toggle('white-mode')
  const isWhiteMode = body.classList.contains('white-mode')
  storageTheme(isWhiteMode)
  if (isWhiteMode) { setLightTheme() } 
  else { setDarkTheme() }
})

function changeImageColor(color) {
  const icons = document.querySelectorAll('.icon img')
  icons.forEach((img) => {
    img.style.filter = `invert(0%) sepia(0%) saturate(0%) ${color} brightness(90%) contrast(150%)`
  })
}

function setLightThemeButtons() {
  var iconElements = document.querySelectorAll('.pomodoro')
  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)')

    images.forEach(function (image) {
      image.style.filter = 'hue-rotate(90deg)'
      var originalColor = image.style.filter
      image.addEventListener('mouseout', function () {
        image.style.filter = originalColor
      })
    })
  })
  changeImageColor('invert(100%)')
}

function setDarkThemeButtons() {
  var iconElements = document.querySelectorAll('.pomodoro')
  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)')

    images.forEach(function (image) {
      image.style.filter = 'invert(83%) sepia(57%) saturate(546%) hue-rotate(163deg) brightness(103%) contrast(102%)'
      var originalFilter = image.style.filter
      image.addEventListener('mouseout', function () {
        image.style.filter = originalFilter
      })
    })
  })
  changeImageColor('invert(0%)')
}

function setDarkTheme() {
  let allBody = document.body
  let pomodoro = document.querySelector('.pomodoro')
  let time = document.querySelector('.dial-plate .time')
  let insertBlock = document.querySelector('.columnMiddle .insert')
  let info = document.querySelector('.info h6')
  let dots = document.querySelector('header h6')
  let inputAdd = document.querySelector('.inputAdd')
  pomodoro.style.background = ''
  pomodoro.style.backgroundColor = ''
  allBody.style.background = ''
  pomodoro.style.color = ''
  time.style.background = ''
  insertBlock.style.backgroundColor = ''
  info.style.color = ''
  dots.style.color = ''
  inputAdd.style.color = ''
  inputAdd.style.backgroundColor = ''
  setDarkThemeButtons()
}

function setLightTheme() {
  let allBody = document.body
  let pomodoro = document.querySelector('.pomodoro')
  let time = document.querySelector('.dial-plate .time')
  let insertBlock = document.querySelector('.columnMiddle .insert')
  let info = document.querySelector('.info h6')
  let dots = document.querySelector('header h6')
  let inputAdd = document.querySelector('.inputAdd')
  pomodoro.style.background = '#ffffff88'
  pomodoro.style.color = "#e4dddd"
  allBody.style.background = '#cac3c3'
  time.style.background = '#ce5454'
  insertBlock.style.backgroundColor = '#00000057'
  insertBlock.style.borderColor = '#79797957'
  info.style.color = 'black'
  dots.style.color = 'black'
  inputAdd.style.backgroundColor = 'aliceblue'
  inputAdd.style.color = 'black'
  setLightThemeButtons()
}

function storageTheme(value) {
  let theme = Array()
  if (localStorage.hasOwnProperty(`theme`)) {
    theme = JSON.parse(localStorage.getItem(`theme`))
  }
  theme = ({ white: value })
  localStorage.setItem(`theme`, JSON.stringify(theme))
}

function getTheme() {
  let theme = Array()
  if (localStorage.hasOwnProperty(`theme`)) {
    theme = JSON.parse(localStorage.getItem(`theme`))
    if(theme.white){
      body.classList.toggle('white-mode')
      setLightTheme()
    }else{
      setDarkTheme()
    }
  }
}