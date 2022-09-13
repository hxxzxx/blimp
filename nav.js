
window.onscroll = () => {
    const nav_bar = document.querySelector("#nav");

    if(window.scrollY >= 250) {
        nav_bar.style.color ="rgb(87, 86, 86)";
        nav_bar.style.filter="blur(5px)";
    }
    else {
        nav_bar.style.color ="white";
        nav_bar.style.filter="blur(0px)";

    }

}