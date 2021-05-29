const menu_bar = document.querySelector(".fa-bars");
const menu_list = document.querySelector(".nav-menu-list");
const menu = document.querySelector(".nav-menu");

menu_bar.addEventListener("click", () => {
    if (menu_bar.classList.contains("collapse")) {
        menu_list.classList.remove("collapse");
        menu_bar.classList.remove("collapse");
        menu.classList.remove("collapse");
    } else {
        menu_list.classList.add("collapse");
        menu_bar.classList.add("collapse");
        menu.classList.add("collapse");

    }
});