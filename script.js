const menu = document.querySelector("menu");
const nav = document.querySelector(".Links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}