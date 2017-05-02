import template from './carousel.html';
import controller from './carousel.controller';
import './carousel.scss';

const carouselComponent = function() {
    return {
        template: template,
        controller: controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default carouselComponent;
