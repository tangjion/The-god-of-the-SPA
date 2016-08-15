SPAgod.config(['$routerProvider', function($routerProvider){
    $routerProvider
        .when('/', {
            templateUrl: 'view/index.html',
            controller: 'indexController'
        })
        // .when('/list', {
        //     templateUrl: 'view/list.html',
        //     controller: 'listController'
        // })
        // .when('/detail', {
        //     templateUrl: 'view/detail.html',
        //     controller: 'detailController'
        // })
        .otherwise({
            redirectTo: '/'
        });

}]);