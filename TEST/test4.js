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
    if(typedList.classList.contains("hidden")){
        typedList.classList.remove("hidden");
        typedList.classList.add("display");
        form.appendChild(input);
        typedList.appendChild(form);
        addEventListener("submit",addList);
    }
    else{
        typedList.classList.remove("display");
        typedList.classList.add("hidden");
    }
}

toDoButton.addEventListener("click",toDoButtonClick);

function paintList(list){
    const li=document.createElement("li");
    li.appendChild(ul);
    li.innerText=list;
}

function addList(event){
    event.preventDefault();
    const list=toDoInput.value;
    toDoInput.value="";
    paintList(list);
}

//todoinput 옆에 버튼을 하나 만들어서 해야될듯 addlist의 엔터와 todobuttonclick의 엔터
//중복되서 그런거같음