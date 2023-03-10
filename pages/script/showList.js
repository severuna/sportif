import { pantsArr } from './data/pantsArr.js';
import { shirtsArr } from './data/shirtsArr.js';
import { shortsArr } from './data/shortsArr.js';
import { showItem } from './showItem.js';
import { showSort } from './showSort.js';
import { hideContainer } from './showStyle.js';

const catalogList = document.querySelector('.catalog-list');

const showList = (container, arr) => {
    arr.forEach(element => {
        container.append(showItem(element))
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