const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const todoList=document.getElementById("todo-list");

let toDos=[];
const TODOS_KEY="toDos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));//문자열 형태로 로컬스토리지에 저장(양옆에 ""추가)
}

function deleteToDo(event){
    const li=event.target.parentElement;//삭제하고 싶은 li
    console.log(typeof li.id);
    li.remove();//요소 삭제하는 메소드
    toDos=toDos.filter(toDo=>toDo.id!=parseInt(li.id));//toDo.id는 int li.id는 string
    saveToDos();
}

function paintToDo(newToDo){
    const li=document.createElement("li"); //문서에 li생성
    li.id=newToDo.id; //html li 의 id를 객체로 전달받은 값(newToDoObj)의 id(date.now)로 지정
    const span=document.createElement("span");
    span.innerText=newToDo.text;
    const button=document.createElement("button");
    button.innerText="X"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);//span은 li의 자식요소가 된다
    li.appendChild(button);//얘가 11행보다 앞에있으면 얘가 먼저나옴
    todoList.appendChild(li);//li는 todolist의 자식요소
}
function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newToDo=toDoInput.value;
    toDoInput.value="";//엔터치면 input공백으로 만들기 위함
    const newToDoObj={
        text:newToDo,
        id:Date.now(),//id로 각각 item을 구별
    };
    toDos.push(newToDoObj);//newToDo(input에 타이핑 한 내용)을 배열toDos에 추가
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){    //?item은 배열의 요소(타이핑한 값)인듯?
    console.log("this is the turn of ",item);
}

const savedToDos=localStorage.getItem(TODOS_KEY);
console.log(savedToDos);//일반스트링형태로 출력
if(savedToDos){
    const parseToDos=JSON.parse(savedToDos);
    console.log(parseToDos);//배열형태로 출력
    toDos=parseToDos;//로컬스토리지에 값이 있따면 parsetodo를 배열(toDos)에 복원
    parseToDos.forEach(paintToDo);
}


