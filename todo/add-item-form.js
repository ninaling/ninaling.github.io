(function(){
        function addItemForm(todoModel){
                    var linkFn=function($scope){
                            $scope.addItem=function(day, item){ //can use functions implemented in todomodel
                                alert('hello');
                                todoModel.addItem(day, item);
                                if (day==undefined) {console.log('day is undefined');}
                                else {console.log('day is not undefined');}
                                $scope.newItem='';
                            }
                    }
                    
	               console.log('add item form');
            
                    return {
                        restrict: 'E',
                        templateUrl: 'add-item-form.html',
                        scope: {},
                        link: linkFn,
                    };
        };
    
    angular.module('todoApp')
	.directive('addItemForm', ['todoModel', addItemForm]); //because added as dependency

})();