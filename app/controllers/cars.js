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
            // i don't know why this is not working, i've put everything  here.
            // it's like the doc says. When i moved to component this stops working
            // i don't know how to fix this, sorry i've to reload the page for now  
            // https://guides.emberjs.com/release/models/creating-updating-and-deleting-records/#toc_deleting-records
            window.location.reload(true);
            // .then(() => {
            //    this.transitionToRoute('/');
            // });
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
