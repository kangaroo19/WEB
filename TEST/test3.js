

  function pressDown(event){
      const key=document.getElementById(event.key);
      if(key){
          key.classList.add("pressed");
      }
  }

  function pressUp(event){
      const key=document.getElementById(event.key);
      if(key){
          key.classList.remove("pressed");
      }
  }


  window.addEventListener("keydown",pressDown);
  window.addEventListener("keyup",pressUp);