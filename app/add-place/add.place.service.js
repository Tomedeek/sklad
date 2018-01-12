app
    .service('ServiceCases', ['$http', '$q', function ($http, $q) {
        let ctrl = this;

        this.dataPromise = new Array();

        this.get = function () {
            let defer = $q.defer();

            if ( !ctrl.dataPromise.length ) {
                $http({url: '../../map.json', method: "GET"})
                    .success(function (response) {
                        // angular.forEach(response.elements, (value, key) => {
                        //     delete value.elements;
                        // });
                        // response.elements.filter(function (item) {
                        //     return delete item.elements
                        // });
                        // response.elements.filter((item) => delete item.elements);
                        defer.resolve(response)
                    });

                ctrl.dataPromise = defer.promise;
            }

            return ctrl.dataPromise;
        }
    }])