//야간,주간모드 및 h1색깔바뀌는거
const title=document.querySelector("h1");
const bodyAll=document.querySelector("body");
const darkModeButton=document.querySelector("input");
const savedMode=localStorage.getItem("mode");


function mouseEnter(){
    const ranColor=["red","orange","yellow","green","blue","navy","puple"];
    let num=Math.floor(Math.random()*ranColor.length);
    title.style.color=ranColor[num];


}
function mouseLeave(){
    title.style.color="white";
}

if(savedMode=="dark"){      //야간모드로 본문으로 넘어갈때
    bodyAll.classList.add("darkMode");
    darkModeButton.value="주간모드";
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
//야간,주간모드 및 h1색깔바뀌는거

//로그인,로그아웃
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const logoutForm=document.querySelector("#logoutForm");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
const savedUsername=localStorage.getItem(USERNAME_KEY);



function loginButton(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    greeting.innerText="안녕하세요 "+username+" 씨";
    greeting.classList.remove(HIDDEN_CLASSNAME);
       
}



if(savedUsername==null){    //로컬스토리지에 이름 없을때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginButton);
}
else{                   //로컬스토리지에 이름 있을때
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText="안녕하세요 "+savedUsername+" 씨";
    
    
}

title.addEventListener("mouseenter",mouseEnter);
title.addEventListener("mouseleave",mouseLeave);
darkModeButton.addEventListener("click",darkMode);


