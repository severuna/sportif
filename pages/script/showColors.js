const showColorItem = (color) => {
    const colorItem = document.createElement('p');
    colorItem.classList = 'container-item color-item'
    colorItem.style.backgroundColor = `${color}`;
    return colorItem
}

export const showColors = (colors) => {
    const colorsContainer = document.createElement('div');
    colorsContainer.classList = 'list-item__container flex-row';
    colors.forEach(element => {
        colorsContainer.append(showColorItem(element))
    });
    return colorsContainer
}
