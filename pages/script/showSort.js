let controlArr = [];

const showSortItemColors = (el) => {
    const sortItem = document.createElement('div');
    sortItem.style.backgroundColor = el;
    sortItem.classList = 'container-item';
    return sortItem;
}

const showSortItemSize = (el) => {
    const sortItem = document.createElement('div');
    sortItem.textContent = el;
    sortItem.classList = 'container-item';
    return sortItem;
}

export const showSort = (arr, data, container) => {
    arr.forEach(el => {
        controlArr = el[data].filter(function(element, index, array) {
            if (array.lastIndexOf(element) == index) return element
          })
    });
    if (data === 'size') {
        controlArr.forEach(element => {
            container.append(showSortItemSize(element))
        })
    }
    if (data === 'colors') {
        controlArr.forEach(element => {
            container.append(showSortItemColors(element))
        })
    }
    return container
}