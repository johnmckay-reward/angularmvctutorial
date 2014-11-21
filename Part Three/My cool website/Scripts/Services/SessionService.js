var SessionService = function($cookies){
	this.token = undefined;
	
	this.getToken = function(){
		if(!$cookies.awesomeAngularWebAppToken){
			if(!this.token){
				return undefined;
			}
			this.setToken(this.token);			
		}
		return $cookies.awesomeAngularWebAppToken;
	}
	
	this.setToken = function(token){
		this.token = token;
		$cookies.awesomeAngularWebAppToken = token;
	}
	
	this.apiUrl = 'http://localhost:5586';
}

SessionService.$inject = ['$cookies'];