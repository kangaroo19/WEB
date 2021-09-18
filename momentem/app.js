const loginForm=document.getElementById("login-form");   //button,input을 포함하고있는 div id="login-form"
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
const greeting=document.querySelector("#greeting");



const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function loginButtonClick(event) {
   event.preventDefault(); 
   loginForm.classList.add(HIDDEN_CLASSNAME);   //hello my name 이 나와야 하니 hiddne클래스 추가
   const username = loginInput.value;  //박스 안에 들어가는값(내가 타이핑한 이름)
   localStorage.setItem(USERNAME_KEY,username); //키값 USERNAME_KEY("username") value값=내가 타이핑한 이름
  //greeting.innerText = "Hello " +username;
   greeting.innerText =`hello ${username}`; 
   greeting.classList.remove(HIDDEN_CLASSNAME);//id=greeting도 hidden클래스로 숨겨져잇으니 hidden클래스 제거
   
 }





const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername==null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);   //defalt값이 hidden이라 hidden클래스 제거
   loginForm.addEventListener("submit",loginButtonClick);//제출버튼 클릭시 실행
}
else{    //로컬스토리지에 저장된 이름이 있을때
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText=`hello ${savedUsername}`;
}
