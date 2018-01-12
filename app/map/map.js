app
    .component('mapComponent', {
        bindings: {
            group: '='
        },
        templateUrl: 'map/map.html',
        controller: 'CtrlMapComponents'
    })

    .controller('CtrlMapComponents', ['$scope', 'serviceMap', function ($scope, serviceMap) {

        $scope.addPlace = (code, name) => {
            serviceMap.setPlace(code, name);
        };


    }]);


