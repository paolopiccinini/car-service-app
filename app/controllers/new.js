
import Controller from '@ember/controller';
import car from '../models/car';

export default Controller.extend({
    car: car,
    newCar: false,
    mileage: null,
    firstRegistration: null,
    actions: {
        saveCar() {
            this.mileage = car.mileage;
            this.firstRegistration = car.firstRegistration;
            if(this.newCar) {
                this.firstRegistration = null;
                this.mileage = null;
            }
            let newCar = this.store.createRecord('car', {
                title: car.title,
                fuel: car.fuel,
                price: car.price,
                newCar: this.newCar,
                mileage: this.mileage,
                firstRegistration: this.firstRegistration
            });

            newCar.save().then(() => this.transitionToRoute('cars'));
        },

        bindDate(date) {
            car.firstRegistration = date.toISOString().split('T')[0];
            return date;
        }
    }
});
