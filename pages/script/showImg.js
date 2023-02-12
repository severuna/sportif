export const showListItemImg = (img) => {
    const listItemImg = document.createElement('img');
    listItemImg.classList = 'list-item__img'
    listItemImg.src = img;
    return listItemImg
}
