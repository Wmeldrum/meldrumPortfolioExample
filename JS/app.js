console.log("app controller responding");
(function() {

    var app = angular.module('myApp', []);
    app.controller('articlesController', function(){

        this.articles = articles;
        console.log("hey");
      });
      app.directive('articleLog', function() {
      return {
        restrict: 'E',
        templateUrl: '../HTML/aritclePost.html',
        replace: true
          }
        });

      })();




  var articles = [
      {
        title: "NLBC Tournament Results: Battles Fought, Sticks Thrown",
        date: "2016-12-02T20:01:39+00:00",
        desc: "We've all had our moments. Renowned east coast player, AD Sanford Kelly (Sagat) faced off against Mentos sponsored Rico Suave (Abel)... ",
        author: "William Meldrum"
      },

      {
        title: 'Capcom Cup 2016 Results: Watch the Riveting Grand Finals to see who walks away with $230k',
        date: '2016-12-04T20:01:39+00:00',
        desc: 'Capcom Cup 2016 Results: Watch the Riveting Grand Finals to see who walks away with $230k',
        author: 'William Meldrum'
     }



  ];
