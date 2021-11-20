const toDoButton=document.querySelector("#todo-list");
const typedList=document.querySelector("#typedlist");
const toDoInput=document.querySelector("#todo-input");
const toDoForm=document.querySelector("#todo-form");
const checkBox=document.querySelector("#check-box");
const list=document.querySelector("#list");
const ul=document.createElement("ul");



//const toDoInput=document.querySelector("#todo-input");

function toDoButtonClick(){//typedlist나오는 메소드
    typedList.classList.toggle("hidden");
    typedList.classList.toggle("display");
}
toDoButton.addEventListener("click",toDoButtonClick);


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}
function paintToDo(newToDo){
    if(newToDo!=""){
    const li=document.createElement("li");
    li.innerText=newToDo;
    list.appendChild(li);
    }
}

checkBox.addEventListener("click",handleToDoSubmit);//submit일때는 typedlist창이 사라졋는데 click으로 하니까 사라지지도 않고
//왠진 모르겟는데 엔터를 쳐도 제대로 작동(typelist창도 안사라짐)








