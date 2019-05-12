# car-service-app

run npm install, ember serve

I've found some trouble in filtering the array returned by the store. I've had to reload the page on deletion of record.
The store.find has been deprecated and i was not able to use embre-data-filter(i've also enabled the ENABLE_DS_FILTER: true,
with no luck).
When manually filter the array returned by find all i lose DS.RecordArray and so the view is not updating the mdoel.

You should update the backe end too in order to make this works.

Sorry fo the poor layout but i've fought with ember.