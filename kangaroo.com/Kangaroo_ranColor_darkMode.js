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
title.addEventListener("mouseenter",mouseEnter);
title.addEventListener("mouseleave",mouseLeave);
darkModeButton.addEventListener("click",darkMode);






