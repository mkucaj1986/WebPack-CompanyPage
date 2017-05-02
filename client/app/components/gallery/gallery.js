import angular from 'angular';
import uiRouter from 'angular-ui-router';
import galleryComponent from './gallery.component';

const galleryModule = angular.module('gallery', [
    uiRouter
]).config(($stateProvider) => {
    $stateProvider.state('gallery', {
        url: '/gallery',
        template: '<gallery></gallery>'
    });
}).directive('gallery', galleryComponent);

export default galleryModule;
