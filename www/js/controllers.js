angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/artists.json').success(function(data) {
        $scope.artists = data;

        $scope.toggleStar = function(item) {
          item.star = !item.star;
        }

        $scope.moveItem = function(item, fromIndex, toIndex) {
          $scope.artists.splice(fromIndex, 1);
          $scope.artists.splice(toIndex, 0, item);
        };
        $scope.onItemDelete = function(item) {
          $scope.artists.splice($scope.artists.indexOf(item), 1);
        };
    });
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
