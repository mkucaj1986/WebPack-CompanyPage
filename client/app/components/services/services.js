import angular from 'angular';
import uiRouter from 'angular-ui-router';
import servicesComponent from './services.component';

const servicesModule = angular.module('services', [
    uiRouter
]).config(($stateProvider) => {
    $stateProvider.state('services', {
        url: '/services',
        template: '<services></services>'
    });
}).directive('services', servicesComponent);

export default servicesModule;
