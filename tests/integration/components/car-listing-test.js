import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | car-listing', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.car = {
      title: 'Audi',
      price: 13,
      fuel: 'diesel',
      newCar: false,
      mileage: 13,
      firstRegistration: '2019-10-04'
    };
    this.updateCar = function(car) {
      alert(car);
    };
    this.deleteCar = function(car) {
      alert(car);
    };
    this.bindDate = function(date) {
      alert(date);
    };

  });

  test('should display car details', async function(assert) {
    await render(hbs`<CarListing @car={{this.car}} @updateCar={{action this.updateCar}} @deleteCar={{action this.deleteCar}}
      @bindDate={{action this.bindDate}}/>`);
      assert.equal(this.element.querySelector('.title input').value.trim(), 'Audi', 'Title: Audi');
  });

});
