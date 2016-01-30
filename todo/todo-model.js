(function(){
    function todoModel(){
        var self=this;
        
        this.week=[
                        {
                            dayOfWeek: 'mon',
                            items: [ 'go to Ralph\'s', 'buy a dog', 'buy a dodge', 'buy a boo', 'buy a grumpy cat', 'norweigian forest cat', 'yes', 'yeah', 'howdy' ]
                        }, 
                        {
                            dayOfWeek: 'tue',
                            items: [ 'procrastinate', 'watch netflix alone' ]
                        },
                        {
                            dayOfWeek: 'wed',
                            items: [ 'browse 9gag', 'mid-week crisis', 'two math problems', 'blah', 'bleh' ]
                        }, 
                        {
                            dayOfWeek: 'thurs',
                            items: [ 'binge-watch pewdiepie', 'not get turnt' ]
                        }, 
                        {
                            dayOfWeek: 'fri',
                            items: [ 'cry about CS35L', 'cry some more' ]
                        }, 
                        {
                            dayOfWeek: 'sat',
                            items: [ 'submit CS35L late', 'cry', 'hello', 'what\'s up' ]
                        }, 
                        {
                            dayOfWeek: 'sun',
                            items: [ 'sleep' ]
                        }
                ];
        
        this.getWeek=function(){
            return self.week;   
        }
        this.getItems=function(day){
            if (day==undefined) {console.log('getitems: day is undefined');}
            else {console.log('getitems: day is not undefined');};
            return day.items;
        }
        this.addItem=function(day, item){
            if(!item){return;};
            if (day==undefined) {console.log('additem: day is undefined'); return;}
            else {console.log('additem: day is not undefined');};
            day.items.push(item);
            $scope.newItem='';
        }
        this.removeItem=function(day, item){
            var index=day.items.indexOf(item);
            if(index >=0){
            day.items.splice(index,1);
            }
        }
        this.shiftUp=function(day, item){
            if (item==day.items[0]) {return;}
            
            var i=day.items.indexOf(item);
            var temp=day.items[i-1];
                day.items[i-1]=day.items[i];
                day.items[i]=temp;
        }
        this.shiftDown=function(day, item){
            if (item==day.items[day.items.length-1]) {return;}
            
            var i=day.items.indexOf(item);
            var temp=day.items[i+1];
                day.items[i+1]=day.items[i];
                day.items[i]=temp;
        }
    };
        angular.module('todoApp')
        .service('todoModel', todoModel);
})();

