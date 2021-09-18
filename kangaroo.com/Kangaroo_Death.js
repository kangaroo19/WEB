const kangaroo=document.querySelector("#kangaroo");
let i=0;
function kangarooDied(){   
    i++;
    kangaroo.innerText="죽은 캥거루:"+i+"마리";
}


setInterval(kangarooDied,7000);