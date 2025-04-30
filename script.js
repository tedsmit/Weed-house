document.querySelector('.add-to-cart').addEventListener('click', function() {
    let cartCount = document.querySelector('.cart a');
    let currentCount = parseInt(cartCount.textContent.split('(')[1].split(')')[0]);
    currentCount++;
    cartCount.textContent = `Cart (${currentCount})`;
});