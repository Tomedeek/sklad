'use strict';

app
    .controller('homeCtrl', ['$scope', '$interval', 'selectionProductService', 'receptionProductService', function($scope, $interval, selectionProductService, receptionProductService) {
        // $scope.visibleProduct = false;
        // $scope.elArticle

        this.init = function () {
            this.loadCountSelection()
            this.loadCountReception()
        };

        this.loadCountSelection = function () {
            selectionProductService.countSelection().then((count) => {
                $scope.countSelection = count;
            })
        };

        this.loadCountReception = function () {
            receptionProductService.countReception().then((count) => {
                $scope.countReception = count
            })
        }

        $interval(this.loadCountSelection, 20000)
        $interval(this.loadCountReception, 20000)

    }]);