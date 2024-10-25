let todoList = JSON.parse(localStorage.getItem('todoList')) || []; 

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoitem = inputElement.value;
    let tododate = dateElement.value;

    todoList.push({ item: todoitem, duedate: tododate });
     
    inputElement.value = '';
    dateElement.value = '';

    saveToLocalStorage()
    displayItems();
}

function displayItems() {
   let containerElement = document.querySelector(".todo-container");
   
   let newHtml = '';

   for (let i = 0; i < todoList.length; i++) {
       let item = todoList[i].item;
       let duedate = todoList[i].duedate;
       newHtml += `
               <span>${item}</span>
               <span>${duedate}</span>
               <button class="btn-delete" onclick="todoList.splice(${i}, 1); saveToLocalStorage(); displayItems()">Delete</button>
       `;
   }
   containerElement.innerHTML = newHtml;
}
function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}