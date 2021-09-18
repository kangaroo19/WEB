const bodyAll=document.querySelector("body");
const darkModeButton=document.querySelector("input");
const savedMode=localStorage.getItem("mode");

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

if(savedMode=="dark"){       //본문에서 야간모드로 넘어갔을때
    bodyAll.classList.add("darkMode");
    darkModeButton.value="주간모드";
}
else{                       //본문에서 주간모드로 넘어갔을때
    darkModeButton.value="야간모드";
}

function darkMode(){
    if(darkModeButton.value=="야간모드"){   //야간모드 킬때
        bodyAll.classList.toggle("darkMode");
        darkModeButton.value="주간모드";
        localStorage.setItem("mode","dark");
    }
    else{                                  //야간모드 끌때 
        bodyAll.classList.toggle("darkMode");
        darkModeButton.value="야간모드";
        localStorage.removeItem("mode","dark");
    }
}

function loginButton(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText="안녕하세요 "+username+" 씨";
    
}

darkModeButton.addEventListener("click",darkMode);
loginForm.addEventListener("submit",loginButton);