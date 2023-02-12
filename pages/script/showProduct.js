const product = JSON.parse(localStorage.element);

const showSize = (size) => {
    const productSizeContainer = document.querySelector('#size');
    size.forEach(el => {
        const productSize = document.createElement('div');
        productSize.classList = 'container-item';
        productSize.textContent = el;
        productSizeContainer.append(productSize)
    })
    return productSizeContainer
}

const showColorItem = (color) => {
    const colorItem = document.createElement('p');
    colorItem.classList = 'container-item color-item'
    colorItem.style.backgroundColor = `${color}`;
    return colorItem
}

const showColors = (colors) => {
    const colorsContainer = document.querySelector('#colors');
    colors.forEach(element => {
        colorsContainer.append(showColorItem(element))
    });
    return colorsContainer
}


const showPrice = (price) => {
    const productPriceContainer = document.querySelector('.product-info__price');
    const productPrice = document.createElement('span');
    productPrice.textContent = `$${price}`;
    productPriceContainer.append(productPrice);
    return productPriceContainer
}

const randomReview = () => {
    let randomReview = Math.floor(90 + Math.random() * (150 + 1 - 90));
    return randomReview;
}

const showReview = (review) => {
    const productReviewContainer = document.querySelector('.product-info__rating');
    const productReview = document.createElement('span');
    productReview.textContent = `${review} reviews`;
    productReviewContainer.append(productReview);
    return productReviewContainer
}

const showRating = (rating) => {
    const productRating = document.querySelector('.rating-list');
    const gold = Number(rating);
    const gray = 5 - Number(rating);
    for (let i = 0; i < gold; i++) {
        const goldRating = document.createElement('img');
        goldRating.src = './images/star_gold.svg';
        productRating.append(goldRating)
    }
    for (let i = 0; i < gray; i++) {
        const grayRating = document.createElement('img');
        grayRating.src = './images/star_gray.svg';
        productRating.append(grayRating)
    }
    return productRating
}

const showTitle = (title, id) => {
    const titleProduct = document.querySelector('.product-info__title');
    titleProduct.textContent = title;
    const titleSpan = document.createElement('span');
    titleSpan.textContent = ` item #${id}`;
    titleSpan.addEventListener('click', () => {
        console.log('+')
    })
    titleProduct.append(titleSpan)
    return titleProduct
}

const showMainImg = (images) => {
    const imgMain = document.querySelector('.product-img__main');
    imgMain.src = images;
    return imgMain
}

const showMiniImg = (img) => {
    const imgMini = document.querySelectorAll('.mini-item');
    [...imgMini].forEach(mini => {
        mini.src = img
    })
    return imgMini
}

showMainImg(product.src)
showMiniImg(product.src)
showTitle(product.title, product.id)
showRating(product.rating)
showReview(randomReview())
showPrice(product.price)
showColors(product.colors)
showSize(product.size)
delete localStorage.element;