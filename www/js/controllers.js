angular.module('starter.controllers', [])

.controller('PhotosCtrl', function($scope, Camera) {
  $scope.getPhoto = function() {
    console.log('Getting camera');
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
  }
})

.controller('GalleryCtrl', function($scope) {
  $scope.noMoreItemsAvailable = false;

  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length});

    if ( $scope.items.length == 99 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.items = [];

});

//.controller('ChatsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  }
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('FriendsCtrl', function($scope, Friends) {
//  $scope.friends = Friends.all();
//})
//
//.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//  $scope.friend = Friends.get($stateParams.friendId);
//})
//
//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
