export const hideContainer = (element, arrow) => {
    arrow.addEventListener('click', e => {
        e.preventDefault();
        element.style.display = 'none';
    })
}
