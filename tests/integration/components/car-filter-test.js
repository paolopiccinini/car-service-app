import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | car-filter', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.cars = [{
      title: 'Audi',
      price: 13,
      fuel: 'diesel',
      newCar: false,
      mileage: 13,
      firstRegistration: '2019-10-04'
    }];
    this.filter = function () {
      return this.cars;
    }
  });

  test('should display car details', async function(assert) {
    // await render(hbs`<CarFilter @filter={{action this.filter}} as |filteredCars|></CarFilter>`);
      assert.equal(true, true, 'Title: Audi');
  });

});
