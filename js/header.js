// scrollinimas iki nustatyto aukscio
function scrollUp(whichItem) {
    let totalHeightMenu = -120;
    //for mobile scrollHeight
    if (window.innerWidth <= 800) { totalHeightMenu -= 520; }
    // check scrollHeight everytime on scroll, because can be resized
    for (let i = 0; i <= whichItem; i++) {
        totalHeightMenu += document.querySelectorAll(".container")[i].scrollHeight;
    }
    // scroll to choosen height
    window.scrollTo(0, totalHeightMenu);
}

// TODO: perkelti i data
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
window.onload = function() {
    for (let i = 0; i < menuDate.length; i++) {
        let nameThisMenu = menuDate[i].menuTitle;
        document.querySelector("nav").innerHTML += `<p onclick=scrollUp(${i})>${nameThisMenu}</p>`;
    }
    // uzkraunant Home pabraukiamas
    document.querySelectorAll("nav p")[0].style.borderBottom = "solid 2px #fff";
    textPrint();
}

window.onscroll = function() {
    // per mobile menu, jei pasirenka, auto uzdaro ji
    document.querySelector("nav").style.height = `0px`;
    dropdowns = 0;
    // jei nenuscrolinta
    if (document.documentElement.scrollTop > 620) {
        // header uzrasai virsun
        var x = document.querySelector("header").style;
        x.paddingBottom = "10px";
        x.paddingTop = "30px";

        //header nuscrolinus fixed virsuj
        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = "#ffffff";
        z.position = "fixed";
        z.boxShadow = "0 1px 50px 5px #e7e6e63b";
        // link (LOGO) color change on scrolled
        var y = document.querySelector(".container>header a").style;
        y.color = "#000000";

        // menu uzrasu spalvos keitimas
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#000000";
        }

        // papildomi pakeitimai
        document.getElementById("particles-js").style.height = "690px";
        document.querySelector(".container>header>.menuChoices").style.marginTop = "-10px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#000";

    } else {
        // jei nenuscrolitna, virsus

        // header uzrasai apacion
        var x = document.querySelector("header").style;
        x.paddingTop = "40px";
        x.paddingBottom = "0px";

        //header grizus i virsu pradingsta is fixed pozicijos
        var z = document.getElementsByClassName("container")[0].style;
        z.backgroundColor = null;
        z.position = "relative";
        z.boxShadow = null;

        // link (LOGO) color change on scrolledUp
        var y = document.querySelector(".container>header a").style;
        y.color = "#ffffff";

        // menu uzrasu spalvos keitimas
        if (window.innerWidth >= 800) {
            let lengthLinks = document.querySelectorAll(".container>header p").length;
            for (let i = 0; i < lengthLinks; i++) {
                document.querySelectorAll(".container>header p")[i].style.color = "#ffffff";
            }
        }

        // papildomi pakeitimai
        document.getElementById("particles-js").style.height = "752px";
        document.querySelector(".container>header>.menuChoices").style.marginTop = "0px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#fff";
    }
    // Reikia pridet pabraukimus po pasirinkta meniu dalim !!!!!!!!!!!!
    // pabraukimas apacioj

    let lengthLinks = document.querySelectorAll(".container>header p").length;
    for (let i = 0; i < lengthLinks; i++) {
        document.querySelectorAll(".container>header p")[i].style.borderBottom = null;
    }

    // pabraukimas apacioj menu
    if (window.innerWidth > 800) {
        let totalHeightMenu = -200;
        for (let i = 0; i <= menuDate.length; i++) {
            totalHeightMenu += document.querySelectorAll(".container")[i].scrollHeight;
            if (i > 0) {
                if (document.body.scrollTop >= totalHeightMenu || document.documentElement.scrollTop >= totalHeightMenu) {
                    document.querySelectorAll("nav p")[i].style.borderBottom = "solid 2px #000";
                    let x = i - 1;
                    if (x > -1) {
                        document.querySelectorAll("nav p")[x].style.borderBottom = "solid 2px #fff";
                    }
                }
            } else {
                document.querySelectorAll("nav p")[0].style.borderBottom = "solid 2px #fff";
            }
        }
    }
}


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
        document.querySelector("nav").style.transition = `0.5s`;
        document.querySelector("nav").style.height = `500px`;

    } else {
        dropdowns = 0;
        document.querySelector("nav").style.transition = `0.5s`;
        document.querySelector("nav").style.height = `0px`;
    }
});


// dropdown papildymas
window.onresize = function() {
    if (window.innerWidth > 800) {
        document.querySelector("nav").style.transition = `0s`;
        if (document.documentElement.scrollTop < 620) {
            let lengthLinks = document.querySelectorAll(".container>header p").length;
            for (let i = 0; i < lengthLinks; i++) {
                document.querySelectorAll(".container>header p")[i].style.color = "#ffffff";
            }

            document.querySelector("nav").style.height = `0px`;
        }
    } else {
        let lengthLinks = document.querySelectorAll(".container>header p").length;
        for (let i = 0; i < lengthLinks; i++) {
            document.querySelectorAll(".container>header p")[i].style.color = "#000000";
            document.querySelectorAll("nav p")[i].style.borderBottom = null;
        }
        document.querySelectorAll("nav p")[0].style.borderBottom = "solid 2px #fff";
    }

}