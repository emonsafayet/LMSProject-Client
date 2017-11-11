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
                if (sucessreponse.myBusinessCode === 12345) {
                    deffered.reject("invaild biz code ,sorry");
                }
                deffered.resolve(sucessreponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            //self.http.get("http://localhost:55250/api/StudentQuery").then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.save = function (student) {
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
            self.http.post("http://localhost:55250/api/student", student).then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.search = function (keyword) {
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
            var requestModel = { Name: keyword, Phone: keyword };
            self.http.post("http://localhost:55250/api/StudentQuery", requestModel).then(f1, f2);
            return deffered.promise;
        };
        return StudentService;
    }());
    StudentService.$inject = ["$http", "$q"];
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", App.StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map