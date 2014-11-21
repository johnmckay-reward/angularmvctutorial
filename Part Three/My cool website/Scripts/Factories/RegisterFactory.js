var RegisterFactory = function($http, $q, SessionService){
	return function(email, password, confirmPassword){	
		var result = $q.defer();
	
		$http({
			method: 'POST',
			url: SessionService.apiUrl + '/api/Account/register',
			data: {Email: email, Password: password, ConfirmPassword: confirmPassword},
			headers: {'Content-Type': 'application/json'}
		})
		.success(function(response){
			result.resolve(response);
		})
		.error(function(response){
			result.reject(response);
		});
		
		return result.promise; 
	}

}

RegisterFactory.$inject = ['$http', '$q', 'SessionService'];