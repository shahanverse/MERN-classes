let todos = [
  {text: "Finish Javascript", status: "done" },
  {text: "complete react project", status: "pending"},
  {text: 'train english fluency', status: "pending"},
  {text: "run 5 miles", status: "done"},
  {text: 'make 5 million', status: 'pending'},
  {text: 'read 20 pages', status: 'pending'},
  {text: 'cook dinner', status: 'done'},
  {text: 'call mom', status: 'pending'},
  {text: 'clean room', status: 'done'},
  {text: 'pay bills', status: 'pending'},

];

function addTodo() {
  const input = document.getElementById('todo-input')

  if (input.value.trim() === "") return;

  todos.push({
    text: input.value,
    status: "pending"
  })

  input.value = "";
  displayTodos(todos)
  updateCount();
}

// display

function displayTodos (list) {
  const ul = document.getElementById('todoList')

  ul.innerHTML='';

  list.forEach ((todo,index) => {
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex justify-content-between align-items-center'
    
    li.innerHTML = `${todo.text}
     ${
       todo.status === "pending"
         ? `
            <div>
              <span class="badge bg-danger me-2">Pending</span>
              <button class="btn btn-sm btn-secondary" onclick="markDone(${index})">
                Done
              </button>
            </div>
          `
         : `<span class="badge bg-success">Done</span>`
     }`;
     ul.appendChild(li)
  })
}

function markDone(index){
  todos[index].status = 'done';
  displayTodos(todos)
  updateCount()
}

//filter task

function filterTodos(type){
  if (type === "all") displayTodos(todos)

  if (type === 'completed'){
    const completed = todos.filter(todo => todo.status === "done")
    displayTodos(completed)
  }
  if (type === 'pending') {
    const pending = todos.filter(todo => todo.status === 'pending')
    displayTodos(pending)
  }

}

// update count 

function updateCount(){
  const total = todos.length;
  const completed = todos.filter(todo => todo.status === 'done').length;
  const pending = todos.filter(todo => todo.status === 'pending').length

  document.getElementById('count-text').innerText = `Total:${total}| Completed:${completed}| Pending:${pending}`
}

function sortAtoZ (){
  todos.sort((a, b) => {
    return a.text.localeCompare(b.text)
  })
  displayTodos(todos)
  updateCount()
}

displayTodos(todos)
updateCount()
