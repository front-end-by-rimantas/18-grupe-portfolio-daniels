// scrollinimas iki nustatyto aukscio
function scrollUp(x) {
    window.scrollTo(0, x);
}
const heightAbout = document.querySelector(".home").scrollHeight - 120;
const heightServices = document.querySelector(".services").scrollHeight + heightAbout;
const heightWorks = document.querySelector(".works").scrollHeight + heightServices;
const heightClients = document.querySelector(".clients").scrollHeight + heightWorks;
const heightBlog = document.querySelector(".blog").scrollHeight + heightClients;
const heightContact = document.querySelector(".contact").scrollHeight + heightBlog;

// events vietoj buvusiu onclick index.html
document.querySelectorAll("p")[6].addEventListener("click", () => scrollUp(0));
document.querySelectorAll("p")[5].addEventListener("click", () => scrollUp(heightAbout));
document.querySelectorAll("p")[4].addEventListener("click", () => scrollUp(heightServices));
document.querySelectorAll("p")[3].addEventListener("click", () => scrollUp(heightWorks));
document.querySelectorAll("p")[2].addEventListener("click", () => scrollUp(heightClients));
document.querySelectorAll("p")[1].addEventListener("click", () => scrollUp(heightBlog));
document.querySelectorAll("p")[0].addEventListener("click", () => scrollUp(heightContact));

console.log(heightAbout, heightServices, heightWorks, heightClients, heightBlog, heightContact);

window.onscroll = function() {
    // jei nenuscrolinta
    if (document.body.scrollTop >= heightAbout - 50 || document.documentElement.scrollTop >= heightAbout - 50) {
        var x = document.querySelector("header").style;
        x.paddingBottom = "10px";
        x.paddingTop = "30px";
        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = "#ffffff";
        z.position = "fixed";

        var y = document.querySelector(".container>header a").style;
        y.color = "#000000";
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#000000";
        }

        document.getElementById("particles-js").style.height = "690px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#000";

    } else {
        // jei nenuscrolitna, virsus
        document.getElementById("particles-js").style.height = "752px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#fff";

        var x = document.querySelector("header").style;
        x.paddingTop = "40px";
        x.paddingBottom = "0px";

        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = null;
        z.position = "relative";

        var y = document.querySelector(".container>header a").style;
        y.color = "#ffffff";
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#ffffff";
        }
    }
    // pabraukimas apacioj

    let lengthLinks = document.querySelectorAll(".container>header p").length;
    for (let i = 0; i < lengthLinks; i++) {
        document.querySelectorAll(".container>header p")[i].style.borderBottom = null;
    }

    if (document.body.scrollTop >= heightContact || document.documentElement.scrollTop >= heightContact) {
        document.querySelectorAll(".container>header p")[0].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop >= heightBlog || document.documentElement.scrollTop >= heightBlog) {
        document.querySelectorAll(".container>header p")[1].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop >= heightClients || document.documentElement.scrollTop >= heightClients) {
        document.querySelectorAll(".container>header p")[2].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop >= heightWorks || document.documentElement.scrollTop >= heightWorks) {
        document.querySelectorAll(".container>header p")[3].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop >= heightServices || document.documentElement.scrollTop >= heightServices) {
        document.querySelectorAll(".container>header p")[4].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop >= heightAbout || document.documentElement.scrollTop >= heightAbout) {
        document.querySelectorAll(".container>header p")[5].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop < heightAbout || document.documentElement.scrollTop < heightAbout) {
        document.querySelectorAll(".container>header p")[6].style.borderBottom = "solid 2px #ffffff";
    }
};

function homeOnLoad() {
    document.querySelectorAll(".container>header p")[6].style.borderBottom = "solid 2px #ffffff";
    textPrint();
}

// teksto spausdinimas visu triju besikeicianciu
let sizeTextLoad = 0;
var wordWhich = 0;
let wordDiv = "";

function textPrint() {
    if (wordWhich == 0) {
        wordDiv = "one";
        wordWidth = 290;
    }
    if (wordWhich == 1) {
        wordDiv = "two";
        wordWidth = 251;
    }
    if (wordWhich == 2) {
        wordDiv = "three";
        wordWidth = 222;
    }
    sizeTextLoad += 10;
    if (sizeTextLoad < wordWidth) {
        document.querySelector(`#${wordDiv}`).style.width = `${sizeTextLoad}px`;
        setTimeout(textPrint);
    } else {
        setTimeout(textDelete, 5000);
    }
}

function textDelete() {
    sizeTextLoad -= 10;
    if (sizeTextLoad > -10) {
        document.querySelector(`#${wordDiv}`).style.width = `${sizeTextLoad}px`;
        setTimeout(textDelete);
    } else {
        if (wordWhich < 2) { wordWhich++; } else { wordWhich = 0; }
        setTimeout(textPrint);
    }
}