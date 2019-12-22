const body = document.querySelector("body");
const paletteClasses = document.querySelectorAll(".paletteClass");
const paletteList = document.querySelector(".colorList");
const cancelBtn = document.querySelector('.cancelBtn');


export const showPaletteList = () => {
  palette(paletteClasses);
  paletteList.classList.remove("hide");
  cancelBtn.addEventListener("click",()=>cancel(paletteList));
}

const palette = (classList)=>{
  classList.forEach((className)=>{
    className.addEventListener("click",()=>{
        body.className = "";
        body.classList.add(className.id);
    });
  });
}

const cancel = (element) =>{
  element.classList.add("hide");
}