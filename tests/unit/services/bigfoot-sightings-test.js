import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | bigfoot-sightings', function(hooks) {
  setupTest(hooks);

  test('it returns all data', async function(assert) {
    let service = this.owner.lookup('service:bigfoot-sightings');
    let data = await service.getSightings();
    assert.equal(data.data.length, 537382, `received ${data.length} instead of 537382`);
  });
});
