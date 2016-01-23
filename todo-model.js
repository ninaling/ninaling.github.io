(function(){
    function todoModel(){
        var self=this;
        
        var mon={
                dayOfWeek: 'mon',
                items: [ 'go to Ralph\'s', 'buy a dog' ]
            };
        
        var tue={
                dayOfWeek: 'tue',
                items: [ 'procrastinate', 'watch netflix alone' ]
            };
        
        var wed={
                dayOfWeek: 'wed',
                items: [ 'browse 9gag', 'mid-week crisis', 'two math problems', 'blah', 'bleh' ]
            };
        
        var thurs={
                dayOfWeek: 'thurs',
                items: [ 'binge-watch pewdiepie', 'not get turnt' ]
            };
        
        var fri={
                dayOfWeek: 'fri',
                items: [ 'cry about CS35L', 'cry some more' ]
            };
        
        var sat={
                dayOfWeek: 'sat',
                items: [ 'submit CS35L late', 'cry' ]
            };
        
        var sun={
                dayOfWeek: 'sun',
                items: [ 'sleep' ]
            };
        
        this.week=[
                        mon, tue, wed, thurs, fri, sat, sun
                ];
        
        this.getWeek=function(){
            return self.week;   
        }
        this.getItems=function(day){
            
            return day.items;
        }
        this.addItem=function(day, item){
            if(!item){return;};
            day.items.push(item);
            scope.newItem='';
        }
        this.removeItem=function(day, item){
            var index=day.items.indexOf(item);
            if(index >=0){
            day.items.splice(index,1);
            }
        }
    };
        angular.module('todoApp')
        .service('todoModel', todoModel);
})();

