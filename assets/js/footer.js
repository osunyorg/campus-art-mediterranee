class FooterImages {
    constructor () {
        this.imagesContainer = document.querySelector('.footer-landscape');
        if (!this.imagesContainer) {
            return;
        }
        this.images = this.imagesContainer.querySelectorAll('picture');
        this.total = this.images.length;
        this.listen();
    }

    listen () {
        this.hideFirstImage();
        this.createImage();
    }

    hideFirstImage() {
      this.images[0].style.display = 'none';
    }

    createImage () {
        let image = this.images[Math.floor(Math.random() * this.total)];
        image.style.display = 'block';
    }
}

export default new FooterImages();