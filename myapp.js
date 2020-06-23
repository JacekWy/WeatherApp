var app = angular.module("myApp", []);
app.controller("weather", function ($scope, $http, $filter) {
  $scope.ladowanie = "Wpisz miasto.";
  $scope.getCity = function getCity(cityName) {
    $scope.ladowanie = "Wpisywnie miasta.....";

    $http
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" +
          cityName
      )
      //.get("cities.json")
      .then(function (response) {
        $scope.cities = response.data;
        document.querySelector(".showLi").style.display = "block";
      });
  };

  $scope.weid = function weid(id) {
    $scope.ladowanie = "Ladowanie.....";
    // .get"https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
    //       id
    $http
      //.get("pogoda.json")
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
          id
      )
      .then(function (response) {
        $scope.weather = response.data;
        $scope.days = response.data.consolidated_weather;
        $scope.nrDay = 0;
        document.querySelector(".container-overlay").style.display = "none";
        document.querySelector(".showLi").style.display = "none";
      });
    //console.log("Dzialala " + id);
  };
});
