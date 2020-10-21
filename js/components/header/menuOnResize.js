function menuOnResize() {
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
            document.querySelectorAll("nav p")[i].classList.remove("active");
        }
        document.querySelectorAll("nav p")[0].classList.add("active");
    }

}
export { menuOnResize }