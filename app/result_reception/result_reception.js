app
    .controller('resultReceptionCtrl',['$scope', '$http', '$location', 'receptionProductService', function resultReceptionCtrl ($scope, $http, $location, receptionProductService) {
        $scope.searchItem='';
        $scope.receptionProduct = [];
        $scope.leNumber = $location.path().split('/reception/')[1]
        $scope.message = "По вашему запросу ничего не найдено!"
        //
        // $scope.getFilteredProduct = function (searchItem) {
        //     $scope.searchProduct = searchItem
        // }
        //
        // $scope.cleanField = function () {
        //     $scope.searchProduct = ''
        //     $scope.searchItem = ''
        // }

        $http.get('../60d2f066-a737-11e7-819c-005056ac66d6.json')
            .then((response) => {
                $scope.receptionProduct = response.data
            })

    }])