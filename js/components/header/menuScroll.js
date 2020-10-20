//scrollinant pasidaro menu fixed virsuje

function menuScroll(menuDate) {
    // per mobile menu, jei pasirenka, auto uzdaro ji
    document.querySelector("nav").style.height = `0px`;
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
        document.getElementsByClassName("particles-js")[0].style.height = "690px";
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
        document.getElementsByClassName("particles-js")[0].style.height = "752px";
        document.querySelector(".container>header>.menuChoices").style.marginTop = "0px";
        document.getElementsByClassName("menuChoices")[0].style.color = "#fff";
    }
    // Reikia pridet pabraukimus po pasirinkta meniu dalim !!!!!!!!!!!!
    // pabraukimas apacioj

    let lengthLinks = document.querySelectorAll(".container>header p").length;
    for (let i = 0; i < lengthLinks; i++) {
        document.querySelectorAll("nav p")[0].classList.remove("active");
    }

    // pabraukimas apacioj menu
    if (window.innerWidth > 800) {
        let totalHeightMenu = -200;


        for (let i = 0; i <= menuDate.length; i++) {
            totalHeightMenu += document.querySelectorAll(".container")[i].scrollHeight;
            // document.querySelectorAll("nav p")[i].classList.remove("active");
            if (document.body.scrollTop >= totalHeightMenu || document.documentElement.scrollTop >= totalHeightMenu) {
                let z = i - 1;
                let x = i + 1;
                if (z < 1) { z = 0 }
                if (x > menuDate.length - 2) { x = menuDate.length - 1 }
                document.querySelectorAll("nav p")[z].classList.remove("active");
                document.querySelectorAll("nav p")[x].classList.remove("active");
                document.querySelectorAll("nav p")[i].classList.add("active");
            }
        }
    }
}

export { menuScroll }