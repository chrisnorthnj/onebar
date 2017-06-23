var app = angular.module('scotchTodo', ['ngTagsInput']);

app.controller('tagController', function ($scope, $http) {
    $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
    ];

    $scope.loadTags = function (query) {
        return $http.get('tags.json');
    };
});
