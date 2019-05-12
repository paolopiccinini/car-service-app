import Component from '@ember/component';

export default Component.extend({
    classNames: ['car-filter'],
    title: null,
    priceFrom: null,
    priceTo: null,
    newCar: null,
    init() {
        this._super(...arguments);
        this.filter(null, null, null, null).then((allCars) => this.set('cars', allCars.cars));
    },
    actions: {
        handleFilter() {
            this.filter(this.title, this.priceFrom, this.priceTo, this.newCar).then((filterCars) => this.syncFilter(filterCars));
        },
        handleFilterCheck() {
            this.newCar = !this.newCar;
            this.filter(this.title, this.priceFrom, this.priceTo, this.newCar).then((filterCars) => this.syncFilter(filterCars));
        },
        resetFilters() {
            this.set("newCar", null);
            this.set("priceFrom", null);
            this.set("priceTo", null);
            this.set("title", null);
            this.filter(this.title, this.priceFrom, this.priceTo, this.newCar).then((filterCars) => this.syncFilter(filterCars));
        }
    },
    syncFilter(filterCars) {
        if (filterCars.query.title === this.title && filterCars.query.priceFrom === this.priceFrom
            && filterCars.query.priceTo === this.priceTo && filterCars.query.newCar === this.newCar) {
            this.set('cars', filterCars.cars);
        }
    }
});
