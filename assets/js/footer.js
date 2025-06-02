class FooterShapes {
    constructor () {
        this.shapesContainer = document.querySelector('.footer-landscape');
        if (!this.shapesContainer) {
            return;
        }
        this.listen();
    }

    listen () {
        this.images = [];

        this.getImagesUrl();
        this.createImage();
    }

    getImagesUrl() {
        for (let i = 0; i < 5; i++) {
            let imageIndex = i + 1;
            let imageUrl = `/assets/images/footer/image-${imageIndex}.jpg`;
            this.images.push(imageUrl);
        }
    }

    createImage () {
        let image = document.createElement('img');
        let url = this.images[Math.floor(Math.random() * this.images.length)];

        image.src = url;
        this.shapesContainer.appendChild(image);
    }
}

export default new FooterShapes();