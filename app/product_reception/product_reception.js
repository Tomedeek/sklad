app
    .controller('productReceptionCtrl', ['$scope', '$http', '$location', 'ServiceCases', function ($scope, $http, $location, ServiceCases) {

        let ctrl = this;

        $scope.elArticle = $location.path().split('/reception/60d2f066-a737-11e7-819c-005056ac66d6/')[1];
        $scope.visibleBlock = false;
        $scope.showPlace = [];
        $scope.product = '';
        $scope.initCase = ''


        $http.get('../60d2f066-a737-11e7-819c-005056ac66d6.json')
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    response.data[i].article === $scope.elArticle ? $scope.product = response.data[i] : false
                    $scope.countProduct = $scope.product.count || 0;
                    $scope.weightProduct = $scope.product.weight || '0';
                }
            });

        $scope.getAddPlace = function () {
            $scope.visibleBlock = true;
        };

        $scope.deletePlace = function (place, $index) {
            $scope.requestDeletePlace = confirm("Удалить место " + place + "?");
            $scope.requestDeletePlace ? delete $scope.showPlace[$index] : false;
            $scope.oldPlaces = $scope.showPlace;
            $scope.showPlace = [];

            angular.forEach($scope.oldPlaces, function (item) {
                $scope.showPlace.push(item)
            })
        };

        $scope.saveData = function () {
            $scope.product.count = $scope.countProduct;
            $scope.product.weight = $scope.weightProduct
        };

        // ctrl.watchChanges = () => {
        //     $scope.$watchGroup(['weightProduct', 'countProduct'], function (new_val, old_val) {
        //         if (old_val !== new_val) {
        //             $scope.unsavedData = true;
        //         }
        //         console.log($scope.unsavedData)
        //     });
        // };

        $scope.$on('$locationChangeStart', function (scope, next, current) {
            $scope.weightProduct !== $scope.product.weight && $scope.weightProduct !== '0' || $scope.countProduct !== $scope.product.count && $scope.countProduct ?
                $scope.answer = confirm('Зберегти зміни?') : null
            if ($scope.answer) {
                console.log('Save!')
            }
        });

        // Check visible btn
        this.showSaveBtn = (weight, count) => {
            return weight !== $scope.product.weight && weight !== '0' || count !== $scope.product.count && count;
        };

    }])