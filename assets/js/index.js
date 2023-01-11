const insert = document.getElementsByClassName('insert')[0];
const list = document.getElementsByClassName('list')[0];

insert.onsubmit = function(parameter){
  
  parameter.preventDefault();
  const inputAdd = document.getElementsByClassName('input-add')[0];

  if(inputAdd.value.trim() !== ''){
  newTask(inputAdd.value);
  insert.reset();
  }
}

function newTask(description){
  const createDiv = document.createElement("div");
  const createContent = document.createElement("input");
  const createLabel = document.createElement("label");
  const descriptionInput = document.createTextNode(description);

  createContent.setAttribute("type", "checkbox");
  createContent.setAttribute("class", "taskList");
  createContent.setAttribute("name", description);
  createContent.setAttribute("id", description);

  createLabel.setAttribute("for", description);
  createLabel.appendChild(descriptionInput);

  createDiv.classList.add("form-item");
  createDiv.appendChild(createContent);
  createDiv.appendChild(createLabel);
  createDiv.appendChild(descriptionInput);
  
  list.appendChild(createDiv);

  
}