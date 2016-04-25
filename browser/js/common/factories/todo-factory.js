app.factory('TodosFactory', ($http)=>{
	var factory = {};

	factory.getAllTodos = ()=>{
		return $http({
			method: 'GET',
			url: '/api/todos/'
		})
		.then(response => response.data)
	}


	return factory;
});