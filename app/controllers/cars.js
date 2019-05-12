import Controller from '@ember/controller';

export default Controller.extend({
    firstRegistration: null,
    actions: {
        updateCar(car) {
            car.set('firstRegistration', (this.firstRegistration === null) ? car.firstRegistration : this.firstRegistration);
            if(car.newCar) {
                car.set('mileage', null);
                car.set('firstRegistration', null);
            }
            car.save();
        },
        deleteCar(car) {
            car.destroyRecord()
            window.location.reload(true);
        },
        bindDate(date) {
            let month = '' + (date.getMonth() + 1);
            let day = '' + date.getDate();
            let year = date.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            this.firstRegistration = [year, month, day].join('-');
            return date;
        },
        filter(title, priceFrom, priceTo, newCar) {
            return this.store.findAll('car')
            .then(cars => {
                let carFiltered = cars.filter(car => {
                    let result = true;
                    if (title && title !== '') {
                        result = result && car.title.startsWith(title);
                    }
                    if (priceFrom && priceFrom !== '') {
                        result = result && car.price >= priceFrom;
                    }
                    if (priceTo && priceTo !== '') {
                        result = result && car.price <= priceTo;
                    }
                    if (newCar !== undefined && newCar !== null) {
                        result = result && car.newCar === newCar;
                    }
                    return result;
                });
                return {
                    query: {
                        title: title,
                        priceFrom: priceFrom,
                        priceTo: priceTo,
                        newCar: newCar,
                    }, cars: carFiltered
                }
            });
        }
    }

});
