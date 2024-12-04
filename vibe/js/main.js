const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')


btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modal.classList.remove('modal--open') && modal.classList.contains('modal--open')
    }
})

const btnC = document.querySelector('.modal__btn-complete')
const modalC = document.querySelector('.modal__complete')

btnC.addEventListener('click', () => {
    modalC.classList.add('modal__complete--open')
})

modalC.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal__complete') || target.classList.contains('modal__close-btn')) {
        modalC.classList.remove('modal__complete--open')
        modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modalC.classList.remove('modal__complete--open') && modal.classList.contains('modal__complete--open')
    }
})


const tabControls = document.querySelector('.tab-conrols')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-conrols__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-conrols__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-conrols__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-conrols__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-conrols__link--active')
    tabContent.classList.add('tab-content--show')

}



// Аккордеон

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });



});


var swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
});





