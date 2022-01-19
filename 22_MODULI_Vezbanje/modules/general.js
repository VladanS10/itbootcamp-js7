function generateImage(src) {
    let image = document.createElement('img')
    image.src = src;
    image.style.width = "200px"
    return image;
}

export default generateImage;