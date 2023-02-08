let controlArr = [];

export const showSort = (arr, data) => {
    arr.forEach(el => {
        controlArr = el[data].filter(function(element, index, array) {
            if (array.lastIndexOf(element) == index) return element
          })
    });
    return controlArr;
}