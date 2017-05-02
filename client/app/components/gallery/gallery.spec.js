import GalleryModule from './gallery';
import GalleryController from './gallery.controller';
import GalleryComponent from './gallery.component';
import GalleryTemplate from './gallery.html';

describe('Gallery', () => {
    let $rootScope,
        makeController;

    beforeEach(window.module(GalleryModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => new GalleryController();
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
            expect(GalleryTemplate).to.match(/{{\s?vm\.name\s?}}/g);
        });
    });


    describe('Component', () => {
        // test the component/directive itself
        const component = GalleryComponent();

        it('should use the right template', () => {
            expect(component.template).to.equal(GalleryTemplate);
        });

        it('should use controllerAs', () => {
            expect(component).to.have.property('controllerAs');
        });

        it('should use the right controller', () => {
            expect(component.controller).to.equal(GalleryController);
        });
    });
});
