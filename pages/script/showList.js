import { pantsArr } from './pantsArr.js';
import { shortsArr } from './shortsArr.js';
import { shirtsArr } from './shirtsArr.js';
import { showAddBag } from './showAddBag.js';
import { showRating } from './showRating.js';
import { showImg } from './showImg.js';
import { showTitle } from './showTitle.js';
import { showPrice } from './showPrice.js';
import { showColors } from './showColors.js';
import { showSort } from './showSort.js';
import { hideContainer } from './showStyle.js';

const catalogList = document.querySelector('.catalog-list');

const showListItem = (element) => {
    const listItem = document.createElement('div');
    listItem.classList = 'list-item flex-column';
    listItem.append(showImg(element.src), showTitle(element.title), showRating(element.rating), showPrice(element.price), showColors(element.colors), showAddBag());
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
    const sizeContainer = document.getElementById('size');
    showSort(pantsArr, 'size', sizeContainer);
    const colorsContainer = document.getElementById('colors');
    showSort(pantsArr, 'colors', colorsContainer);
    showList(catalogList, pantsArr)
}

if (String(window.location.href).includes('shorts')) {
    const headLineTitle = document.querySelector('.headline-title');
    headLineTitle.innerHTML = 'SHORTS';
    const sizeContainer = document.getElementById('size');
    showSort(shortsArr, 'size', sizeContainer);
    const colorsContainer = document.getElementById('colors');
    showSort(shortsArr, 'colors', colorsContainer);
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
const sizeContainer = document.querySelector('#size');
const btnSize = document.querySelector('.item-show__size');
hideContainer(sizeContainer, btnSize);
const colorsContainer = document.querySelector('#colors');
const btnColors = document.querySelector('.item-show__colors')
hideContainer(colorsContainer, btnColors);