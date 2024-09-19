let productIMG = document.querySelector(".Product")
let btnEL = document.querySelector(".btn")

btnEL[0].onclick = function(){
    productIMG.src = 'products/image1.avif'
}
btnEL[1].onclick = function(){
    productIMG.src = 'product/image2.webp'
}
btnEL[2].onclick = function(){
    productIMG.src = 'product/images.jpg'
}
