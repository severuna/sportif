let controlArr = [];

export const showSort = (arr) => {
    arr.forEach(уel => {
        controlArr = уel.colors.filter(function(element, index, array) {
            if (array.lastIndexOf(element) == index) return element
          })
    });
    return controlArr;
}