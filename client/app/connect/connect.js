angular.module('OpenEXP')
    .config($stateProvider => {
        $stateProvider
            .state('connect', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: './app/connect/connect.html'
        })
    });
