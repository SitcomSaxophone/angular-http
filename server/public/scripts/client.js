const myApp = angular.module('MyApp', []);

myApp.controller('HttpController', ['$http',function ($http) {
    let self = this;

    self.message = 'Hello';

    $http({
        method: 'GET',
        url: '/shells'
    }).then(function(response) {
        console.log(response);
    }).catch( function() {
        console.log(error);
    })
}])