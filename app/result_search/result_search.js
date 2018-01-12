app.controller('resultSearchCtrl', ['$scope', '$filter', '$http', '$routeParams', function resultSearchCtrl ($scope, $filter, $http, $routeParams) {
    $scope.searchProduct = $routeParams['q'];
    var url="../../product.json";
    if($scope.searchProduct.length >= 3) {
        $http.get(url+'?product_code='+$scope.searchProduct)
            .then(function (response) {
                $scope.products = response.data;
                // $scope.filteredProduct = $filter('resultSearchFilter')($scope.products, $scope.searchProduct);
            })
    } else {
        $scope.noProduct = 'По вашему запросу ничего не найдено!'
    }

}]);