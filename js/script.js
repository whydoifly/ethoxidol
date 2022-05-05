// Функционал аккордеона
const accordionTriggers = document.querySelectorAll('.accordion__item--trigger');
const accordionPanels = document.querySelectorAll('.accordion__item--panel');

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', expandAccordion);
});

function expandAccordion(event) {
    const { target: targetElement } = event;
    const isPanelExpanded = targetElement.getAttribute('aria-expanded');
    
    collapseAllAccordions();
    
    if (isPanelExpanded === "false") {
        targetElement.setAttribute('aria-expanded', true);
        for (let trigger of accordionTriggers) {
            trigger.style.borderBottom = '1px solid #8b91a2';
        }
        targetElement.style.borderBottom = 'none';
        for (let panel of accordionPanels) {
            panel.style.borderBottom = '1px solid #8b91a2';
        }

    } else {
        targetElement.setAttribute('aria-expanded', false);
        targetElement.style.borderBottom = '1px solid #8b91a2';
    }
}

function collapseAllAccordions() {
    accordionTriggers.forEach((trigger) => {
        trigger.setAttribute('aria-expanded', false);
    });
    
}


// Функционал бургер-меню
let burgerImg = document.querySelector('.mobile-burger-img');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link_a');
let docBody = document.querySelector('body');

burgerImg.addEventListener('click', () => {
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
        burgerImg.src = '/img/icons/burger-cross.svg';
        docBody.style.overflow = 'hidden';
    } else {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    }
});

for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    })
}

// Модальное окно с подтверждением специалиста здравоохранения
document.addEventListener('DOMContentLoaded', () => {
    let modal = document.querySelector('.modal');
    let confirmModalBtn = document.querySelector('.confirm-modal');

    docBody.classList.add('modal-open');
    modal.classList.add('show');
    modal.style.display = 'block';

    confirmModalBtn.addEventListener('click', () => {
        docBody.classList.remove('modal-open');
        modal.classList.remove('show');
        modal.style.display = 'none';
    })
});