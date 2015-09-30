(function () {
    'use strict';
    angular.module('appTreeTracker', ['ngRoute', 'ngAnimate']).config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "Scripts/app/views/home/index.html",
                controller: "homeCtrl"
            })
            .when("/customer", {
                templateUrl: "Scripts/app/views/customers/customer.html",
                controller: "customerCtrl"
            })
            .when("/cf", {
                templateUrl: "Scripts/app/views/customers/cf.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk", {
                templateUrl: "Scripts/app/views/customers/cf-bk.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-sl", {
                templateUrl: "Scripts/app/views/customers/cf-bk-sl.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-sl-asl", {
                templateUrl: "Scripts/app/views/customers/cf-bk-sl-asl.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-sl-lsl", {
                templateUrl: "Scripts/app/views/customers/cf-bk-sl-lsl.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-po", {
                templateUrl: "Scripts/app/views/customers/cf-bk-po.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-po-apo", {
                templateUrl: "Scripts/app/views/customers/cf-bk-po-apo.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-po-lpo", {
                templateUrl: "Scripts/app/views/customers/cf-bk-po-lpo.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-pd", {
                templateUrl: "Scripts/app/views/customers/cf-bk-pd.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-pd-apd", {
                templateUrl: "Scripts/app/views/customers/cf-bk-pd-apd.html",
                controller: "customerCtrl"
            })
            .when("/cf-bk-pd-lpd", {
                templateUrl: "Scripts/app/views/customers/cf-bk-pd-lpd.html",
                controller: "customerCtrl"
            })
            .when("/cf-tr", {
                templateUrl: "Scripts/app/views/customers/cf-tr.html",
                controller: "customerCtrl"
            })
            .when("/cf-tr-atr", {
                templateUrl: "Scripts/app/views/customers/cf-tr-atr.html",
                controller: "customerCtrl"
            })
            .when("/cf-tr-ltr", {
                templateUrl: "Scripts/app/views/customers/cf-tr-ltr.html",
                controller: "customerCtrl"
            })
            .when("/cf-ct", {
                templateUrl: "Scripts/app/views/customers/cf-ct.html",
                controller: "customerCtrl"
            })
            .when("/cf-ct-act", {
                templateUrl: "Scripts/app/views/customers/cf-ct-act.html",
                controller: "customerCtrl"
            })
            .when("/cf-ct-lct", {
                templateUrl: "Scripts/app/views/customers/cf-ct-lct.html",
                controller: "customerCtrl"
            })
            .when("/ci", {
                templateUrl: "Scripts/app/views/customers/ci.html",
                controller: "customerCtrl"
            })
            .when("/ci-nc", {
                templateUrl: "Scripts/app/views/customers/ci-nc.html",
                controller: "customerCtrl"
            })
            .when("/ci-ec", {
                templateUrl: "Scripts/app/views/customers/ci-ec.html",
                controller: "customerCtrl"
            })
            .when("/bc", {
                templateUrl: "Scripts/app/views/customers/bc.html",
                controller: "customerCtrl"
            })
            .when("/bc-nb", {
                templateUrl: "Scripts/app/views/customers/bc-nb.html",
                controller: "customerCtrl"
            })
            .when("/bc-eb", {
                templateUrl: "Scripts/app/views/customers/bc-eb.html",
                controller: "customerCtrl"
            })
            .when("/it", {
                templateUrl: "Scripts/app/views/intake/intake.html",
                controller: "intakeCtrl"
            })
            .when("/it-19", {
                templateUrl: "Scripts/app/views/intake/it-19.html",
                controller: "intakeCtrl"
            })
            .when("/it-19-nr", {
                templateUrl: "Scripts/app/views/intake/it-19-nr.html",
                controller: "intakeCtrl"
            })
            .when("/it-19-or", {
                templateUrl: "Scripts/app/views/intake/it-19-or.html",
                controller: "intakeCtrl"
            })
            .when("/it-39", {
                templateUrl: "Scripts/app/views/intake/it-39.html",
                controller: "intakeCtrl"
            })
            .when("/it-39-nr", {
                templateUrl: "Scripts/app/views/intake/it-39-nr.html",
                controller: "intakeCtrl"
            })
            .when("/it-39-or", {
                templateUrl: "Scripts/app/views/intake/it-39-or.html",
                controller: "intakeCtrl"
            })
            .when("/it-ft", {
                templateUrl: "Scripts/app/views/intake/it-ft.html",
                controller: "intakeCtrl"
            })
            .when("/it-ft-nr", {
                templateUrl: "Scripts/app/views/intake/it-ft-nr.html",
                controller: "intakeCtrl"
            })
            .when("/it-ft-or", {
                templateUrl: "Scripts/app/views/intake/it-ft-or.html",
                controller: "intakeCtrl"
            })
            .when("/sp", {
                templateUrl: "Scripts/app/views/shipping/shipping.html",
                controller: "shippingCtrl"
            })
            .when("/te", {
                templateUrl: "Scripts/app/views/testing/testing.html",
                controller: "testingCtrl"
            })
            .otherwise({ redirectTo: "/" });
    }
})();
