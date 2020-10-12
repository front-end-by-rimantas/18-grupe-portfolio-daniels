// scrollinimas iki nustatyto aukscio
function scrollUp(x) {
    window.scrollTo(0, x);
}
// reikia perkelt i data
const menuDate = [
    { menuTitle: 'Home' },
    { menuTitle: 'About' },
    { menuTitle: 'Services' },
    { menuTitle: 'Works' },
    { menuTitle: 'Clients' },
    { menuTitle: 'Blog' },
    { menuTitle: 'Contact' }
]

// prideda meniu i 
let totalHeightMenu = -120;
window.onload = function() {
    for (let i = 0; i < menuDate.length; i++) {
        let nameThisMenu = menuDate[i].menuTitle;
        totalHeightMenu += document.querySelectorAll(".container")[i].scrollHeight;
        document.querySelector("nav p").innerHTML += `<p onclick=scrollUp(${totalHeightMenu})>${nameThisMenu}</p>`;
    }
    // document.querySelectorAll("nav p p")[1].style.borderBottom = "solid 2px #ffffff";
    textPrint();
}

window.onscroll = function() {
    // per mobile menu, jei pasirenka, auto uzdaro ji
    document.querySelector("nav").style.height = `0px`;
    dropdowns = 0;

    // jei nenuscrolinta
    if (document.documentElement.scrollTop > 620) {
        var x = document.querySelector("header").style;
        x.paddingBottom = "10px";
        x.paddingTop = "30px";
        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = "#ffffff";
        z.position = "fixed";
        z.boxShadow = "0 1px 50px 5px #e7e6e63b";

        var y = document.querySelector(".container>header a").style;
        y.color = "#000000";

        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#000000";
        }

        document.getElementById("particles-js").style.height = "690px";
        document.querySelector(".container>header>.menuChoices").style.marginTop = "-10px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#000";

    } else {
        // jei nenuscrolitna, virsus
        document.getElementById("particles-js").style.height = "752px";
        document.querySelector(".container>header>.menuChoices").style.marginTop = "0px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#fff";

        var x = document.querySelector("header").style;
        x.paddingTop = "40px";
        x.paddingBottom = "0px";

        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = null;
        z.position = "relative";
        z.boxShadow = null;

        var y = document.querySelector(".container>header a").style;
        y.color = "#ffffff";

        if (window.innerWidth >= 800) {
            let lengthLinks = document.querySelectorAll(".container>header p").length;
            for (let i = 0; i < lengthLinks; i++) {
                document.querySelectorAll(".container>header p")[i].style.color = "#ffffff";
            }
        }
    }
    // Reikia pridet pabraukimus po pasirinkta meniu dalim !!!!!!!!!!!!
    // pabraukimas apacioj

    let lengthLinks = document.querySelectorAll(".container>header p").length;
    for (let i = 0; i < lengthLinks; i++) {
        document.querySelectorAll(".container>header p")[i].style.borderBottom = null;
    }

    // Reikia pridet pabraukimus po pasirinkta meniu dalim !!!!!!!!!!!!

    // if (document.body.scrollTop >= heightContact || document.documentElement.scrollTop >= heightContact) {
    //     document.querySelectorAll(".container>header p")[6].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop >= heightBlog || document.documentElement.scrollTop >= heightBlog) {
    //     document.querySelectorAll(".container>header p")[5].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop >= heightClients || document.documentElement.scrollTop >= heightClients) {
    //     document.querySelectorAll(".container>header p")[4].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop >= heightWorks || document.documentElement.scrollTop >= heightWorks) {
    //     document.querySelectorAll(".container>header p")[3].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop >= heightServices || document.documentElement.scrollTop >= heightServices) {
    //     document.querySelectorAll(".container>header p")[2].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop >= heightAbout || document.documentElement.scrollTop >= heightAbout) {
    //     document.querySelectorAll(".container>header p")[1].style.borderBottom = "solid 2px #000000";
    // } else if (document.body.scrollTop < heightAbout || document.documentElement.scrollTop < heightAbout) {
    //     document.querySelectorAll(".container>header p")[0].style.borderBottom = "solid 2px #ffffff";
    // }
};


// teksto spausdinimas visu triju besikeicianciu
let sizeTextLoad = 0;
var wordWhich = 0;
let wordDiv = "";

// teksto spausdinimas
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
// teksto trinimas po 5 sec
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

// dropdown menu funkcijos
// dropdown menu uzdarymas/atidarymas
let dropdowns = 0;
document.getElementsByClassName("menuChoices")[0].addEventListener("click", function() {
    if (dropdowns < 1) {
        dropdowns++;
        document.querySelector("nav").style.height = `500px`;

    } else {
        dropdowns = 0;
        document.querySelector("nav").style.height = `0px`;
    }
});


// dropdown papildymas
window.onresize = function() {
    if (window.innerWidth > 800) {
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#ffffff";
        }
    } else {
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#000000";
        }
    }
}