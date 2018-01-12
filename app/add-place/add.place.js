app

    .component('addPlaceComponent', {
        templateUrl: 'add-place/add.place.html',
        controller: 'addPlaceCtrl',
        controllerAs: '$addCtrl'
    })

    .controller('addPlaceCtrl', ['ServiceCases', 'serviceMap',  '$compile', '$scope', '$http', '$q', function appPlaceCtrl (ServiceCases, serviceMap, $compile, $scope, $http, $q) {

        $scope.$parent.showPlace = []

        $scope.addNewPlace = function (getCase, getPalletArea, getFloor) {
            $scope.pushElement(getCase, getPalletArea, getFloor)
            $scope.closeAddPlace()

        }

        $scope.pushElement = function (getCase, getPalletArea, getFloor) {
            // $scope.$parent.addedPlaces.push(
            //     {"case":getCase}
            // )
            if (serviceMap.getPlace().length) {
                let place='';
                var places= serviceMap.getPlace();
                for (let i = 0; i < places.length; i++) {
                    place += places[i].step
                    i < places.length - 1 ? place += " / " : null
                }

                $scope.$parent.showPlace.push(

                    {"place": place}
                )
            }
        }

        $scope.initCase = function () {
            return ServiceCases.get().then((response)=>{
                $scope.cases = response;
            })
        };

        $scope.closeAddPlace = function () {
            $scope.$parent.visibleBlock = false;
            $scope.resetAddPlace()
        };

        $scope.$watch('$parent.visibleBlock', function (val) {
            val ? $scope.initCase() : null
        })

        $scope.resetAddPlace = function () {
            $scope.getCase = false;
            $scope.ChildElements = [];

        };

        $scope.ChildElements = [];
        $scope.findChildren = function (key = 0, getCase) {

            serviceMap.setPlace(key, getCase);

            $scope.ChildElements = $scope.cases.elements.filter(function (obj) {
                if (obj.name === getCase ){
                    if( typeof obj.elements !== 'undefined' && obj.elements.length ) {
                        return obj.elements;
                    } else {
                        return [];
                    }
                }
            });
        };

        // init
        // $scope.initCase();
    }]);