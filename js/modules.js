let html = document.documentElement;
const systemTheme = window.getComputedStyle(html).content.replace(/"/g, '');
const systemLanguage = window.navigator.language;

// UVModuleAccordion() // Аккордеон
// UVModuleTabs() // Аккордеон
UVModulePopup() // Попап

"use strict"

function UVModuleAccordion() {
    const item = document.querySelector('.uv-accordion_item');

    if (item) {
        const triggers = document.querySelectorAll('.uv-accordion_trigger');
        const contents = document.querySelectorAll('.uv-accordion_content');

        triggers.forEach((el, i) => {
            el.setAttribute('id', `uv-accordion_trigger--${i}`);
            el.setAttribute('data-uv-accordion_trigger-id', `${i}`);

            // ARIA
            el.setAttribute('aria-controls', `uv-accordion_content--${i}`);
            el.setAttribute('aria-label', `Открыть ${el.querySelector('.uv-accordion_title').textContent}`);
        })

        contents.forEach((el, i) => {
            el.setAttribute('id', `uv-accordion_content--${i}`);
            el.setAttribute('data-uv-accordion_content-id', `${i}`);

            // ARIA
            el.setAttribute('aria-labledby', `uv-accordion_trigger--${i}`);
        })

        triggers.forEach(el => {
            el.addEventListener('click', e => {
                const self = e.currentTarget;
                const item = self.closest('.uv-accordion_item');
                const trigger = self.closest('.uv-accordion_trigger');
                const content = document.querySelector(`[data-uv-accordion_content-id="${self.getAttribute('data-uv-accordion_trigger-id')}"]`);

                item.classList.toggle('uv-accordion--expanded');

                if (item.classList.contains('uv-accordion--expanded')) {
                    content.style.maxHeight = content.scrollHeight + 'px';

                    // ARIA
                    trigger.setAttribute('aria-expanded', true);
                } else {
                    content.style.maxHeight = null;

                    // ARIA
                    trigger.setAttribute('aria-expanded', false);
                }
            })
        })
    }
}

function UVModuleTabs() {
    const listItems = document.querySelectorAll('.uv-tabs_item');
    const contentItems = document.querySelectorAll('.uv-tabs-content_item');

    if (listItems && contentItems) {
        listItems.forEach((el, i) => {
            el.setAttribute('id', `uv-tabs-btn--${i}`);
            el.setAttribute('data-uv-tabs-id', `${i}`);
        })

        contentItems.forEach((el, i) => {
            el.setAttribute('id', `uv-tabs-content--${i}`);
            el.setAttribute('data-uv-tabs-target', `${i}`);
        })

        listItems.forEach(el => {
            el.addEventListener('click', e => {
                const self = e.currentTarget;
                const target = document.querySelector(`[data-uv-tabs-target="${self.getAttribute('data-uv-tabs-id')}"]`)
                
                listItems.forEach(el => el.classList.remove('uv-tabs_item--active'));
                contentItems.forEach(el => el.classList.remove('uv-tabs-content_item--active'));

                self.classList.add('uv-tabs_item--active');
                target.classList.add('uv-tabs-content_item--active');
            })
        })
    }
}

function UVModulePopup() {
    const btns = document.querySelectorAll('.uv-popup_trigger');
    const popups = document.querySelectorAll('.uv-popup_item');

    if (btns && popups) {
        const container = document.querySelector('.uv-popup_container');

        function hide() {
            container.style.opacity = 0;
            container.style.visibility = 'hidden';
            container.setAttribute('aria-hidden', true);
            document.documentElement.style.overflowY = 'visible';

            popups.forEach(el => {
                el.style.opacity = 0;
                el.style.visibility = 'hidden';
                el.style.position = 'absolute';
                el.style.transform = 'scale(0)';
                el.setAttribute('aria-hidden', true);
            })
        }
        
        btns.forEach(el => {
            el.addEventListener('click', e => {
                const self = e.currentTarget;
                let btnId = self.getAttribute('data-uv-popup-id');
                
                popups.forEach(el => {
                    if (el.getAttribute('data-uv-popup-id') == btnId) {
                        el.style.opacity = 1;
                        el.style.visibility = 'visible';
                        el.style.position = 'relative';
                        el.style.transform = 'scale(1)';
                        el.setAttribute('aria-hidden', false);
                        document.documentElement.style.overflowY = 'hidden';
                    }
                })

                container.style.opacity = 1;
                container.style.visibility = 'visible';
                container.setAttribute('aria-hidden', false);

                const close = document.querySelectorAll('.uv-popup_close');

                close.forEach(el => {
                    el.addEventListener('click', () => {
                        hide();
                    })
                })
            })
        })

        container.addEventListener('click', e => {
            const self = e.target;

            if (self.classList.contains('uv-popup_container')) {
                hide();
            }
        })
    }
}