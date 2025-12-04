function mapObject(obj, cb) {
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cb(obj[key]);
        }
    }
    return result;
}

export { mapObject };
