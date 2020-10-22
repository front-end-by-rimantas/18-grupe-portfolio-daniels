import portfolio from "../../data/worksdata";

function isWorksDataValid(portfolio) {
    let errors = [];

    if (typeof portfolio !== 'object' || portfolio === null) {
        console.log('data must be object.');
        return false;
    }
    if (portfolio.length < 1 || Object.keys(portfolio).length < 1) {
        errors.push('here is no data.');
    }
    if (typeof portfolio.works.title !== 'string') {
        console.log('menu title must be string.');
        return false;
    }
    if (portfolio.works.title.length < 2 || portfolio.works.title.length > 15) {
        errors.push('menu title length must be 2-15 symbols.');
    }
    if (!/^[a-zA-Z]+$/.test(portfolio.works.title)) {
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