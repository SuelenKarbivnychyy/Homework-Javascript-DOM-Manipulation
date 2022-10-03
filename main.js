'use strict';

let button = document.querySelector('.color-changer');


button.addEventListener('click', () =>  {
    let changeAllElemetsColor = document.querySelectorAll('.color-change');
    for (let element of changeAllElemetsColor) {
        element.style.color = 'red';
        console.log(element);
    }

});