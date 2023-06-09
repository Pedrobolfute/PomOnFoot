const insert = document.getElementsByClassName('insert')[0];
const list = document.getElementsByClassName('list')[0];

window.addEventListener('load', () => {
getTodoData()
insert.onsubmit = function(parameter){
  parameter.preventDefault();
  const inputAdd = document.getElementsByClassName('inputAdd')[0];
  
  if(inputAdd.value.trim() !== ''){
    setTodoData(inputAdd.value)
    newElement(inputAdd.value)
    insert.reset();
  }
}

let newElement = function newTask(description){
  let list = document.getElementsByClassName('list')[0]
  const element = `
  <div class="formItem">
    <input type="checkbox" class="taskList" name="${description}" id="${description}">
    <label for="${description}"></label>${description}</div>`
  list.innerHTML += element
}
//console.log(whichTodoDay())
})

