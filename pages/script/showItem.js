import { showAddBag } from './showAddBag.js';
import { showRating } from './showRating.js';
import { showImg } from './showImg.js';
import { showTitle } from './showTitle.js';
import { showPrice } from './showPrice.js';
import { showColors } from './showColors.js';

export const showItem = (element) => {
    const listItem = document.createElement('div');
    listItem.classList = 'list-item flex-column';
    listItem.append(showImg(element.src), showTitle(element.title), showRating(element.rating), showPrice(element.price), showColors(element.colors), showAddBag());
    return listItem
}
