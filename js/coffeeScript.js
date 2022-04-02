let navbar = document.querySelector('.navbar');
document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchBar = document.querySelector('.search-form');
document.getElementById('search-btn').onclick = () => {
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.getElementById('cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
}