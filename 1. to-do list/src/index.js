import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

const todos = [
];

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        if (todo.editMode)
            return createTodoEditElement(todo, index);
        else
            return createTodoElement(todo, index);
    });
    ul.innerHTML = "";
    ul.append(...todosNode);
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
});

const createTodoElement = (todo, index) => {
    const li = document.createElement("li");

    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "Edit";
    buttonEdit.addEventListener("click", (event)=>{
        event.stopPropagation();
        toggleEditTodo(index);
    });

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete";
    buttonDelete.addEventListener("click", (event)=>{
        event.stopPropagation();
        deleteTodo(index);
    });

    li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
    `;
    li.addEventListener("click", (event)=>{
        toggleTodo(index);
    });
    li.append(buttonEdit, buttonDelete);
    return li;
};

const createTodoEditElement = (todo, index)=>{
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;

    const buttonSave = document.createElement("button");
    buttonSave.innerHTML = "Save";
    buttonSave.addEventListener("click", (event)=>{
        editTodo(index, input);
    });

    const buttonCancel = document.createElement("button");
    buttonCancel.innerHTML = "Cancel";
    buttonCancel.addEventListener("click", (event)=>{
        event.stopPropagation();
        toggleEditTodo(index);
    });

    li.append(input, buttonSave, buttonCancel);
    return li;
}

const addTodo = (text)=>{
    if (!text)
        return;
    todos.push({
        text,
        done: false
    });
    displayTodo();
};

const deleteTodo = (index) =>{
    todos.splice(index, 1);
    displayTodo();
};

const toggleTodo = (index) =>{
    todos[index].done = !todos[index].done;
    displayTodo();
};

const editTodo = (index, input) =>{
    const value = input.value;
    todos[index].text = value;
    todos[index].editMode = false;
    displayTodo();
};

const toggleEditTodo = (index) =>{
    todos[index].editMode = !todos[index].editMode;
    displayTodo();
}

displayTodo();