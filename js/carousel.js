const carousel = document.querySelector('.allProducts-carousel')
const arrowBtns = document.querySelectorAll('.productsCarousel-wrapper-container i')
const firstProduct = document.querySelector('.product').offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "btn-left" ? - firstProduct : firstProduct;
    })
})