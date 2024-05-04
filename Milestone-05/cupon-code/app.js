const getId = (elem) => {
    return document.getElementById(elem);
}

const currentPrice = getId('product-price');
const cuponBox = getId('cupon-box');
const applyBtn = getId('apply-btn');


function discountMethod() {
    const cuponText = cuponBox.value;
    const currentPriceVal = +currentPrice.innerText;
    let span = document.createElement('span');
    span.classList = 'block text-green-400'
    if (cuponText === 'tusar78') {
        let discountPrice = (currentPriceVal * 30) / 100;
        let newPrice = currentPriceVal - discountPrice;
        span.innerText = `Discount Price is: ${newPrice}`;
        cuponBox.after(span);      
        cuponBox.value = '';  
    } else {
        console.log('Thank you');
    }

}
applyBtn.addEventListener('click', discountMethod);