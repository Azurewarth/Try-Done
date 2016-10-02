angular.module('myApp',[])


.service('product',function(){
	
	return [

		{
			id: 111,
			name: 'iphone5',
			quantity: '3',
			price: 4000
		},
		{
			id: 212,
			name: 'iphone6',
			quantity: '30',
			price: 6000
		},
		{
			id: 345,
			name: 'Mac',
			quantity: '5',
			price: 14000
		},
		{
			id: 467,
			name: 'ipad',
			quantity: '10',
			price: 3000
		}
	];
})


.controller('myCtrl', function ($scope,product) {


	$scope.product = product;

	$scope.orderType = '';

	$scope.order = '-';

	$scope.orderChange = function(type){
		$scope.orderType = type;

		if ($scope.order === '')
		{
			$scope.order = '-';
		} else {
			$scope.order = '';
		}
	}


});