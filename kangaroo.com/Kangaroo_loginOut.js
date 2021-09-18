const loginInput=document.querySelector("#login-input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");
const logout=document.querySelector("#logout");
const HIDDEN="hidden";

const savedName=localStorage.getItem("username");


function loginButton(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const name=loginInput.value;
    greeting.innerText="hello "+name;
    greeting.classList.remove(HIDDEN);
    localStorage.setItem("username",name);
    logout.classList.remove(HIDDEN);
}

function logoutButton(event){
    event.preventDefault();
    localStorage.removeItem("username");
    greeting.classList.add(HIDDEN);
    loginForm.classList.remove(HIDDEN);
    logout.classList.add(HIDDEN);
}



if(savedName==null){        //저장된 이름 없을때
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",loginButton);
}
else{   //저장된 이름 있을때
    
    greeting.classList.remove(HIDDEN);
    greeting.innerText="hello "+savedName;
    logout.classList.remove(HIDDEN);
}

logout.addEventListener("click",logoutButton);