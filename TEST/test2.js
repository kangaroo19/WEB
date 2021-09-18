const box=document.querySelector("#box");

function pressDown(e) {
	if (e.keyCode === 40) {
		box.classList.remove("color");
		box.classList.add("red");
        console.log("left");
	}
}

function pressUp(e){
	box.classList.remove("red");
	box.classList.add("color");
}

document.addEventListener("keydown",pressDown);
document.addEventListener("keyup",pressUp);