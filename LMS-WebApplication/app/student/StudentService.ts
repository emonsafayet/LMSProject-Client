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
                deffered.resolve(sucessreponse);
            };
            var f2 = function (errorResponse) {

                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.get("http://localhost:58048/api/values").then(f1, f2);
            return deffered.promise;
        }
    }
    angular.module('app').service("StudentService", App.StudentService);
}