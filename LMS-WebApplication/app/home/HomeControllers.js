var App;
(function (App) {
    var HomeController = (function () {
        function HomeController(studenService) {
            var self = this;
            console.log("I am in Home Controller");
            this.now = new Date().toString();
            studenService.get()
                .then(function (success) {
                console.log(success);
                self.values = success.data;
            }, function (error) {
                console.log(error);
                alert(error);
            });
        }
        return HomeController;
    }());
    HomeController.$inject = ["StudentService"];
    //register
    angular.module('app').controller('HomeController', HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map