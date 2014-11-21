var ValuesController = function($scope, GetValuesFactory, SessionService){
	$scope.values = [];
	$scope.error = {
		message: undefined
	};
	
	$scope.getValues = function(){
		GetValuesFactory()
		.then(function(response){
			$scope.values = response;
		}, function(response){
			$scope.error.message = response.Message;
		});
	}
}
ValuesController.$inject = ['$scope', 'GetValuesFactory', 'SessionService'];