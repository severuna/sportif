export const showAddBag = () => {
    const addBag = document.createElement('a');
    addBag.href = '#header';
    addBag.classList = 'add-bag';
    addBag.textContent = 'ADD TO CART';
    return addBag;
}
