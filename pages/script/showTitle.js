export const showTitle = (element, title) => {
    const itemTitle = document.createElement('h3');
    itemTitle.classList = 'list-item__title';
    itemTitle.textContent = title;
    const span = document.createElement('span')
    span.textContent = "click for detailed information";
    itemTitle.addEventListener('click', ()=> {
        localStorage.setItem('element', JSON.stringify(element))
        location.href = './product-card.html?'
    })
    itemTitle.append(span)
    return itemTitle
}
