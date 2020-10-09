// scrollinimas iki nustatyto aukscio
function scrollUp(x) {
    window.scrollTo(0, x);
}

window.onscroll = function() {
    // jei nenuscrolinta
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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


    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.querySelectorAll(".container>header p")[0].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        document.querySelectorAll(".container>header p")[1].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.querySelectorAll(".container>header p")[2].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.querySelectorAll(".container>header p")[3].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.querySelectorAll(".container>header p")[4].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelectorAll(".container>header p")[5].style.borderBottom = "solid 2px #000000";
    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        document.querySelectorAll(".container>header p")[6].style.borderBottom = "solid 2px #ffffff";
    }
};