import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import config from './config/app.config';
import Common from './common/common';
import ngTranslate from 'angular-translate';
import angularAnimate from 'angular-animate';
import 'angular-translate-loader-static-files';
import AppComponent from './app.component';
import Components from './components/components';
import 'bootstrap-sass/assets/javascripts/bootstrap.min.js';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/src/css/lightbox.css';
import 'lightbox2/src/js/lightbox.js';

angular.module('app', [
  'app.config',
  uiBootstrap,
  uiRouter,
  Common.name,
  Components.name,
  ngTranslate
]).config(($urlRouterProvider, $locationProvider, $translateProvider, ENV) => {
  $translateProvider.useStaticFilesLoader({
    prefix: 'app/i18n/',
    suffix: '.json'
  });

  $translateProvider.useSanitizeValueStrategy('escaped');
  $translateProvider.preferredLanguage('en');

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}).directive('app', AppComponent);
