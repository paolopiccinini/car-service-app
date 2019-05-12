import Component from '@ember/component';

export default Component.extend({
    classNames: ['car-listing'],
    init() {
        this._super(...arguments);
    },
    actions: {
        handleUpdateCar(car) {
          this.updateCar(car);
        },
        handleDeleteCar(car) {
          this.deleteCar(car);
        },
        handleBindDate(date) {
          this.bindDate(date);
        },
      }
});
