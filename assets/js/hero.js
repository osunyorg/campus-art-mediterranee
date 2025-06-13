import { isMobile } from './theme/utils/breakpoints';

class PagesHero {
    constructor () {
        this.page = document.querySelector('.pages__section');
        if (!this.page || isMobile()) {
            return;
        }
        this.hero = this.page.querySelector('.hero--with-image ');
        this.listen();
        this.resize();
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));

        this.updateHeroSpacing();
    }

    resize () {
        if (isMobile()) {
            return;
        }
        this.updateHeroSpacing();
    }

    updateHeroSpacing() {
        this.getTitleHeight();
        this.addPaddingToHero();
    }

    getTitleHeight() {
        var title = this.hero.querySelector('h1');
        this.titleHeight = title.offsetHeight;
    }

    addPaddingToHero () {
        var figure = this.hero.querySelector('.content');
        figure.style.paddingTop = `${this.titleHeight}px`
    }
}

export default new PagesHero();