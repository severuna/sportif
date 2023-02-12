export const showImg = (img) => {
    const itemImg = document.createElement('img');
    itemImg.classList = 'list-item__img'
    itemImg.src = img;
    return itemImg
}
