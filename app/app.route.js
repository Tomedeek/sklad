app
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'auth/auth.html',
            controller: 'authCtrl'
        })

        .when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        })

        .when('/search', {
            templateUrl: 'result_search/result_search.html',
            controller: 'resultSearchCtrl',
            controllerAs: '$resSearchCtrl'
        })

        .when('/selection', {
            templateUrl: 'selection/selection.html',
            controller: 'selectionCtrl',
            controllerAs: '$selectCtrl'
        })

        .when('/reception', {
            templateUrl: 'reception/receprion.html',
            controller: 'receptionCtrl',
            controllerAs: '$receptCtrl'
        })

        .when('/reception/:uuid', {
            templateUrl: 'result_reception/result_reception.html',
            controller: 'resultReceptionCtrl',
            controllerAs: '$resultReceptCtrl'
        })

        .when('/reception/:uuid/:article', {
            templateUrl: 'product_reception/product_reception.html',
            controller: 'productReceptionCtrl',
            controllerAs: '$prodRecCtrl'
        })

        .when('/product/:article', {
            templateUrl: 'product/product.html',
            controller: 'productCtrl'
        })

        .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
}]);