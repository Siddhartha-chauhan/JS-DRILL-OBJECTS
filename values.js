function values(obj) {
    return Object.values(obj).filter(val => typeof val !== 'function');
}

export { values };