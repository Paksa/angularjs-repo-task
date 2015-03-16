var App = angular.module('App', []);

//App.service("git", function($resource) {
//    $resource()
//});

App.controller('repositoryController', function ($scope, $http) {
    $http.get('repositories.json')
         .then(function (res) {
            $scope.repositories = res.data;
            $scope.filter = 'id';
            $scope.filters = [
                { 'filter': 'id' },
                { 'filter': 'name' },
                { 'filter': 'full_name'},
                { 'filter': 'owner.login'},
                { 'filter': 'owner.id'}
            ];
            $scope.filterNames = [
                { 'lookupCode': 'id', 'description': 'Identificator (ID)' },
                { 'lookupCode': 'name', 'description': 'Repo Short Name' },
                { 'lookupCode': 'full_name', 'description': 'Repo Full Name' },
                { 'lookupCode': 'owner.login', 'description': 'Owner Login' },
                { 'lookupCode': 'owner.id', 'description': 'Owner Identificator (ID)' }];
            $scope.reverse = 'false';
            $scope.reverses = [{ 'reverse': 'true' }, { 'reverse': 'false' }];
            $scope.reverseNames = [
                { 'lookupCode': 'true', 'description': 'Ascending' },
                { 'lookupCode': 'false', 'description': 'Descending' }];
            $scope.limit = 10;
            $scope.onLimitChange = function() {
                if ($scope.limit === '0') {
                    $scope.limit = Infinity;
                }
        };
    });
});