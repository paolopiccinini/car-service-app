import { module, test } from 'qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list cars', function(hooks) {
  setupApplicationTest(hooks);

  test('should show cars as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/cars', 'should redirect automatically');
  });

  test('should link to new car page', async function(assert) {
    await visit('/');
    await click(".button");
    assert.equal(currentURL(), '/new', 'should navigate to new');
  });

  test('should list available cars.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 5, 'should display 3 listings');
  });
});
