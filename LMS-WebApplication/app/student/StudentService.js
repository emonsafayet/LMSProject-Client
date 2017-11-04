var App;
(function (App) {
    var StudentService = (function () {
        function StudentService(http, q) {
            this.students = [];
            this.http = http;
            this.q = q;
        }
        StudentService.prototype.get = function () {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (sucessreponse) {
                console.log(sucessreponse);
                deffered.resolve(sucessreponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.get("http://localhost:58048/api/values").then(f1, f2);
            return deffered.promise;
        };
        return StudentService;
    }());
    StudentService.$inject = ["$http", "$q"];
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", App.StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map