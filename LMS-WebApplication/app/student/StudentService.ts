module App {
    import AngularStatic = angular.IAngularStatic;

    export class StudentService {

        http: angular.IHttpService;
        q: angular.IQService;
        students: Student[];

        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.students = [];
            this.http = http;
            this.q = q;

        }
        get(): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (sucessreponse) {
                console.log(sucessreponse);
                if (sucessreponse.myBusinessCode === 12345) {
                    deffered.reject("invaild biz code ,sorry");

                } deffered.resolve(sucessreponse);
            };



            var f2 = function (errorResponse) {

                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            //self.http.get("http://localhost:55250/api/StudentQuery").then(f1, f2);
            return deffered.promise;
        }
        save(student: Student): angular.IPromise<any> {
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
        }
        search(request: StudentRequestModel): angular.IPromise<any> {
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
            
            self.http.post("http://localhost:55250/api/StudentQuery", request).then(f1, f2);
            return deffered.promise;
        }

    }
    angular.module('app').service("StudentService", StudentService);
}