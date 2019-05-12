import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    fuel: DS.attr('string'),
    price: DS.attr('number'),
    newCar: DS.attr('boolean'),
    mileage: DS.attr('number'),
    firstRegistration: DS.attr('string'),
});
