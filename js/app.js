// Set id
let items = [];
document.querySelectorAll('.products-card').forEach((el, i) => el.setAttribute('data-card-id', i));

window.addEventListener('click', (e) => {
    const self = e.target;
    let cardParent = self.closest('.products-card');

    if (cardParent) {
        // Stepper
        let stepper = cardParent.querySelector('.products-card_counter');
        let stepperValue = stepper.querySelector('.products-card_value');

        if (self === stepper.querySelector('.products-card_add')) {
            stepperValue.innerText++;
        } else if (self === stepper.querySelector('.products-card_remove')) {
            if (stepperValue.innerText != 1) {
                stepperValue.innerText--;
            } else {
                console.warn('Нельзя выбрать меньше 1го товара!')
            }
        }

        // Get price
        let price;
        let sale;

        if (!cardParent.classList.contains('products-card--sale')) {
            price = cardParent.querySelector('.products-card_cost').innerText;
            sale = false;
        } else {
            price = cardParent.querySelector('.products-card_sale').innerText;
            sale = true;
        }

        // Add to cart
        let toCart = cardParent.querySelector('.products-card_addToCart');

        if (self === toCart) {
            let id = +cardParent.getAttribute('data-card-id');

            let data = {
                id,
                title: cardParent.querySelector('.text-heading_2').innerText,
                img: cardParent.querySelector('img').getAttribute('src'),
                price: +price,
                isSale: sale,
                count: +stepperValue.innerText,
            }
            
            items.push(data);
            stepperValue.innerText = 1;
        }

        // Get total
        function getTotal() {
            let totalPrice = [];
            let total;

            items.forEach(el => totalPrice.push(el.price * el.count));
            total = totalPrice.reduce((prev, curr) => {
                return prev + curr;
            }, 0)

            return total;
        }

        // Set data in local storage
        if (self === toCart) {
            localStorage.removeItem('itemsData');
            localStorage.setItem('itemsData', JSON.stringify(items));
        }

    }

    // Desktop cart

    let cartParent = self.closest('.products-cart');

    if (cartParent) {
        console.log('cart!')
    }
})