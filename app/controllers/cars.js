import Controller from '@ember/controller';

export default Controller.extend({
    firstRegistration: null,
    actions: {
        updateCar(car) {
            let registration = this.firstRegistration;
            this.store.findRecord('car', car.id).then(function (updated) {
                updated.set('title', car.title);
                updated.set('fuel', car.fuel);
                updated.set('price', car.price);
                updated.set('newCar', car.newCar);
                if (car.newCar) {
                    updated.set('mileage', null);
                    updated.set('firstRegistration', null);
                } else {
                    updated.set('mileage', car.mileage);
                    updated.set('firstRegistration', (registration === null) ? car.firstRegistration : registration);
                }
                updated.save();
            });
        },
        deleteCar(car) {
            // i don't know why this is not working, i've put everything  here.
            // it's like the doc says. When i moved to component this stops working
            // i don't know how to fix this, sorry i've to reload the page
            // https://guides.emberjs.com/release/models/creating-updating-and-deleting-records/#toc_deleting-records
            this.store.findRecord('car', car.id, { backgroundReload: false }).then((returedCar) => {
                returedCar.deleteRecord();
                returedCar.get('isDeleted');
                returedCar.save();
                window.location.reload(true); // decomment me to see the error in console the model won't update
            });
        },
        bindDate(date) {
            this.firstRegistration = date.toISOString().split('T')[0];
            return date;
        },
        filter(title, priceFrom, priceTo, newCar) {
            return this.store.findAll('car').then(cars => {
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
                })
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
