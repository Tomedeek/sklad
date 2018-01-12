app
    .component('searchComponent', {
        templateUrl: 'search/search.html',
        controller: 'searchCtrl',
        controllerAs: 'ctrl'
    })

    .controller('searchCtrl', ['$scope', '$http', '$location', function searchCtrl($scope, $http, $location) {

        let ctrl = this;

        $scope.startSearch = function (product) {
            $location.path('/search').search({q: $scope.searchProduct});
        };

        // $scope.getVisibleProduct = function (data) {
        //     $scope.$parent.visibleProduct = true;
        //     $scope.$parent.elArticle = data
        // }

        $http.get('../../product.json')
            .then(function (response) {
                $scope.products = response.data;
            })

        this.showSearchBtn = countSymbol => console.log(countSymbol);

    }]);