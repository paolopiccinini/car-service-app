# car-service-app

Please update car-service-api to make this works, i've changed it to make it works with ember data.

run npm install, ember serve

I've found some trouble in filtering the array returned by the store. I've had to reload the page on deletion of records.
The store.find has been deprecated and i was not able to use ember-data-filter (i've also enabled the ENABLE_DS_FILTER: true,
with no luck).
When manually filter the array returned by store.findAll i lost DS.RecordArray and therefore the model is not updating.

If I use store.query I don't think it's possible to filter by range.

Perhaps ember-data is not so flexible, I should have used something else or filtered at backend.

For test i've not mocked the backend so list-cars-test.js is failing test: "should list available cars" at line 23, change in assert.equals
the real number of cars returnd by the service in oreder to make the test pass.

Sorry for the poor layout but I've fought with the ember: -D.