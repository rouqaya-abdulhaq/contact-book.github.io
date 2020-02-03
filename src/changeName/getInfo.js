export const getInfoById = (reqInfoArr) =>{ //THE OBJECT PROPERTY HAS THE SAME NAME AS THE ID 
    //CONSIDER GIVING USER A CHANCE TO NAME THE OBJECT PROPERTY
    const info = {};
    for (const req of reqInfoArr) {
        info[req] = document.querySelector('#'+req).value;
    }
    return info;
}