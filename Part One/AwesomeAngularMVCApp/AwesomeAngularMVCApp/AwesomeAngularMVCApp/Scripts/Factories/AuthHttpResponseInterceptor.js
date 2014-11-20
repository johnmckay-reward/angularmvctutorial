var AuthHttpResponseInterceptor = function($q, $location) {
    return {
        response: function (response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login').search('returnUrl', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location'];