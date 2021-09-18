const keyboard=document.querySelector(".keyboard");
const up=document.querySelector("#up");
const left=document.querySelector("#left");
const middle=document.querySelector("#middle");
const right=document.querySelector("#right");

//left=37
//up=38
//right=39
//down=40

const COLOR="color";
const MAKERED="makeRed";

function pressTop(e) {
	pressColor(e,38,up);
}

function unPressTop(e){
	unPressColor(up);
}

function pressLeft(e) {
	pressColor(e,37,left);
}

function unPressLeft(e){	
	unPressColor(left);
}

function pressRight(e) {
	pressColor(e,39,right);
}

function unPressRight(e){	
	unPressColor(right);
}

function pressDown(e) {
	pressColor(e,40,middle);
}

function unPressDown(e){	
	unPressColor(middle);
}



function pressColor(e,i,position){
	if(e.keyCode===i){
		position.classList.remove(COLOR);
		position.classList.add(MAKERED);
	}
}

function unPressColor(position){
	position.classList.remove(MAKERED);
	position.classList.add(COLOR);
}



window.addEventListener("keydown", pressTop);
window.addEventListener("keyup",unPressTop);

window.addEventListener("keydown",pressLeft);
window.addEventListener("keyup",unPressLeft);

window.addEventListener("keydown",pressRight);
window.addEventListener("keyup",unPressRight);

window.addEventListener("keydown",pressDown);
window.addEventListener("keyup",unPressDown);