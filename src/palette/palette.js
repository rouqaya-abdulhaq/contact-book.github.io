export const palette = (classList)=>{
  classList.forEach((className)=>{
    className.addEventListener("click",()=>{
        console.log(className.id);
    });
  });
}
