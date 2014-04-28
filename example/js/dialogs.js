/**
 * Note:
 * 		1. This version requires Angular UI Bootstrap >= v0.10.0 with templates
 *      2. This version requires angular-translate for i18n support
 */

//== Controllers =============================================================//

angular.module('dialogs.controllers',['ui.bootstrap.modal','pascalprecht.translate'])

	/**
	 * Default translations in English.
	 * 
	 * Use angular-translate's $translateProvider to provide translations in an
	 * alternate language.
	 *
	 * $translateProvider.translations('[lang]',{[translations]});
	 * To use alternate translations set the preferred language to your desired
	 * language.
	 * $translateProvider.preferredLanguage('[lang]');
	 */
	.config(['$translateProvider',function($translateProvider){
		$translateProvider.translations('en-US',{
			DIALOGS_ERROR: "Error",
			DIALOGS_ERROR_MSG: "An unknown error has occurred.",
			DIALOGS_CLOSE: "Close",
			DIALOGS_PLEASE_WAIT: "Please Wait",
			DIALOGS_PLEASE_WAIT_ELIPS: "Please Wait...",
			DIALOGS_PLEASE_WAIT_MSG: "Waiting on operation to complete.",
			DIALOGS_PERCENT_COMPLETE: "% Complete",
			DIALOGS_NOTIFICATION: "Notification",
			DIALOGS_NOTIFICATION_MSG: "Unknown application notification.",
			DIALOGS_CONFIRMATION: "Confirmation",
			DIALOGS_CONFIRMATION_MSG: "Confirmation required.",
			DIALOGS_OK: "OK",
			DIALOGS_YES: "Yes",
			DIALOGS_NO: "No"
		});

		$translateProvider.preferredLanguage('en-US');
	}]) // end config


	/**
	 * Error Dialog Controller 
	 */
	.controller('errorDialogCtrl',['$scope','$modalInstance','$translate','header','msg',function($scope,$modalInstance,$translate,header,msg){
		//-- Variables -----//

		$scope.header = (angular.isDefined(header)) ? header : $translate.instant('DIALOGS_ERROR');
		$scope.msg = (angular.isDefined(msg)) ? msg : $translate.instant('DIALOGS_ERROR_MSG');

		//-- Methods -----//
		
		$scope.close = function(){
			$modalInstance.close();
			$scope.$destroy();
		}; // end close
	}]) // end ErrorDialogCtrl
	
	/**
	 * Wait Dialog Controller 
	 */
	.controller('waitDialogCtrl',['$scope','$modalInstance','$translate','$timeout','header','msg','progress',function($scope,$modalInstance,$translate,$timeout,header,msg,progress){
		//-- Variables -----//

		$scope.header = (angular.isDefined(header)) ? header : $translate.instant('DIALOGS_PLEASE_WAIT_ELIPS');
		$scope.msg = (angular.isDefined(msg)) ? msg : $translate.instant('DIALOGS_PLEASE_WAIT_MSG');
		$scope.progress = (angular.isDefined(progress)) ? progress : 100;

		//-- Listeners -----//
		
		// Note: used $timeout instead of $scope.$apply() because I was getting a $$nextSibling error
		
		// close wait dialog
		$scope.$on('dialogs.wait.complete',function(){
			$timeout(function(){ $modalInstance.close(); $scope.$destroy(); });
		}); // end on(dialogs.wait.complete)
		
		// update the dialog's message
		$scope.$on('dialogs.wait.message',function(evt,args){
			$scope.msg = (angular.isDefined(args.msg)) ? args.msg : $scope.msg;
		}); // end on(dialogs.wait.message)
		
		// update the dialog's progress (bar) and/or message
		$scope.$on('dialogs.wait.progress',function(evt,args){
			$scope.msg = (angular.isDefined(args.msg)) ? args.msg : $scope.msg;
			$scope.progress = (angular.isDefined(args.progress)) ? args.progress : $scope.progress;
		}); // end on(dialogs.wait.progress)
		
		//-- Methods -----//
		
		$scope.getProgress = function(){
			return {'width': $scope.progress + '%'};
		}; // end getProgress
	}]) // end WaitDialogCtrl
	
	/**
	 * Notify Dialog Controller 
	 */
	.controller('notifyDialogCtrl',['$scope','$modalInstance','$translate','header','msg',function($scope,$modalInstance,$translate,header,msg){
		//-- Variables -----//

		$scope.header = (angular.isDefined(header)) ? header : $translate.instant('DIALOGS_NOTIFICATION');
		$scope.msg = (angular.isDefined(msg)) ? msg : $translate.instant('DIALOGS_NOTIFICATION_MSG');

		//-- Methods -----//
		
		$scope.close = function(){
			$modalInstance.close();
			$scope.$destroy();
		}; // end close
	}]) // end WaitDialogCtrl
	
	/**
	 * Confirm Dialog Controller 
	 */
	.controller('confirmDialogCtrl',['$scope','$modalInstance','$translate','header','msg',function($scope,$modalInstance,$translate,header,msg){
		//-- Variables -----//

		$scope.header = (angular.isDefined(header)) ? header : $translate.instant('DIALOGS_CONFIRMATION');
		$scope.msg = (angular.isDefined(msg)) ? msg : $translate.instant('DIALOGS_CONFIRMATION_MSG');

		//-- Methods -----//
		
		$scope.no = function(){
			$modalInstance.dismiss('no');
		}; // end close
		
		$scope.yes = function(){
			$modalInstance.close('yes');
		}; // end yes
	}]); // end ConfirmDialogCtrl / dialogs.controllers
	
	
//== Services ================================================================//

angular.module('dialogs.services',['ui.bootstrap.modal','dialogs.controllers'])

	.provider('dialogs',[function(){
		var b = true; // backdrop
		var k = true; // keyboard
		var w = 'dialogs-default'; // windowClass

		/**
		 * Use Backdrop
		 * 
		 * Sets the use of the modal backdrop.  Either to have one or not and
		 * whether or not it responds to mouse clicks ('static' sets the 
		 * backdrop to true and does not respond to mouse clicks).
		 *
		 * @param	val 	mixed	(true, false, 'static')
		 */
		this.useBackdrop = function(val){ // possible values : true, false, 'static'
			if(angular.isDefined(val))
				b = val;
		}; // end useStaticBackdrop

		/**
		 * Use ESC Close
		 * 
		 * Sets the use of the ESC (escape) key to close modal windows.
		 *
		 * @param	val 	boolean
		 */
		this.useEscClose = function(val){ // possible values : true, false
			if(angular.isDefined(val))
				k = val;
		}; // end useESCClose

		/**
		 * Use Class
		 *
		 * Sets the additional CSS window class of the modal window template.
		 *
		 * @param	val 	string
		 */
		this.useClass = function(val){
			if(angular.isDefined(val))
				w = val;
		}; // end useClass

		this.$get = ['$modal',function ($modal){
			return {
				error : function(header,msg){
					return $modal.open({
						templateUrl : '/dialogs/error.html',
						controller : 'errorDialogCtrl',
						backdrop: b,
						keyboard: k,
						windowClass: w,
						resolve : {
							header : function() { return angular.copy(header); },
							msg : function() { return angular.copy(msg); }
						}
					}); // end modal.open
				}, // end error
				
				wait : function(header,msg,progress){
					return $modal.open({
						templateUrl : '/dialogs/wait.html',
						controller : 'waitDialogCtrl',
						backdrop: b,
						keyboard: k,
						windowClass: w,
						resolve : {
							header : function() { return angular.copy(header); },
							msg : function() { return angular.copy(msg); },
							progress : function() { return angular.copy(progress); }
						}
					}); // end modal.open
				}, // end wait
				
				notify : function(header,msg){
					return $modal.open({
						templateUrl : '/dialogs/notify.html',
						controller : 'notifyDialogCtrl',
						backdrop: b,
						keyboard: k,
						windowClass: w,
						resolve : {
							header : function() { return angular.copy(header); },
							msg : function() { return angular.copy(msg); }
						}
					}); // end modal.open
				}, // end notify
				
				confirm : function(header,msg){
					return $modal.open({
						templateUrl : '/dialogs/confirm.html',
						controller : 'confirmDialogCtrl',
						backdrop: b,
						keyboard: k,
						windowClass: w,
						resolve : {
							header : function() { return angular.copy(header); },
							msg : function() { return angular.copy(msg); }
						}
					}); // end modal.open
				}, // end confirm
				
				create : function(url,ctrlr,data){
					return $modal.open({
						templateUrl : url,
						controller : ctrlr,
						keyboard : k,
						backdrop : b,
						windowClass: w,
						resolve : {
							data : function() { return angular.copy(data); }
						}
					}); // end modal.open
				} // end create
			}; // end return
		}]; // end $get
	}]); // end provider

//== Module ==================================================================//

angular.module('dialogs.main',['dialogs.services','ngSanitize']) // requires angular-sanitize.min.js (ngSanitize) //code.angularjs.org/1.2.1/angular-sanitize.min.js
	
	// Add default templates via $templateCache
	.run(['$templateCache','$interpolate',function($templateCache,$interpolate){
    
    	// get interpolation symbol (possible that someone may have changed it in their application instead of using '{{}}')
    	var startSym = $interpolate.startSymbol();
    	var endSym = $interpolate.endSymbol();
    
    	$templateCache.put('/dialogs/error.html','<div class="modal-header dialog-header-error"><button type="button" class="close" ng-click="close()">&times;</button><h4 class="modal-title text-danger"><span class="glyphicon glyphicon-warning-sign"></span> <span ng-bind-html="header"></span></h4></div><div class="modal-body text-danger" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close()">'+startSym+'"DIALOGS_CLOSE" | translate'+endSym+'</button></div>');
    	$templateCache.put('/dialogs/wait.html','<div class="modal-header dialog-header-wait"><h4 class="modal-title"><span class="glyphicon glyphicon-time"></span> '+startSym+'"DIALOGS_PLEASE_WAIT" | translate'+endSym+'</h4></div><div class="modal-body"><p ng-bind-html="msg"></p><div class="progress progress-striped active"><div class="progress-bar progress-bar-info" ng-style="getProgress()"></div><span class="sr-only">'+startSym+'progress'+endSym+''+startSym+'"DIALOGS_PERCENT_COMPLETE" | translate'+endSym+'</span></div></div>');
    	$templateCache.put('/dialogs/notify.html','<div class="modal-header dialog-header-notify"><button type="button" class="close" ng-click="close()" class="pull-right">&times;</button><h4 class="modal-title text-info"><span class="glyphicon glyphicon-info-sign"></span> '+startSym+'header'+endSym+'</h4></div><div class="modal-body text-info" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="close()">'+startSym+'"DIALOGS_OK" | translate'+endSym+'</button></div>');
    	$templateCache.put('/dialogs/confirm.html','<div class="modal-header dialog-header-confirm"><button type="button" class="close" ng-click="no()">&times;</button><h4 class="modal-title"><span class="glyphicon glyphicon-check"></span> '+startSym+'header'+endSym+'</h4></div><div class="modal-body" ng-bind-html="msg"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="yes()">'+startSym+'"DIALOGS_YES" | translate'+endSym+'</button><button type="button" class="btn btn-primary" ng-click="no()">'+startSym+'"DIALOGS_NO" | translate'+endSym+'</button></div>');
	}]); // end run / dialogs