import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carouselComponent from './carousel.component'; 

const carouselModule = angular.module('carousel', [
	uiRouter
]).directive('carousel', carouselComponent);

export default carouselModule;
