const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
imgPosition.forEach(function(image,index){
    image.style.left = index*100 +"%" 
    dotItem[index].addEventListener("click",function(){
    slider (index)
    })    
})
function imgSlide (){
    index++;
    console.log(index)
    if (index >= imgNuber) {index = 0}
    slider (index)
}
function slider(index){
    imgContainer.style.left = "-" + index*100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
menu.addEventListener("click",function(){
    menu.classList.toggle("block")
            })
})
const header = document.querySelector('.top');
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top>= 30){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg =  document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
    bigImg.src = imgItem.src
    })
})