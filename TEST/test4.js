const toDoButton=document.querySelector("#todo-list");
const typedList=document.querySelector("#typedlist");
const form=document.createElement("form");
const input=document.createElement("input");
const ul=document.createElement("ul");
form.id="todo-form";//생성한 form에 id값 부여
input.id="todo-input";

const toDoForm=document.querySelector("#todo-form");
const toDoInput=document.querySelector("#todo-input");

function toDoButtonClick(){
    
    typedList.classList.toggle("hidden");
    typedList.classList.toggle("display");
    form.appendChild(input);
    typedList.appendChild(form);
    
}

toDoButton.addEventListener("click",toDoButtonClick);



//input에서 엔터를 치면 typedList창이 사라짐 

