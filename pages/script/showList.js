import { pantsArr } from './pantsArr.js';
import { shortsArr } from './shortsArr.js';
import { shirtsArr } from './shirtsArr.js';
import { showSort } from './showSort.js';
import { hideContainer } from './showStyle.js';

const catalogList = document.querySelector('.catalog-list');

const showAddBag = () => {
    const addBag = document.createElement('a');
    addBag.href = '#header';
    addBag.classList = 'add-bag';
    addBag.textContent = 'ADD TO CART';
    return addBag;
}

const showListItemRating = (rating) => {
    const listItemRating = document.createElement('div');
    listItemRating.classList = 'list-item__rating flex-row';
    const gold = Number(rating);
    const gray = 5 - Number(rating);
    for (let i = 0; i < gold; i++) {
        const goldRatingItem = document.createElement('img');
        goldRatingItem.src = './images/star_gold.svg';
        listItemRating.append(goldRatingItem)
    }
    for (let i = 0; i < gray; i++) {
        const grayRatingItem = document.createElement('img');
        grayRatingItem.src = './images/star_gray.svg';
        listItemRating.append(grayRatingItem)
    }
    return listItemRating
}

const showListItemPrice = (price) => {
    const listItemPrice = document.createElement('p');
    listItemPrice.classList = 'list-item__price';
    listItemPrice.textContent = 'As low as $';
    const priceItem = document.createElement('span');
    priceItem.textContent = price;
    listItemPrice.append(priceItem)
    return listItemPrice
}

const showColorItem = (color) => {
    const colorItem = document.createElement('p');
    colorItem.classList = 'container-item color-item'
    colorItem.style.backgroundColor = `${color}`;
    return colorItem
}

const showListItemColors = (colors) => {
    const colorsContainer = document.createElement('div');
    colorsContainer.classList = 'list-item__container flex-row';
    colors.forEach(element => {
        colorsContainer.append(showColorItem(element))
    });
    return colorsContainer
}

const showListItemTitle = (title) => {
    const listItemTitle = document.createElement('h3');
    listItemTitle.classList = 'list-item__title';
    listItemTitle.textContent = title;
    return listItemTitle
}

const showListItemImg = (img) => {
    const listItemImg = document.createElement('img');
    listItemImg.classList = 'list-item__img'
    listItemImg.src = img;
    return listItemImg
}

const showListItem = (element) => {
    const listItem = document.createElement('div');
    listItem.classList = 'list-item flex-column';
    listItem.append(showListItemImg(element.src), showListItemTitle(element.title), showListItemRating(element.rating), showListItemPrice(element.price), showListItemColors(element.colors), showAddBag());
    return listItem
}

const showList = (container, arr) => {
    arr.forEach(element => {
        container.append(showListItem(element))
    });
    return container
}


if (String(window.location.href).includes('pants')) {
    const headLineTitle = document.querySelector('.headline-title');
    headLineTitle.innerHTML = 'PANTS';
    showList(catalogList, pantsArr)
}

if (String(window.location.href).includes('shorts')) {
    const headLineTitle = document.querySelector('.headline-title');
    headLineTitle.innerHTML = 'SHORTS';
    showList(catalogList, shortsArr)
}

if (String(window.location.href).includes('shirts')) {
    const headLineTitle = document.querySelector('.headline-title');
    headLineTitle.innerHTML = 'SHIRTS';
    const sizeContainer = document.getElementById('size');
    showSort(shirtsArr, 'size', sizeContainer);
    const colorsContainer = document.getElementById('colors');
    showSort(shirtsArr, 'colors', colorsContainer);
    showList(catalogList, shirtsArr)
}
let cont = document.querySelector('#size');
let btns = document.querySelector('.item-show')
hideContainer(cont, btns);