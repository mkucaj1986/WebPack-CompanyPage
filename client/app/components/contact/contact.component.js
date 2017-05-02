import template from './contact.html';
import controller from './contact.controller';
import './contact.scss';

const contactComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default contactComponent;
