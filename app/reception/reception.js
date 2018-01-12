'use strict';

app
.controller('receptionCtrl', ['$scope', '$http', 'receptionProductService', function receptionCtrl ($scope, $http, receptionProductService) {

    this.init = function () {
        this.loadReceptionProduct();
    }

    this.loadReceptionProduct = function () {
        receptionProductService.getReception().then((response) => {
            $scope.listReceptionDocument = response;
        })
    }

}]);