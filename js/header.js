// scrollinimas iki nustatyto aukscio
function scrollUp(x) {
    window.scrollTo(0, x);
}

const heightAbout = document.querySelector(".home").clientHeight - 120;
const heightServices = document.querySelector(".services").clientHeight + heightAbout;
const heightWorks = document.querySelector(".works").clientHeight + heightServices + 240;
const heightClients = document.querySelector(".clients").clientHeight + heightWorks;
const heightblog = document.querySelector(".blog").clientHeight + heightClients;
const heightContact = document.querySelector(".contact").clientHeight + heightblog;
console.log(heightWorks);
window.onscroll = function() {
    // jei nenuscrolinta
    if (document.body.scrollTop >= heightAbout - 50 || document.documentElement.scrollTop >= heightAbout - 50) {
        var x = document.querySelector("header").style;
        x.backgroundColor = "#ffffff";
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
    } else {
        // jei nenuscrolitna, virsus
        var x = document.querySelector("header").style;
        x.backgroundColor = null;
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
    } else if (document.body.scrollTop >= heightblog || document.documentElement.scrollTop >= heightblog) {
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