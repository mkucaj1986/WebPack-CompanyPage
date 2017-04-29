import angular from 'angular';
import uiRouter from 'angular-ui-router';
import localiseComponent from './localise.component';

const localiseModule = angular.module('localise', [
  uiRouter
]).directive('localise', localiseComponent);

export default localiseModule;
