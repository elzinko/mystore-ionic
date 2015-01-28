angular.module('starter.controllers', [])

    .controller('PhotosCtrl', function ($scope, Camera) {
        $scope.getPhoto = function () {
            console.log('Getting camera');
            Camera.getPicture().then(function (imageURI) {
                console.log(imageURI);
                $scope.lastPhoto = imageURI;
            }, function (err) {
                console.err(err);
            }, {
                quality: 75,
                targetWidth: 320,
                targetHeight: 320,
                saveToPhotoAlbum: false
            });
        }
    })

    .controller('GalleryCtrl', function ($scope) {
        $scope.noMoreItemsAvailable = false;

        $scope.loadMore = function () {
            $scope.items.push({id: $scope.items.length});

            if ($scope.items.length == 30) {
                $scope.noMoreItemsAvailable = true;
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.items = [];
    })

    .controller('Gallery2Ctrl', function ($scope, Placehold) {
        $scope.placehold = new Placehold();

    })

    .controller('Gallery3Ctrl', function ($scope) {
        $scope.noMoreItemsAvailable3 = false;

        $scope.loadMore3 = function () {
            //var last = $scope.images3[$scope.images3.length - 1];
            for (var i = 1; i <= 10; i++) {
                var height = ~~(Math.random() * 500) + 100;
                var id = ~~(Math.random() * 10000);
                $scope.images3.push('http://lorempixel.com/g/280/' + height + '/?' + id);
            }

            if ($scope.images3.length == 30) {
                $scope.noMoreItemsAvailable3 = true;
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.images3 = [];

        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore3();
        });
    })

    .controller('Gallery4Ctrl', function ($scope) {
        //$scope.moreDataCanBeLoaded4 = true;

        $scope.loadMore4 = function () {
            //var last = $scope.images4[$scope.images4.length - 1];
            for (var i = 1; i <= 10; i++) {
                var height = ~~(Math.random() * 500) + 100;
                var id = ~~(Math.random() * 10000);
                $scope.images4.push('http://lorempixel.com/g/280/' + height + '/?' + id);
            }

            //if ($scope.images4.length == 40) {
            //    $scope.moreDataCanBeLoaded4 = false;
            //}
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.images4 = [];

        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore4();
        });
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
