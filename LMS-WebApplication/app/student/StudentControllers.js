var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentController = (function () {
        function StudentController(studentService) {
            this.student = new Student;
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorResponse) {
                console.log(errorResponse);
            };
            this.studentService.save(self.student).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        return StudentController;
    }());
    StudentController.$inject = ["StudentService"];
    angular.module('app').controller('StudentController', StudentController);
    var StudentsController = (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            var success = function (response) {
                self.students = response.data;
                console.log("I am in Students Controller", self.students);
            };
            var error = function (errorResponse) {
                alert(errorResponse);
            };
            this.studentService.search("").then(success, error);
        }
        StudentsController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.students = response.data;
            };
            var error = function (errorResponse) {
                console.log(errorResponse);
            };
            this.studentService.search(self.keyword).then(success, error);
        };
        return StudentsController;
    }());
    StudentsController.$inject = ["StudentService"];
    angular.module('app').controller('StudentsController', StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map