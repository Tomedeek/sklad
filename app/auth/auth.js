app
    .controller('authCtrl',['$scope', '$http', '$location', function authCtrl ($scope, $http, $location) {

        $scope.alertBlock = false
        $scope.userArticle = ''
        $scope.sendPost = function () {
            // var test = $.param({
            //     json: JSON.stringify({
            //         code: $scope.code
            //     })
            // })

            if ($scope.userArticle === '' || $scope.userArticle === undefined || $scope.userArticle === null) {
                alert('Некорректное значение')
            } else {
                $http.get('../base.json', {
                    headers: {'Auth': $scope.userArticle}
                }).then(function (res) {
                    if (res.config.headers.Auth === '0000') {
                        $scope.setCookie(res.name,'sfgs','fsgs')
                        $location.path('/home');
                    } else {
                        $scope.alertBlock = true
                    }
                })
            }
        }

        $scope.setCookie = function (name, value) {
            document.cookie = "wh=sfhkdgsdjzhfgjh"
        }
    }])