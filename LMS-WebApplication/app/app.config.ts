module App {
    var app = angular.module('app', ["ui.router"]);

    class Configuration {
        //configure the routes
       // state manager
        static $inject = ["$stateProvider","$urlRouterProvider"];
        constructor(stateProvider: angular.ui.IStateProvider, urlRouterProvider: angular.ui.IUrlRouterProvider) {
           //our code
            urlRouterProvider.otherwise("/");
            stateProvider.state("root",
                {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class=\"container-fluid slide\"></div>",
                })
                .state("root.home",
                {
                    //url
                    //route parameter or templateUrl
                    //controller
                    //view
                    url: "/",
                    templateUrl: "partials/home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                })
                .state("root.student-entry",
                {                 
                    url: "/student-entry",
                    templateUrl: "partials/student/student-entry.tpl.html",
                    controller: "StudentController",
                    controllerAs: "vm"
                })
                .state("root.student-list",
                {
                    url: "/student-list",
                    templateUrl: "partials/student/student-list.tpl.html",
                    controller: "StudentsController",
                    controllerAs: "vm"
                })
        }
    }
    // register class which and How
    angular.module('app').config(Configuration);
}