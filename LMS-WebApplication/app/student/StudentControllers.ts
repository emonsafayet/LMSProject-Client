module App {
    export class Student {
        id: string;
        name: string;
        phone: string;
    }

    class StudentController {
        student: Student;
        information: string;
        studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.student = new Student;
            this.studentService = studentService
            console.log("I am in Student Controller");
        }
       
        add(): void {
            var self = this;
            let success = function(response) {
                console.log(response);
               self.reset();
            };
            let error = function(errorResponse) {
                console.log(errorResponse);
            };
            this.studentService.save(self.student).then(success,error);
        }
        reset(): void{
            this.student = new Student();
        }
    }
    angular.module('app').controller('StudentController', StudentController);

    class StudentsController {
        students: Student[];
        studentService: StudentService;
        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            let success = function (response) {
                self.students = response.data;
                console.log("I am in Students Controller", self.students);

            };
            let error = function (errorResponse) {
                alert(errorResponse);
            };

            this.studentService.get().then(success, error);
        }
    }
        angular.module('app').controller('StudentsController', StudentsController);
   
}
    