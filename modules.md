<div style="text-align: center;">
    <h2>Док-ция по работе с UV модулями.</h2>
</div>

<ul>
    <p>Список UV модулей:</p>
    <li><a href="#anchor-MOD-accordion">Аккордеон</a></li>    
    <li><a href="#anchor-MOD-tabs">Табы</a></li>    
    <li><a href="#anchor-MOD-popup">Попап</a></li>
</ul>

<h2 align="center" style="padding: 0; margin: 0; margin-bottom: 32px;" id="anchor-MOD-accordion">Аккордеон v1.1.3</h1>
Aria-доступный модуль аккордеона. <br>
<a href="https://codepen.io/unniiiverse/pen/BaYgRxp">Аккордеон в codepen</a>

<h2>JS Конфигурация</h2>

```javascript
    UVModuleAccordion() // Инициализация модуля в JS
```

<h2>HTML Код</h2>

```
<ul class="uv-accordion_list">
    <li class="uv-accordion_item">
        <button class="uv-accordion_trigger" id="" aria-controls="" aria-label="" aria-expanded="false">
            <p class="uv-accordion_text uv-accordion_title">Accordion Title</p>
            <svg class="uv-accordion_icon" width="25" height="25" viewBox="0 0 25 25" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_597_46)">
                    <path
                        d="M12.9706 0.970566C10.5972 0.970566 8.2771 1.67435 6.30371 2.99293C4.33032 4.31151 2.79225 6.18565 1.884 8.37836C0.97575 10.5711 0.73811 12.9839 1.20113 15.3116C1.66416 17.6394 2.80704 19.7776 4.48527 21.4558C6.1635 23.1341 8.3017 24.277 10.6295 24.74C12.9572 25.203 15.37 24.9654 17.5628 24.0571C19.7555 23.1489 21.6296 21.6108 22.9482 19.6374C24.2668 17.664 24.9706 15.3439 24.9706 12.9706C24.9671 9.78903 23.7017 6.73881 21.452 4.48912C19.2023 2.23944 16.1521 0.97404 12.9706 0.970566V0.970566ZM12.9706 23.8456C10.8197 23.8456 8.71711 23.2078 6.92873 22.0128C5.14035 20.8178 3.74647 19.1194 2.92337 17.1322C2.10026 15.1451 1.8849 12.9585 2.30452 10.849C2.72413 8.73942 3.75987 6.80168 5.28077 5.28078C6.80167 3.75988 8.73941 2.72414 10.8489 2.30453C12.9585 1.88491 15.1451 2.10027 17.1322 2.92338C19.1194 3.74648 20.8178 5.14035 22.0128 6.92874C23.2077 8.71712 23.8456 10.8197 23.8456 12.9706C23.8421 15.8537 22.6952 18.6178 20.6565 20.6565C18.6178 22.6952 15.8537 23.8421 12.9706 23.8456Z"
                            fill="black" />
                        <path
                            d="M18.2431 7.68119C18.1376 7.57585 17.9947 7.51668 17.8456 7.51668C17.6965 7.51668 17.5536 7.57585 17.4481 7.68119L12.9706 12.1737L8.49496 7.67369C8.38929 7.56802 8.24597 7.50865 8.09653 7.50865C7.94708 7.50865 7.80376 7.56802 7.69809 7.67369C7.59242 7.77936 7.53305 7.92268 7.53305 8.07213C7.53305 8.22157 7.59242 8.36489 7.69809 8.47056L12.1756 12.9706L7.69809 17.4706C7.59267 17.5762 7.53354 17.7195 7.53371 17.8687C7.53389 18.018 7.59335 18.1611 7.69903 18.2665C7.8047 18.3719 7.94792 18.4311 8.09719 18.4309C8.24646 18.4307 8.38954 18.3712 8.49496 18.2656L12.9706 13.7674L17.4481 18.2674C17.5538 18.3731 17.6971 18.4325 17.8465 18.4325C17.996 18.4325 18.1393 18.3731 18.245 18.2674C18.3506 18.1618 18.41 18.0184 18.41 17.869C18.41 17.7196 18.3506 17.5762 18.245 17.4706L13.7656 12.9706L18.245 8.47056C18.3483 8.36509 18.4061 8.22318 18.4057 8.07549C18.4054 7.9278 18.347 7.78617 18.2431 7.68119Z"
                        fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_597_46">
                        <rect width="24" height="24" fill="white" transform="translate(0.970581 0.970566)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
        <div class="uv-accordion_content" id="" aria-labelledby="" role="region">
            <p class="uv-accordion_text">Accordion Content</p>
        </div>
    </li>
</ul>
```

<p style="margin: 32px;"></p>
uv-accordion by unniiiverse © 2022
<br><br><br><br><br><br>

<h2 align="center" style="padding: 0; margin: 0; margin-bottom: 32px;" id="anchor-MOD-tabs">Табы v1.1.1</h1>
<p>Модуль aria-доступных табов.</p>

<h2>JS Конфигурация</h2>

```javascript
    UVModuleTabs() // Инициализация модуля в js;
```

<h2>HTML Код</h2>

```
<ul class="uv-tabs_list">
    <li class="uv-tabs_item uv-tabs_item--active">
        <button class="uv-tabs_button" data-uv-tabs-id="">
            <p class="uv-tabs_text">TAB #1</p>
        </button>
    </li>
    <li class="uv-tabs_item">
        <button class="uv-tabs_button" data-uv-tabs-id="">
            <p class="uv-tabs_text">TAB #2</p>
        </button>
    </li>
</ul>

<ul class="uv-tabs_content">
    <li class="uv-tabs-content_item uv-tabs-content_item--active" data-uv-tabs-target="">
        <p>Lorem ipsum dolor sit amet.</p>
    </li>
    <li class="uv-tabs-content_item" data-uv-tabs-target="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit!</p>
    </li>
</ul>
```

<p style="margin: 32px;"></p>
uv-tabs v1.1.1 by unniiiverse © 2022
<br><br><br><br><br><br>

<h2 align="center" style="padding: 0; margin: 0; margin-bottom: 32px;" id="anchor-MOD-popup">Попап v1.1.2</h1>
<p>Aria-доступный модуль поп-апа.</p>
<a href="https://codepen.io/unniiiverse/pen/GRxEXwq" target="_blank">Попап в codepen</a>

<h2>JS Конфигурация</h2>

```javascript
    UVModulePopup() // Функция инициализации модуля поп-апов.;
```

<h2>HTML Код</h2>

```
<!-- Trigger -->
<button class="uv-popup_trigger" data-uv-popup-id="" aria-label="Открыть попап" aria-haspopup="true">Триггер</button>

<div class="uv-popup_container" aria-hidden="true">
    <!-- Item -->
    <div class="uv-popup_item" aria-hidden="true" aria-label="Попап" data-uv-popup-id="">
        <div class="uv-popup_top">
            <span>Title</span>
            <button class="uv-popup_cross uv-popup_close" aria-label="Закрыть попап">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.12134" y="3" width="32" height="3" rx="1.5" transform="rotate(45 6.12134 3)"
                        fill="#222222" />
                    <rect x="4.12134" y="26" width="32" height="3" rx="1.5" transform="rotate(-45 4.12134 26)"
                        fill="#222222" />
                </svg>
            </button>
        </div>
        <div class="uv-popup_content">
            
        </div>
        <span class="uv-popup_line"></span>
        <div class="uv-popup_bottom">
            <button class="uv-popup_button uv-popup_close" aria-label="Закрыть попап">
                <span>Got it!</span>
            </button>
        </div>
    </div>
</div>
```

<p style="margin: 32px;"></p>
uv-popup by unniiiverse © 2022
<br><br><br><br><br><br>