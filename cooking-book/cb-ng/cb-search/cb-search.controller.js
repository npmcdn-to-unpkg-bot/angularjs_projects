(function  () {

    'use strict';

    var app = angular.module("cookingBook.search");

    app.controller("CookingBookSearchController",
        ['$scope', 'cbSearchService',
        function($scope, cbSearchService){

        // reference to search service:
         var searchService = cbSearchService;

        $scope.searchMsg = $scope.recipeList.length > 0 ? 'Choose from available  ingredients:' : 'There are not available ingredients. First enter recipes.';
        $scope.foundList = [];
        $scope.isRecipeListEmpty = $scope.recipeList.length === 0;
        $scope.isFoundListEmpty = $scope.foundList.length === 0;

        $scope.searchRecipe = function (ingredientsInput) {

            // reset list of found recipes
            $scope.foundList = [];

            $scope.foundList = searchService.returnFoundRecipes(ingredientsInput, $scope.recipeList);
            $scope.isFoundListEmpty = $scope.foundList.length === 0;
        };

        // da iskara wsichki nalichni sustvki
        $scope.availableUniqueIntegrates = searchService.availableUniqueIntegrates($scope.recipeList);

    }]);
})();