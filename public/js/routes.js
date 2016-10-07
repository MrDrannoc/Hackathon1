const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/acheteur', {
            templateUrl: 'views/acheteur/acheteur.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/vendeur', {
            templateUrl: 'views/vendeur/vendeur.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/api', {
            templateUrl: 'views/api.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
