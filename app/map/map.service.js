app
    .service('serviceMap', [function () {
        let ctrl = this;
        this.addedPlaces = new Array();


        this.setPlace = function (code, name) {

            // Шукаємо чи є об'єкт вже з таким кодом - {code: '', step: ''} || undefined
            let searchCode = function (obj) {
                return obj.code === code
            };

            // перебираємо усі об'кти масива, якщо код поточного дорівюємо вхідному то перезаписуємо
            let rewriteCode = function (obj) {
                if (code === '000000001') {
                    ctrl.addedPlaces = []
                    ctrl.addedPlaces.push({'code': code, 'step': name})
                }

                obj.code === code ? obj.step = name : null;

                for (let i = 0; i < ctrl.addedPlaces.length; i++) {
                    ctrl.addedPlaces[i].code === code ? ctrl.addedPlaces.splice(i + 1, ctrl.addedPlaces.length) : null;
                }
            };

            // Здійснюємо пошук об'єкта з кодом
            let issetCode = ctrl.addedPlaces.find(searchCode);

            // Перевіряємо отриманні дані і робимо або пуш нового об'єкта або перезапис code в існуючому
            typeof issetCode === 'undefined' ? ctrl.addedPlaces.push({'code': code, 'step': name}) : ctrl.addedPlaces.find(rewriteCode);


            // console.log(issetCode);
            // console.log(ctrl.addedPlaces)
        };

        this.getPlace = function () {
            return ctrl.addedPlaces;
        };

    }]);