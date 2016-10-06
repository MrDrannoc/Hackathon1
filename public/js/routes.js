const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/acheteurs', {
            templateUrl: 'views/acheteurs.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/api', {
            templateUrl: 'views/api.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/vendeur', {
            templateUrl: 'views/vendeurs.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
