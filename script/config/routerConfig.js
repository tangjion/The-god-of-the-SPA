SPAgod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
    $routeProvider.when('/list', {
            templateUrl: 'view/list.html',
            controller: 'listController'
        })
    $routeProvider.when('/detail', {
            templateUrl: 'view/detail.html',
            controller: 'detailController'
        })
    $routeProvider.otherwise({
            redirectTo: '/'
        })
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    // $locationProvider.hashPrefix('!!!');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);