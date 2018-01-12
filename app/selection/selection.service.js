app
    .service('selectionProductService', ['$http', function ($http) {

        let ctrl = this;

        this.GetProduct = function () {
            return $http.get('../product.json').then((responce) => responce.data)
        };

        this.GetCount = function (delay) {
              return ctrl.GetProduct().then((response) => response.length);
        };

        return {
            'get' : ctrl.GetProduct,
            'countSelection' : ctrl.GetCount
        }

    }]);