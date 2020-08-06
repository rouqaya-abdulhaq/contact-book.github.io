import {createCancelBtn} from '../UI/button/buttons';

import './styles/paletteList.css';
import {userInfoCopy} from '../registration/user';
import {updateStyle} from '../actions/style/style';

const body = document.querySelector("body");
const paletteArea = document.querySelector(".paletteArea");

const paletteStyleClasses = ["default","flowery","seaSide","vintage"];

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
  appendStyleBlockToList(blockList);
  return blockList;
}

const appendStyleBlockToList = (blockList) =>{
  for (let styleClass of paletteStyleClasses){
    const styleBlock = createPaletteBlock(styleClass);
    blockList.appendChild(styleBlock);
  }
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
  updateStyleInDB(styleValue);
}

const updateStyleInDB = (style) =>{
  if(userInfoCopy.userId){
    updateStyle(style , userInfoCopy.userId, "token");
  }
}
