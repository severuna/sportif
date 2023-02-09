let controlArrSize = [];
let controlArrColor = [];

const calcArr = (item, value) => {
    item.addEventListener('click', e => {
        e.preventDefault();
        if (value === 'colors') {
            console.log(item.style.backgroundColor)
        }
        if (value === 'size') {
            console.log(item.textContent)
        }
    })
}
const showSortItemColors = (el) => {
    const sortItem = document.createElement('div');
    sortItem.style.backgroundColor = el;
    calcArr(sortItem, 'colors');
    sortItem.classList = 'container-item';
    return sortItem;
}

const showSortItemSize = (el) => {
    const sortItem = document.createElement('div');
    sortItem.textContent = el;
    calcArr(sortItem, 'size');
    sortItem.classList = 'container-item';
    return sortItem;
}

export const showSort = (arr, data, container) => {
    if (data === 'size') {
        arr.forEach(el => {
            el[data].forEach(field => {
                if (!controlArrSize.includes(field)) {
                    controlArrSize.push(field)
                }
            })
        });
        controlArrSize.forEach(element => {
            container.append(showSortItemSize(element))
        })
    }
    if (data === 'colors') {
        arr.forEach(el => {
            el[data].forEach(field => {
                if (!controlArrColor.includes(field)) {
                    controlArrColor.push(field)
                }
            })
        });
        controlArrColor.forEach(element => {
            container.append(showSortItemColors(element))
        })
    }
    return container
}