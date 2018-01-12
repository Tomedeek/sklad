app
.factory('sessionInjector', ['$q', '$location',function (a, b) {
    return {
            response: function (c) {
                if (c.status === 401 || c.status === 403) {
                    b.path("/");
                }
                return c || a.when(c)
            }, responseError: function (c) {
                if (c.status === 404 || c.status === 403) {
                    console.log(c.status);
                    b.path("/");
                    document.cookie = "wh=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                }
                return a.reject(c)
            }
        }
    }])
    .config(["$httpProvider", function (a) {
            a.interceptors.push("sessionInjector");
            a.defaults.withCredentials = true
    }])
    .run(['$rootScope', '$location', ($rootScope, $location) => {

        $rootScope.$on('$routeChangeStart', (event, currentRoute, previousRoute) => {

            if (document.cookie.length && previousRoute === undefined) {
                $location.path('/home')
            } else if (!document.cookie.length) {
                $location.path('/')
            }
        });
    }]);