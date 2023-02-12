export const showRating = (rating) => {
    const listRating = document.createElement('div');
    listRating.classList = 'list-item__rating flex-row';
    const gold = Number(rating);
    const gray = 5 - Number(rating);
    for (let i = 0; i < gold; i++) {
        const goldRating = document.createElement('img');
        goldRating.src = './images/star_gold.svg';
        listRating.append(goldRating)
    }
    for (let i = 0; i < gray; i++) {
        const grayRating = document.createElement('img');
        grayRating.src = './images/star_gray.svg';
        listRating.append(grayRating)
    }
    return listRating
}