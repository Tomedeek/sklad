app
    .service('receptionProductService', ['$http', function ($http) {

        let ctrl = this;

        this.GetProduct = function () {
            return $http.get('../reception.json').then((responce) => responce.data)
        };

        this.GetCount = function () {
            return ctrl.GetProduct().then((response) => response.length)
        }

        return {
            'getReception' : ctrl.GetProduct,
            'countReception' : ctrl.GetCount
        }



    }]);