var myApp=angular.module("myModule", []);
myApp.controller("myController", function($scope){
    $scope.courses=[
        {
            title: "CS 31, 32",
            subtitle: "Introduction to Computer Science I, II",
            inprogress: "",
            description: "really easy course"
        },
        {
            title: "CS 35L",
            subtitle: "Software Construction Laboratory",
            inprogress: "",
            description: "really hard course"
        },
        {
            title: "CS 33",
            subtitle: "Introduction to Computer Organization",
            inprogress: "*",
            description: "really hard course"
        },
        {
            title: "CS M51A",
            subtitle: "Logic Design of Digital Systems",
            inprogress: "*",
            description: "really hard course"
        }
    ];
    
    $scope.getCourses=function(){
        return this.courses;   
    }
});