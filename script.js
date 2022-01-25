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