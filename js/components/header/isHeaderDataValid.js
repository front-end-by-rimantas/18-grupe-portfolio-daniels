function isHeaderDateValid(data) {
    let errors = [];

    if (typeof data !== 'object' || data === null) {
        console.log('Data must be object.');
        return false;
    }
    if (data.length < 1 || Object.keys(data).length < 1) {
        errors.push('Data not found.');
    }
    if (typeof data.menuTitle !== 'string') {
        console.log('Menu title must be string.');
        return false;
    }
    if (data.menuTitle.length < 2 || data.menuTitle.length > 15) {
        errors.push('Menu title length must be 2-15 symbols.');
    }
    if (!/^[a-zA-Z]+$/.test(data.menuTitle)) {
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
export { isHeaderDateValid }