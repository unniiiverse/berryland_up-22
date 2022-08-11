// Set id
document.querySelectorAll('.products-card').forEach((el, i) => el.setAttribute('data-card-id', i));

window.addEventListener('click', (e) => {
    const self = e.target;
    let cardParent = self.closest('.products-card');

    if (cardParent) {
        // Stepper
        let stepper = cardParent.querySelector('.products-card_counter');
        let sRemove = stepper.querySelector('.products-card_remove');
        let sValue = stepper.querySelector('.products-card_value');
        let sAdd = stepper.querySelector('.products-card_add');

        if (self === sRemove) {
            if (sValue.innerText != 1) {
                sValue.innerText--;
            } else {
                console.warn('Нельзя выбрать меньше 1го товара!');
            }
        } else if (self === sAdd) {
            sValue.innerText++;
        }

        // Add to cart
        let toCart = cardParent.querySelector('.products-card_addToCart');

        if (self === toCart) {
            let price;
            let sale;

            if (!cardParent.classList.contains('products-card--sale')) {
                price = +cardParent.querySelector('.products-card_cost').innerText;
                sale = false;
            } else {
                price = +cardParent.querySelector('.products-card_sale').innerText;
                sale = true;
            }

            let itemData = {
                id: +cardParent.getAttribute('data-card-id'),
                timestamp: new Date().getTime(),
                title: cardParent.querySelector('.text-heading_2').innerText,
                price,
                sale,
                count: +sValue.innerText,
            }

            localStorage.setItem('newItem', null);
            localStorage.setItem('newItem', JSON.stringify(itemData));

            addNewItem();
            sValue.innerText = 1;
        }
    }
})

function addNewItem() {
    let productsCartWrapper = document.querySelector('.products-cart_wrapper');
    let mobileCartWrapper = document.querySelector('.mobile-cart_wrapper');
    let wrapper;

    addNewItemToCarts('products');
    addNewItemToCarts('mobile');
    updateCartState();
    updateTotal();
    updateRemoveBtns();

    function addNewItemToCarts(list) {
        let data = JSON.parse(localStorage.getItem('newItem'));
        wrapper = document.querySelector(`.${list}-cart_wrapper`);

        const template = `
            <li class="${list}-cart_item" data-cart-timestamp="${data.timestamp}">
                <button class="${list}-cart_remove">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.25 5.25L3.75 5.25001" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.25 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.25 2.25H15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
                            stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                        
                <div class="${list}-cart_itemDetails">
                    <span class="text ${list}-cart_title">${data.title}</span>
                    <span class="text">
                        <span class="text ${list}-cart_count">${data.count}</span>
                        x
                        <span class="text ${list}-cart_itemCost">${data.price}.00</span>
                    </span>
                </div>
            </li>
        `;

        wrapper.insertAdjacentHTML('beforeend', template);
    }

    function updateCartState() {
        if (productsCartWrapper.childElementCount != 0) {
            document.querySelector('.products-cart').classList.add('products-cart--hasItem');
            document.querySelector('.mobile-cart').classList.add('mobile-cart--hasItem');
            document.querySelector('.uv-popup_trigger--badge').innerText = productsCartWrapper.childElementCount;
        } else {
            document.querySelector('.products-cart').classList.remove('products-cart--hasItem');
            document.querySelector('.mobile-cart').classList.remove('mobile-cart--hasItem');
        }
    }

    function updateTotal() {
        let total = 0;

        Array.from(productsCartWrapper.children).forEach(el => {
            total += +el.querySelector('.products-cart_count').innerText * +el.querySelector('.products-cart_itemCost').innerText;
        })

        document.querySelector('.products-cart_total').innerText = `${total}.00`;
        document.querySelector('.mobile-cart_total').innerText = `${total}.00`;
    }

    function updateRemoveBtns() {
        updateRemoveBtnsCustom('products', productsCartWrapper);
        updateRemoveBtnsCustom('mobile', mobileCartWrapper);

        function updateRemoveBtnsCustom(list, wrapper) {
            document.querySelectorAll(`.${list}-cart_remove`).forEach(el => {
                el.addEventListener('click', (e) => {
                    let timestamp = e.currentTarget.closest(`.${list}-cart_item`).getAttribute('data-cart-timestamp');

                    Array.from(wrapper.children).forEach(el => {
                        document.querySelectorAll(`[data-cart-timestamp="${timestamp}"]`).forEach(el => el.remove())
                        document.querySelector('.uv-popup_trigger--badge').innerText = productsCartWrapper.childElementCount;
                        updateCartState();
                        updateTotal();
                    })
                })
            })
        }
    }
}

// filter
const filterBtns = document.querySelectorAll('.main-filter_item');
const filterItems = document.querySelectorAll('.products-card');

filterBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        let target = el.getAttribute('data-filter-target');

        filterBtns.forEach(el => el.classList.remove('main-filter_item--current'));
        e.currentTarget.classList.add('main-filter_item--current');

        filterItems.forEach(el => {
            if (target === el.getAttribute('data-filter-category') || target === 'all') {
                el.style.opacity = 1;
                el.style.position = 'relative';
                el.style.visibility = 'visible';
            } else {
                el.style.opacity = 0;
                el.style.position = 'absolute';
                el.style.visibility = 'hidden';
            }
        })
    })
})

