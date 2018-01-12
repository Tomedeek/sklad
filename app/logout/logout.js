app
    .component('logoutComponent', {
        templateUrl: 'logout/logout.html',
        controller: 'logoutCtrl'
    })

    .controller('logoutCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.logout = function () {
            $location.path('/')
            document.cookie = "wh=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }
    }])