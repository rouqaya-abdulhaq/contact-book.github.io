const body = document.querySelector("body");

export const palette = (classList)=>{
  classList.forEach((className)=>{
    className.addEventListener("click",()=>{
        body.className = "";
        body.classList.add(className.id);
    });
  });
}
