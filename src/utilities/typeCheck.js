export const isObject = (argument) =>{
    return typeof argument === 'object' && argument !== null && typeof argument !== 'function';
}

export const isFunction = (argument) =>{
    return typeof argument === 'function' && argument !== 'object';
}