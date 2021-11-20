const toDoInput=document.querySelector("#toDoInput");
const toDoform=document.querySelector("#toDoForm");
function paintList(event){
    event.preventDefault();
    const typed=toDoInput.value;
    toDoInput.value="";
    console.log(typed);
}

toDoForm.addEventListener("submit",paintList);