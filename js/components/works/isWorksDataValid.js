
function isWorksDataValid(data) {
    let errors = [];

    if (typeof data !== 'object' || data === null) {
        console.log('Data must be object.');
        return false;
    }
    if (!/^[a-zA-Z0-9./]+$/.test(data.img)) {
        errors.push('Image linkas turi neleistinu simboliu.');
    }
    if (!/^[a-zA-Z ]+$/.test(data.title)) {
        errors.push('Image pavadinimas turi neleistinu simboliu.');
    }
    if (!Array.isArray(data.category)) {
    errors.push('Pateikita forma neatitinka reikalavimu!');
    }
    if(data.category!==undefined){
    for (let i = 0; i < data.category.length; i++) {
        if (!/^[a-z]+$/.test(data.category[i])) {
            errors.push('Image kategorija turi neleistiniu simboliu');
        }
    }
}else{
    console.log('Nepateikta kategoriju informacija');
    return false;

}
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.log("Error: ", errors[i]);
        }
        return false;
    }
    return true;
}
export { isWorksDataValid };