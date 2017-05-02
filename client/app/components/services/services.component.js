import template from './services.html';
import controller from './services.controller';
import './services.scss';

const servicesComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default servicesComponent;
