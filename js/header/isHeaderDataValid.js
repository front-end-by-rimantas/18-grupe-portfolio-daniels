function isHeaderDateValid(headerData) {
    let errors = [];

    if (typeof headerData !== 'object' || headerData === null) {
        console.log('headerData must be object.');
        return false;
    }
    if (headerData.length < 1 || Object.keys(headerData).length < 1) {
        errors.push('here is no data.');
    }
    if (typeof headerData.menuTitle !== 'string') {
        console.log('menu title must be string.');
        return false;
    }
    if (headerData.menuTitle.length < 2 || headerData.menuTitle.length > 15) {
        errors.push('menu title length must be 2-15 symbols.');
    }
    if (!/^[a-zA-Z]+$/.test(headerData.menuTitle)) {
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