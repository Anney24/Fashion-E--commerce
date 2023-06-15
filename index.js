let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".nav-bar");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("bx-x")
    navList.classList.toggle('active')
})

window.onscroll =  ()=>{
    menu.classList.remove("bx-x")
    navList.classList.remove("active")
}