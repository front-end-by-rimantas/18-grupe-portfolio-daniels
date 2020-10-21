function isHomeDataValid(data) {
    let errors = [];

    if (typeof data !== 'object' || data === null) {
        console.log('Data must be object.');
        return false;
    }
    if (data.length < 1 || Object.keys(data).length < 1) {
        errors.push('Data not found.');
    }
    if (typeof data.textPrinted !== 'string') {
        console.log('Menu title must be string.');
        return false;
    }
    if (data.textPrinted.length < 2 || data.textPrinted.length > 15) {
        errors.push('Menu title length must be 2-15 symbols.');
    }
    if (!/^[a-zA-Z ]+$/.test(data.textPrinted)) {
        errors.push('Menu title must contains only letters.');
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.log("Error: ", errors[i]);
        }
        return false;
    }
    return true;
}
export { isHomeDataValid }