import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list cars', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-cars', async function(assert) {
    await visit('/list-cars');

    assert.equal(currentURL(), '/list-cars');
  });
});
