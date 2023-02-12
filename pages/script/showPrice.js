export const showPrice = (price) => {
    const itemPrice = document.createElement('p');
    itemPrice.classList = 'list-item__price';
    itemPrice.textContent = 'As low as $';
    const itemPriceNum = document.createElement('span');
    itemPriceNum.textContent = price;
    itemPrice.append(itemPriceNum)
    return itemPrice
}