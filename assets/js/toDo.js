const insert = document.getElementsByClassName('insert')[0];
const list = document.getElementsByClassName('list')[0];
function main() {
    getTodoData()
    insert.onsubmit = function (parameter) {
      parameter.preventDefault();
      const inputAdd = document.getElementsByClassName('inputAdd')[0];

      if (inputAdd.value.trim() !== '') {
        setTodoData(inputAdd.value)
        loadLastTodoData()
        insert.reset();
      }
    }

}

function load(){
  let checkboxList = document.querySelectorAll('input[type="checkbox"]')
  checkboxList.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      removeTodoData(checkbox)
    })
  })  
}

window.addEventListener('DOMContentLoaded', () => {
  main()
  load()
})
