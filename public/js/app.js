var app = angular.module('scotchTodo', ['ngTagsInput']);

app.controller('mainController', function ($scope, $http) {
    $scope.tags = [
    ];

    $scope.loadTags = function (query) {
        return $http.get('tags.json');
    };
});
