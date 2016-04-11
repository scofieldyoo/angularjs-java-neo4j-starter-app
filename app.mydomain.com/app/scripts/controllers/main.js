(function () {
    'use strict';

    angular.module('app').controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {

        var vm = this;

        vm.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        vm.init = init;

        vm.init();

        // -------------------------------------------------------------------------------------------------------------
        // //// FUNCTIONS
        // -------------------------------------------------------------------------------------------------------------

        function init() {
        }
    }
})();
