export const showTitle = (title) => {
    const itemTitle = document.createElement('h3');
    itemTitle.classList = 'list-item__title';
    itemTitle.textContent = title;
    return itemTitle
}
