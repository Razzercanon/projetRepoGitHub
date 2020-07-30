angular.module('app', [])
    .controller('Controller', ['$scope','$http', function($scope,$http) {

        $http.get("https://api.github.com/users/razzercanon")
            .success(function (data) {
                $scope.userData = data;
                $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
            });
}]);

