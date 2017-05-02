import CarouselModule from './carousel';
import CarouselController from './carousel.controller';
import CarouselComponent from './carousel.component';
import CarouselTemplate from './carousel.html';

describe('Carousel', () => {
    let $rootScope,
        makeController;

    beforeEach(window.module(CarouselModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => new CarouselController();
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
            expect(CarouselTemplate).to.match(/{{\s?vm\.name\s?}}/g);
        });
    });


    describe('Component', () => {
        // test the component/directive itself
        const component = CarouselComponent();

        it('should use the right template', () => {
            expect(component.template).to.equal(CarouselTemplate);
        });

        it('should use controllerAs', () => {
            expect(component).to.have.property('controllerAs');
        });

        it('should use the right controller', () => {
            expect(component.controller).to.equal(CarouselController);
        });
    });
});
