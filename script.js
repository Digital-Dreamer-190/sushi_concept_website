const searchIcon = document.querySelector(".search_icon")
const searchBox = document.querySelector(".search")
const searchBoxOpner = document.querySelector(".search_icon_opner")
const divider = document.querySelector(".divider")

searchBoxOpner.addEventListener("click", () => {
    searchBox.classList.add("active");
    searchIcon.classList.add("active");
    searchBoxOpner.classList.add("remove");
    divider.classList.add("active")
});
searchIcon.addEventListener("click", () => {
    searchBox.classList.remove("active");
    searchIcon.classList.remove("active");
    searchBoxOpner.classList.remove("remove");
    divider.classList.remove("active")
});



let calcScrollvalue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress_value");
    let progressBer = document.getElementById("progress2")
    let progressBerLeable = document.getElementById("progress_velue2")
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    progressBerLeable.innerText = scrollValue + "%";

    if(pos>100){
        scrollProgress.style.transform = "translateX(0)";
    }
    else{
        scrollProgress.style.transform = "translateX(200%)";
    };
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    }); 
    progressBer.style.width = `${scrollValue}%`;
    scrollProgress.style.background = `conic-gradient(#21243d ${scrollValue}%, #ebdaba ${scrollValue}%)`;
};


window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;

