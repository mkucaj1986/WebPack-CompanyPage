import carousel from 'angular-ui-bootstrap/src/carousel';
class CarouselController {
    constructor() {
        this.carousel = carousel;
        const url = './app/resources/data/carouselData.json';
        const currIndex = 0;
        this.myInterval = 2500;
        this.active = 0;
        const el = document.querySelectorAll('#carousel')[0];

        el.addEventListener('mouseenter', () => this.hoverCarousel());
        el.addEventListener('mouseleave', () => this.carouselLeave());
        this.slides = [{
            id: 0,
            src: './app/resources/images/1.jpg',
            tel: 'tel. 07938958521',
            info: 'Bathroom && Kitchen Services'
        }, {
            id: 1,
            src: './app/resources/images/2.jpg',
            tel: 'tel. 44 203485 4888',
            info: 'Bathroom Kitchen'
        }, {
            id: 2,
            src: './app/resources/images/3.jpg',
            tel: 'tel. 07938958521',
            info: 'Tiling and Services'
        }, {
            id: 3,
            src: './app/resources/images/4.jpg',
            tel: 'tel. 44 203485 4888',
            info: 'Tiles and Marble'
        }];
    }

    hoverCarousel() {
        const carouselControl = document.querySelectorAll('.carousel-control');
        const carouselIndicators = document.querySelectorAll('.carousel-indicators');
        jQuery(carouselControl).css('display', 'block');
        jQuery(carouselIndicators).css('display', 'block');
    }
    carouselLeave() {
        const carouselControl = document.querySelectorAll('.carousel-control');
        const carouselIndicators = document.querySelectorAll('.carousel-indicators');
        jQuery(carouselControl).css('display', 'none');
        jQuery(carouselIndicators).css('display', 'none');
    }
}

export default CarouselController;
