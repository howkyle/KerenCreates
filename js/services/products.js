app.factory('products', ['$http', function($http){
	return $http.get('/json/products.json')
	.success(function(data){
		return data;
	})
	.error(function(data){
		return data;
	});
}]);