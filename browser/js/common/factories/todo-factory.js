app.factory('TodosFactory', ($http, AuthService) => {
    var factory = {};



    factory.getTodos = () => {
    	return AuthService.getLoggedInUser()
        .then(response => {
            var user_id = response._id;
	        return $http({
                method: 'GET',
                url: `/api/todos/${user_id}`
            })
        })
        .then(response => response.data)  
    };

    factory.createTodo = (todoText) => {
        return AuthService.getLoggedInUser()
        .then(response => {
            var user_id = response._id;
            var today = new Date();
	        return $http({
	            method: 'POST',
	            url: 'api/todos/',
	            data: {
	                text: todoText,
	                date_created: today,
	                user: user_id
	            }
	        })
        })
        .then(response => response.data)
    };

    factory.completeTodo = (todo) => {
    	var todo_id = todo._id;
    	$http({
    		method: 'PUT',
    		url: `/api/todos/${todo_id}`
    	})
    };


    return factory;
});
