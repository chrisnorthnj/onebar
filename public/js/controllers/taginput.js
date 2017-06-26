angular.module('taginput', ['ngTagsInput']);

.controller('mainController', function ($scope, $http) {
    $scope.tags = [
    ];

    $scope.loadTags = function (query) {
        return $http.get('tags.json');
    };
});
