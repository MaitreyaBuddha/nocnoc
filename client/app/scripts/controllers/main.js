'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
 angular.module('webappApp')
 .controller('MainCtrl', function ($scope, $location) {

 	$('#haightBtn').hover(				
 		function () {
 			$('#homeBG1').addClass('homeBGHover');    
 		}, 

 		function () {
 			$('#homeBG1').removeClass('homeBGHover');    
 		}
 		);
 	$('#broadwayBtn').hover(				
 		function () {
 			$('#homeBG2').addClass('homeBGHover');    
 		}, 

 		function () {
 			$('#homeBG2').removeClass('homeBGHover');    
 		}
 		);
       $scope.changeView = function(view){
            $location.path(view); 
        }


 });
