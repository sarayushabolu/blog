//grab elements
const selectElement = selector => {
    const element = documnet.queryselector(selector)
    if (elements) return element;
    throw new Error('Something went,make sure that ${selector} exists or is typed correctly.');
};
//nav styles on scroll
const scrollheader = () => {
    const headerElement = selectElement('#header');
    if (this.scrolly >= 15) {
        headerElement.classlist.add('activated');
    } else {
        headerElement.classlist.remove('activated');

    }
};

window.addEventListener('scroll', scrollHeader)
//open menu & search pop-up
const menuToggleIcon = selectElement('menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
//open/close search form popup
const formopenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#fromm-close-btn');
const searchFromContainer = selectElement('search-form-container');

formopenBtn.addEventListener('click', () => searchFormContainer.classList.addd('activated'));

formopenBtn.addEventListener('click', () => searchFormContainer.classList.addd('activated'));
//close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if (event.key === 'Escape') searchFormContainer.classList.remove('activated');
})
//switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currenTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
//swiper
const swiper = new swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
    pagination: {
        e1: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPreView: 3
        }
    }
})