const HeaderNav = document.querySelector('#header-nav-2');
const hamburgerIcon = document.querySelector('.hamburger-containment');
const CloseIcon = document.querySelector('#close-icon');

hamburgerIcon.addEventListener("click", () => {
        HeaderNav.style.display = 'block';
        CloseIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
})

CloseIcon.addEventListener("click", () => {
    HeaderNav.style.display = 'none';
    CloseIcon.style.display = 'none';
    hamburgerIcon.style.display = 'flex';
})