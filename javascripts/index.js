const mobile_toggle = document.querySelector('#navigation_toggle');
const mobile_list = document.querySelector('#mobile_navigation_list');

let isOpenToggle = false;

const openToogle = () => {
    isOpenToggle = true;
    mobile_list.style.display = 'flex';
}
const closeToogle = () => {
    isOpenToggle = false;
    mobile_list.style.display = 'none';
}

mobile_toggle.addEventListener('click', () => {
    isOpenToggle ? closeToogle() : openToogle();
})

