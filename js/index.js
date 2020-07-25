//  () - Custom Checkbox Toggle
const checkbox = document.querySelector('.custom-checkbox');
const checked = document.querySelector('.custom-checked');

//  () - Checkbox Hide
checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})

//  () - Checkbox Checked
checked.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})

//  () - Pop Over 3 seconds
const popOver = document.querySelector('.pop-over');
const wrapper = document.querySelector('.wrapper');

setTimeout(() => {
    popOver.classList.add('visible');
}, 3000);

//  () - Close button trigger
const btn = document.querySelector('.close-button')

btn.addEventListener('click', () => {
    popOver.classList.add('close')
    setTimeout(() => {
        // Take the wrapper out of document flow after 1.2s delay
        wrapper.style.display = 'none';
    }, 1200);
})

//  () - Simple Parallex