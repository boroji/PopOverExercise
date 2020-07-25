/* 
************************************
Table of Content
(1) - Custom Checkbox Toggle
(2) - Checkbox Hide
(3) - Checkbox Checked
(4) - Pop Over after 3 seconds
(5) - Pop Over Close function
(6) - Click event and keyboard accessibility
(7) - Simple Parallex
************************************
*/

//  (1) - Custom Checkbox Toggle
const checkbox = document.querySelector('.custom-checkbox');
const checked = document.querySelector('.custom-checked');

//  (2) - Checkbox Hide
checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})

//  (3) - Checkbox Checked
checked.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})

//  (4) - Pop Over after 3 seconds
const popOver = document.querySelector('.pop-over');
const wrapper = document.querySelector('.wrapper');
const overlay = document.querySelector('.overlay');

setTimeout(() => {
    popOver.classList.add('visible');
    overlay.classList.add('visible');
}, 3000);

//  (5) - Pop Over Close function
function modalClose() {
    popOver.classList.add('close')
    overlay.classList.add('close')
    setTimeout(() => {
        // Take the wrapper out of document flow after 1.2s delay
        wrapper.style.display = 'none';
        overlay.style.display = 'none';
    }, 1200);
}

//  (6) - Click event and keyboard accessibility
const btn = document.querySelector('.close-button')
btn.addEventListener('click', () => {
    modalClose();
})

// Closing X button using enter keyboard
btn.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        modalClose();
    }
})

// Closing Modal using 'esc' button
popOver.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        modalClose();
    }
})

//  (7) - Simple Parallex
const shavingCream = document.querySelector('.shaving-cream');
const knife = document.querySelector('.knife');

window.addEventListener('scroll', () => {
    const scrollBar = window.scrollY;
    const up = scrollBar * -0.5 + 'px';
    const down = scrollBar * 0.5 + 'px';
    knife.style.transform = `translateY(${up})`;
    shavingCream.style.transform = `translateY(${down})`;
})
