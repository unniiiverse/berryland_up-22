// Set id
let cartWrapper = document.querySelector('.products-cart_wrapper');
document.querySelectorAll('.products-card').forEach((el, i) => el.setAttribute('data-card-id', i));

window.addEventListener('click', (e) => {
    const self = e.target;
    let cardParent = self.closest('.products-card');
    let cartParent = self.closest('.products-cart');
    let items = [];

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
                title: cardParent.querySelector('.text-heading_2').innerText,
                price,
                sale,
                count: +sValue.innerText,
            }

            items.push(itemData);

            addItemToCart(itemData);
            updateRemoveItemBtns();
            checkCartState();
        }

        function addItemToCart(itemData) {
            const template = `
                <li class="products-cart_item" data-cartItem-id="${itemData.id}" data-cartItem-getTotal="false">
                    <button class="products-cart_remove">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 5.25L3.75 5.25001" stroke="#DD4456" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.75 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                            <path d="M14.25 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                            <path d="M8.25 2.25H15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                            <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#DD4456" stroke-width="2" stroke-linecap="round"       stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="products-cart_itemDetails">
                        <span class="text products-cart_title">${itemData.title}</span>
                        <span class="text">
                            <span class="text products-cart_count">${itemData.count}</span>
                            x
                            <span class="text products-cart_itemCost">${itemData.price}.00</span>
                        </span>
                    </div>
                </li>
            `;

            cartWrapper.insertAdjacentHTML('beforeend', template);
            updateTotal();
        }
    }
})

function updateTotal() {
    let total = 0;

    Array.from(cartWrapper.children).forEach(el => {
        total += +el.querySelector('.products-cart_count').innerText * +el.querySelector('.products-cart_itemCost').innerText;
    })

    document.querySelector('.products-cart_total').innerText = `${total}.00`;
}

function updateRemoveItemBtns() {
    document.querySelectorAll('.products-cart_remove').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.products-cart_item').remove();
            updateTotal();
            checkCartState();
        })
    })
}

function checkCartState() {
    let cart = document.querySelector('.products-cart');
    if (!cartWrapper.children.length) {
        cart.classList.remove('products-cart--hasItem');
        cart.classList.add('products-cart--empty');
    } else {
        cart.classList.remove('products-cart--empty');
        cart.classList.add('products-cart--hasItem');
    }
}

checkCartState();