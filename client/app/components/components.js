import angular from 'angular';
import jQuery from 'jquery';
import Home from './home/home';
import About from './about/about';
import Carousel from './carousel/carousel';
import Services from './services/services';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';

window.jQuery = window.$ = jQuery;

const componentModule = angular.module('app.components', [
    Home.name,
    Carousel.name,
    Services.name,
    Gallery.name,
    Contact.name,
    About.name
]);

export default componentModule;
