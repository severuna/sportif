export const hideContainer = (element, arrow) => {
    arrow.addEventListener('click', e => {
        e.preventDefault();
        element.classList.toggle('none');
    })
}
