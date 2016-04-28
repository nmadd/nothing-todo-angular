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

    factory.createTodo = (todoText, dissapearsIn) => {
        return AuthService.getLoggedInUser()
        .then(response => {
            var user_id = response._id;
            var today = new Date();
            var now = moment(today);
            var expiry = moment(today).add(dissapearsIn,'m');
	        return $http({
	            method: 'POST',
	            url: 'api/todos/',
	            data: {
	                text: todoText,
	                date_created: now,
	                user: user_id,
	                expiration_date: expiry
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
