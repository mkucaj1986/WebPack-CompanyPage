import ServicesModule from './services';
import ServicesController from './services.controller';
import ServicesComponent from './services.component';
import ServicesTemplate from './services.html';

describe('Services', () => {
    let $rootScope,
        makeController;

    beforeEach(window.module(ServicesModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => new ServicesController();
    }));

    describe('Module', () => {
        // test things about the component module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Controller', () => {
        // test your controller here

        it('should have a name property [REMOVE]', () => {
            const controller = makeController();

            expect(controller).to.have.property('name');
        });
    });

    describe('Template', () => {
        // test the template
        // use Regexes to test that you are using the right bindings {{  }}

        it('should have name in template [REMOVE]', () => {
            expect(ServicesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
        });
    });


    describe('Component', () => {
        // test the component/directive itself
        const component = ServicesComponent();

        it('should use the right template', () => {
            expect(component.template).to.equal(ServicesTemplate);
        });

        it('should use controllerAs', () => {
            expect(component).to.have.property('controllerAs');
        });

        it('should use the right controller', () => {
            expect(component.controller).to.equal(ServicesController);
        });
    });
});
