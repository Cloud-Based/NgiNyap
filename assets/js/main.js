const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#btn-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#btn-menu');

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});