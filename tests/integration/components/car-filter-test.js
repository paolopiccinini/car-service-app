import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ITEMS = [{
  title: 'Audi',
  price: 13,
  fuel: 'diesel',
  newCar: false,
  mileage: 13,
  firstRegistration: '2019-10-04'
},{
  title: 'Audi',
  price: 13,
  fuel: 'diesel',
  newCar: false,
  mileage: 13,
  firstRegistration: '2019-10-04'
},{
  title: 'Audi',
  price: 13,
  fuel: 'diesel',
  newCar: false,
  mileage: 13,
  firstRegistration: '2019-10-04'
}];

module('Integration | Component | car-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('should initially load all listings', async function (assert) {
    this.set('filter', () => Promise.resolve({ cars: ITEMS }));
    await render(hbs`
      <CarFilter @filter={{action filter}} as |cars|>
        <ul>
        {{#each cars as |item|}}
          <li class="city">
            {{item.title}}
          </li>
        {{/each}}
        </ul>
      </CarFilter>
    `);
    assert.equal(this.element.querySelectorAll('.city').length, 3);
    // assert.equal(this.element.querySelector('.city').textContent.trim(), 'Audi');
  });

});
