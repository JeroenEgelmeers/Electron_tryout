'use strict';

angular.module('firstApp', [
    'ngRoute',
    'ui.router'
])

.config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'pages/home.html' ,
            })
            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html' ,
            });
    }
]);