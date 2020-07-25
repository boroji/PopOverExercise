//  () - Custom Checkbox Toggle
const checkbox = document.querySelector('.custom-checkbox');
const checked = document.querySelector('.custom-checked');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})

checked.addEventListener('click', () => {
    checkbox.classList.toggle('hide')
    checked.classList.toggle('hide')
})