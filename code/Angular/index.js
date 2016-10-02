angular.module('shop',[])


.service('cart',function(){
	
	return [

		{
			id: 1,
			name: 'iphone5',
			quantity: '3',
			price: 4000
		},
		{
			id: 2,
			name: 'iphone6',
			quantity: '30',
			price: 6000
		},
		{
			id: 3,
			name: 'Mac',
			quantity: '5',
			price: 14000
		},
		{
			id: 4,
			name: 'ipad',
			quantity: '10',
			price: 3000
		}
	];
})


.controller('myCtrl', function ($scope,cart) {


	$scope.cart = cart;


	$scope.totalPrice = function (){
		var total = 0;

		angular.forEach($scope.cart, function(item,key){
			total += item.price * item.quantity;
		});

		return total;
	}

	$scope.totalQuantity = function () {
		var total=0;

		angular.forEach($scope.cart, function(item,key){
			total += parseInt(item.quantity);
		});

		return total;
	}

	var findIndex = function(id) {

		var index = -1;
		
		angular.forEach($scope.cart, function(item,key){
 			
 			if (item.id===id)
 			{
 				index = key;
 			}
 			return;
		});
		return index;
	}


	$scope.remove = function(id){

		var index=findIndex(id);

		if (index!==-1)
		{
			$scope.cart.splice(index,1);
		}
	}

	$scope.add = function(id){
		var index= findIndex(id);

		if (index!==-1)
		{
			++$scope.cart[index].quantity;
		}
	}

	$scope.reduce = function(id){

		var index= findIndex(id);

		if (index!==-1)
		{

			var item = $scope.cart[index];

			if (item.quantity>1)
			{
				--item.quantity;
			} else {
				var key = confirm("Do you want to earse this item?");

				if (key)
				{
					$scope.remove(id);
				} 
			}
			
		}
	}

	$scope.$watch('cart', function(newValue,oldValue){
		angular.forEach(newValue, function (item,key) {
			if(item.quantity<1)
			{
				var key = confirm("Do you want to earse this item?");
				if(key)
				{
					$scope.remove(item.id);
				} else {
					$scope.cart = oldValue;
				}
				return;
			}
		})
	},true)

});