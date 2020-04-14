import {createCancelBtn} from '../UI/button/buttons';

import './styles/paletteList.css';

const body = document.querySelector("body");
const paletteArea = document.querySelector(".paletteIcon");

const paletteStyleClasses = ["default","flowery","seaSide"];

export const appendPaletteList = () =>{
  const paletteList = createPaletteList();
  paletteArea.appendChild(paletteList);
}
 
const createPaletteList = () =>{
  const blockList = createBlockList();
  const cancelBtn = createCancelBtn();
  const palettePopUp = createPalettePopUp();
  palettePopUp.append(cancelBtn, blockList);
  return palettePopUp;
}

const createPalettePopUp = () =>{
  const palettePopUp = document.createElement('div');
  palettePopUp.setAttribute("class","palettePopUp");
  return palettePopUp;
}

const createBlockList = () =>{
  const blockList = document.createElement('div');
  blockList.setAttribute("class","blockList");
  for (let styleClass of paletteStyleClasses){
    const styleBlock = createPaletteBlock(styleClass);
    blockList.appendChild(styleBlock);
  }
  return blockList;
}

const createPaletteBlock = (styleValue) =>{
  const paletteBlock = document.createElement('div');
  paletteBlock.setAttribute("class","paletteBlock");
  paletteBlock.innerText = styleValue;
  paletteBlock.addEventListener("click",()=>onChangeStyle(styleValue));
  return paletteBlock;
}

const onChangeStyle = (styleValue) =>{
  body.className = "";
  body.classList.add(styleValue);
}
