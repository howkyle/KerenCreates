app.controller('ProductController', ['$scope','products', function($scope, products){
	products.success(function(data){
		console.log(data);
		$scope.products =data;
		$scope.productGroup;
	});
}]);