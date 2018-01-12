app
    .controller('productCtrl', ['$scope', '$http', '$location', function productCtrl ($scope, $http, $location) {

    $scope.elArticle = $location.path().split('/product/')[1]
    $scope.visibleBlock = false
    $scope.showPlace = []

    $scope.getProductInfo = function () {
        $http.get('../../product.json')
            .then (function (response) {
                for (let i = 0; i < response.data.length; i++) {
                    (response.data[i].article === $scope.elArticle) ? $scope.product = response.data[i]: false
                }
            })
    }

    $scope.deletePlace = function (place, $index) {
        $scope.requestDeletePlace = confirm("Удалить место " + place + "?");
        $scope.requestDeletePlace ? delete $scope.showPlace[$index] : false
        $scope.oldPlaces = $scope.showPlace
        $scope.showPlace = []
        angular.forEach($scope.oldPlaces, function (item) {
            $scope.showPlace.push(item)
        })
    }

    $scope.getAddPlace = function () {
        $scope.visibleBlock = true

    }

        // $scope.getHomePage = function () {
        //     $scope.$parent.visibleProduct = false;
        // }
}])