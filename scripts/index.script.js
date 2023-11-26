/* Scroll Bar Down */
window.addEventListener("scroll", function(){
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("down_scroll", window.scrollY>0);
})

