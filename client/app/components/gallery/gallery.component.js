import template from './gallery.html';
import controller from './gallery.controller';
import './gallery.scss';

const galleryComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default galleryComponent;
