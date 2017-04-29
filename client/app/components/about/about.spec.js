import AboutModule from './about';
import AboutController from './about.controller';
import AboutComponent from './about.component';
import AboutTemplate from './about.html';

describe('About', () => {
  let $rootScope,
    makeController;

  beforeEach(window.module(AboutModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new AboutController();
  }));

  describe('Module', () => {
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', () => {
    // test your controller here

    // erase me if you remove this.name from the controller
    it('should have a name property [REMOVE]', () => {
      const controller = makeController();

      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // test the template
    // use Regexes to test that you are using the right bindings {{  }}

    it('should have name in template [REMOVE]', () => {
      expect(AboutTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });


  describe('Component', () => {
    // test the component/directive itself
    const component = AboutComponent();

    it('should use the right template', () => {
      expect(component.template).to.equal(AboutTemplate);
    });

    it('should use controllerAs', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('should use the right controller', () => {
      expect(component.controller).to.equal(AboutController);
    });
  });
});
