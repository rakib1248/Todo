const inputTodo = document.getElementById("inputTodo");
const AddTodo = document.getElementById("AddTodo");
const TodoListItem = document.getElementById("TodoListItem");

let TodoArry = [];

AddTodo.onclick = (e) => {
  e.preventDefault();
  if (inputTodo.value) {
    TodoArry.push(inputTodo.value);
    AddTodo.textContent = "Add Todo";
    inputTodo.value = "";
    Todo_show();
  }
};

const Todo_show = () => {
  TodoListItem.innerHTML = ""; 
  TodoArry.slice()
    .reverse()
    .forEach((item, index) => {
      const TodoIndex = TodoArry.length - 1 - index;
      const listItem = document.createElement("li");
      listItem.className =
        "mt-3 bg-white text-left p-2 font-bold flex justify-between rounded items-center";
      listItem.textContent = item;

      const editButton = document.createElement("button");
      editButton.className =
        "bg-yellow-500 hover:bg-yellow-400 px-3 rounded text-lg mr-2";
      editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      editButton.onclick = () => editTodo(TodoIndex);

      const deleteButton = document.createElement("button");
      deleteButton.className =
        "bg-red-500 hover:bg-red-400 px-3 rounded text-lg";
      deleteButton.innerHTML = '<i class="fa-solid fa-trash-can-undo"></i>';
      deleteButton.onclick = () => deleteTodo(TodoIndex);

      const buttonContainer = document.createElement("div");
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(deleteButton);

      listItem.appendChild(buttonContainer);
      TodoListItem.appendChild(listItem);
    });
};

function deleteTodo(index) {
  TodoArry.splice(index, 1);
  Todo_show();
}

function editTodo(index) {
  inputTodo.value = TodoArry[index];
  deleteTodo(index);
  AddTodo.textContent = "Update Todo";
  inputTodo.focus();
}

Todo_show();
