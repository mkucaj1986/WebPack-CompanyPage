class NavbarController {
    constructor(ENV) {
        this.nav = document.querySelector('.navbar');
        this.name = 'navbar';
        this.title = ENV.name;
        this.sticky = false;
        window.addEventListener('scroll', () => this.init());
    }
    init() {
        if (window.pageYOffset >= 100) {
            this.sticky = true;
            this.nav.classList.add('smaller');
        } else {
            this.sticky = false;
            this.nav.classList.remove('smaller');
        }
    }
}

export default NavbarController;
