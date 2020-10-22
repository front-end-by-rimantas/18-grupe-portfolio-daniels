function isWorksDataValid(data) {
    let errors = [];

    if (typeof data !== 'object' || data === null) {
        console.log('data must be object.');
        return false;
    }
    if (data.length < 1 || Object.keys(data).length < 1) {
        errors.push('here is no data.');
    }
    if (typeof data.works.title !== 'string') {
        console.log('menu title must be string.');
        return false;
    }
    if (data.works.title.length < 2 || data.works.title.length > 15) {
        errors.push('menu title length must be 2-15 symbols.');
    }
    if (!/^[a-zA-Z]+$/.test(data.works.title)) {
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
export { isWorksDataValid }