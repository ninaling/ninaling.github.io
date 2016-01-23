(function(){
    function todoController($scope, todoModel){ //$scope object automatically passed in by program, but must take as argument

    $scope.getWeek=todoModel.getWeek;
	$scope.getItems=todoModel.getItems;
    $scope.addItem=todoModel.addItem;
	$scope.removeItem=todoModel.removeItem;

    }
    angular.module('todoApp')
	.controller('todoController', 
		    ['$scope', 'todoModel', todoController]); //add todoController to module

})();

