//!--------------------TABS--------------------

let tabsLinks = document.querySelectorAll('.tabs__link');
let tabsCards = document.querySelectorAll('.tabs__cards');

if (tabsLinks.length === tabsCards.length && (tabsLinks.length && tabsCards.length > 0)) {
    tabsLinks[2].classList.add('active');
    tabsCards[2].classList.add('active');
    tabsCards[2].classList.add('visible');
    for (let i = 0; i < tabsLinks.length, i < tabsCards.length; i++) {
        tabsLinks[i].addEventListener('click', (event) => {
            event.preventDefault();
            for (let j = 0; j < tabsCards.length, j < tabsLinks.length; j++) {
                tabsCards[i].classList.remove('visible');
                if (tabsCards[j].classList.contains('active')) {
                    tabsCards[j].classList.remove('active')
                }
                if (tabsLinks[j].classList.contains('active')) {
                    tabsLinks[j].classList.remove('active')
                }
            }
            tabsLinks[i].classList.add('active');
            tabsCards[i].classList.add('active');
            setTimeout(() => {
                tabsCards[i].classList.add('visible');
            }, 10);
        });
    }
}

//!--------------------SCROLL-BUTTON--------------------

let arrowToTop = document.querySelector('.arrow-to-top');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight / 3) {
        arrowToTop.classList.add('active');
        arrowToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            })
        })
    }
    else {
        arrowToTop.classList.remove('active');
    }
});

//!--------------------HIDE-PLACEHOLDER--------------------

let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let placeholder = input.placeholder;
    input.addEventListener('focus', () => {
        input.placeholder = "";
    })
    input.addEventListener('blur', () => {
        input.placeholder = placeholder;
    })
}

//!--------------------FORM-CHECK--------------------

let form_containers = document.querySelectorAll('[data-form = "true"]');
let checkFormsButtons = document.querySelectorAll('._form-check-button');

if (checkFormsButtons.length > 0) {
    for (let i = 0; i < checkFormsButtons.length; i++) {
        const button = checkFormsButtons[i];
        button.addEventListener('click', (e) => {
            let previousInput = button.previousElementSibling;
            let lisenceCheckbox = form_containers[i].querySelector('input[type = "checkbox"]');
            let errorMessage = form_containers[i].querySelector('.error');
            if (previousInput.classList.contains('_form-check')) {
                let val = previousInput.value;
                let regExp = /\d{12}/;
                if (val.length !== 12 || !regExp.test(val)) {
                    e.preventDefault();
                    previousInput.focus();
                    previousInput.classList.add('active');
                    previousInput.addEventListener('focus', () => {
                        previousInput.classList.remove('active');
                    });
                    previousInput.addEventListener('blur', () => {
                        previousInput.classList.remove('active');
                    });
                }
                if (!lisenceCheckbox.checked) {
                    e.preventDefault();
                    errorMessage.classList.add('active');
                }
                lisenceCheckbox.addEventListener('click', () => {
                    if (lisenceCheckbox.checked) {
                        errorMessage.classList.remove('active');
                    }
                    else {
                        errorMessage.classList.add('active');
                    }
                });
            }
        });
    }
}

//!--------------------SCROLL-TO-ELEMENT--------------------

let scrollToBtns = document.querySelectorAll('.scrollToElement');
for (let i = 0; i < scrollToBtns.length; i++) {
    const button = scrollToBtns[i];
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.getAttribute('data-selector')) {
            let selector = button.dataset.selector;
            let el = document.querySelector(selector);
            let coordinate = el.getBoundingClientRect().top + pageYOffset - 10;
            window.scrollTo({
                top: coordinate,
                behavior: 'smooth',
            });
        }
    });
}

//!--------------------TABS--------------------

let demonstrationLinks = document.querySelectorAll('.demonstration__item');
let demonstrationCards = document.querySelectorAll('.demonstration__block');

if (demonstrationLinks.length === demonstrationCards.length && (demonstrationLinks.length && demonstrationCards.length > 0)) {
    demonstrationLinks[0].classList.add('active');
    demonstrationCards[0].classList.add('active');
    demonstrationCards[0].classList.add('visible');
    for (let i = 0; i < demonstrationLinks.length, i < demonstrationCards.length; i++) {
        demonstrationLinks[i].addEventListener('click', () => {
            for (let j = 0; j < demonstrationCards.length, j < demonstrationLinks.length; j++) {
                if (demonstrationCards[j].classList.contains('active')) {
                    demonstrationCards[j].classList.remove('active')
                }
                if (demonstrationLinks[j].classList.contains('active')) {
                    demonstrationLinks[j].classList.remove('active')
                }
            }
            demonstrationLinks[i].classList.add('active');
            demonstrationCards[i].classList.add('active');
        });
    }
}