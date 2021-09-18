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
        changeValueAndItem("주간모드");
    }
    else{                                  //야간모드 끌때 
        bodyAll.classList.toggle("darkMode");
        changeValueAndItem("야간모드");
    }
}

darkModeButton.addEventListener("click",darkMode);







function changeValueAndItem(mode){   
    darkModeButton.value=mode;
    if(darkModeButton.value=="주간모드"){
        localStorage.setItem("mode","dark");
    }
    else{
        localStorage.removeItem("mode","dark");
    }
}
