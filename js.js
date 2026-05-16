
const userInput = document.getElementById("input_value");
const userTriger = document.getElementById("user_triger");

const taskDelete = document.getElementsByClassName("delete-btn");
const  taskEdit = document.getElementsByClassName("edit-btn");
const taskCompleted = document.getElementsByClassName("complete-btn");

const newItems = document.getElementsByClassName("todo-list");
const item = document.getElementsByClassName("todo-item");


userTriger.addEventListener("click", newItemAdd)

function newItemAdd(){
    let userTask = userInput.value;
    let newitem = document.createElement("li");
    if(userTask !== ""){
    newitem.innerHTML = `<span>${userTask} </span>`;
    newitem.classList.add("todo-item");
    let newdiv = document.createElement("div");
    newdiv.classList.add("actions");
    newitem.appendChild(newdiv);
    
    let complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.classList.add("complete-btn");
    newdiv.appendChild(complete);

    let dlt = document.createElement("button");
    dlt.innerHTML = "Delete";
    dlt.classList.add("delete-btn");
    newdiv.appendChild(dlt);
    }

    newItems[0].appendChild(newitem);
    userInput.value = "";
    saveData();
}


newItems[0].addEventListener("click", buttonsystem);

function buttonsystem(e){
    let todoitem = e.target.closest(".todo-item");
    if(e.target.tagName === "BUTTON" && e.target.classList.contains("delete-btn")){
        todoitem.remove();
        saveData();
    } else if (e.target.tagName === "BUTTON" && e.target.classList.contains("complete-btn")){
        todoitem.classList.add("completed");
        e.target.innerHTML = "Completed";
        saveData();
    }
}
function saveData(){

    localStorage.setItem("data", newItems[0].innerHTML)
}
function showData(){
    let savedData = localStorage.getItem("data");
    if(savedData !== null){
        newItems[0].innerHTML = savedData;
    }
}

showData();
