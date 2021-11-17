const toDoButton=document.querySelector("#todo-list");
const typedList=document.querySelector("#typedlist");
const toDoInput=document.querySelector("#todo-input");
const ul=document.createElement("ul");



//const toDoInput=document.querySelector("#todo-input");

function toDoButtonClick(){
    
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
    const li=document.createElement("li");
    li.innerText=newToDo;
    ul.appendChild(li);
    typedList.appendChild(ul);
}

toDoInput.addEventListener("submit",handleToDoSubmit);




//input에서 엔터를 치면 typedList창이 사라짐 -->기존의 자바스크립트사용하여(createElement)
//input 생성하는 방법말고 html파일에 직접적으로 input태그 추가

