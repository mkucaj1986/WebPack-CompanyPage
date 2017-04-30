import carousel from 'angular-ui-bootstrap/src/carousel';
class HomeController {
  constructor(User) {
    this.name = 'home';
    this.carousel = carousel;
    let currIndex = 0;
    const tmpSlides = 4;
    this.myInterval = 2500;
    this.noWrapSlides = false;
    this.active = 0;
    this.slides = [];
    this.addSlide = function() {
        const newWidth = 2000 + this.slides.length + 1;
        this.slides.push({
            image: '//unsplash.it/' + newWidth + '/500',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][this.slides.length % 4],
            id: currIndex++
        });
    };
    for (let i = 0; i < tmpSlides; i++) {
        this.addSlide();
    }
    console.log(this.slides);
  }
}

export default HomeController;
