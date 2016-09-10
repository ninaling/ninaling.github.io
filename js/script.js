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
    
    $scope.web=[
        {
            title: "Personal Website",
            time: "Apr. 2016",
            description: "stuff"
        },
        {
            title: "Ethereal Broth",
            time: "Nov. 2015",
            description: "funny things"
        }
    ];
    
    $scope.software=[
        {
            title: "Markov Chain Sentence Generator",
            time: "Nov. 2015",
            description: "cool stuff"
        },
        {
            title: "Squad",
            time: "Nov. 2015",
            description: "cliche app"
        }
    ];
            
    
    $scope.getCourses=function(){
        return this.courses;   
    }
});