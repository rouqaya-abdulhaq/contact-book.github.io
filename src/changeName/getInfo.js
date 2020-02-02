export const getInfoById = (reqInfoArr) =>{
    const info = {};
    for (const req of reqInfoArr) {
        info[req] = document.querySelector('#'+req).value;
    }
    return info;
}