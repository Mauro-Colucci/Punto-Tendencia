//portfolio

const imageNode = document.querySelectorAll('.image-container img')

const imageArray = Array.from(imageNode).map(e => e.src)


imageNode.forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block'
        document.querySelector('.popup-image img').src = image.getAttribute('src')
        document.querySelector('#header').style.display = 'none'
    }
})

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none'
    document.querySelector('#header').style.display = 'initial'
}
