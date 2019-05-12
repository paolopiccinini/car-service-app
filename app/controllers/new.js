
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
            let month = '' + (date.getMonth() + 1);
            let day = '' + date.getDate();
            let year = date.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            car.firstRegistration = [year, month, day].join('-');
            return date;
        }
    }
});
