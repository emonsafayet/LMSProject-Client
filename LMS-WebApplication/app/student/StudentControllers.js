var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        Student.prototype.getinfo = function () {
            return this.name + " " + this.phone;
        };
        return Student;
    }());
    App.Student = Student;
    var StudentController = (function () {
        function StudentController(studentService) {
            this.student = new Student;
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.display = function () {
            this.information = this.student.getinfo();
        };
        StudentController.prototype.add = function () {
            this.studentService.students.push(this.student);
            this.student = new Student();
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
            this.students = this.studentService.students;
            console.log("I am in Students Controller", this.students);
        }
        return StudentsController;
    }());
    StudentsController.$inject = ["StudentService"];
    angular.module('app').controller('StudentsController', StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map