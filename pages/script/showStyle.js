export const hideContainer = (element, arrow) => {
    arrow.addEventListener('click', e => {
        e.preventDefault();
        arrow.classList.toggle('revert');
        element.classList.toggle('none');
    })
}
