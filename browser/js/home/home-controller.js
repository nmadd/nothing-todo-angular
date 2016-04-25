app.controller('HomeController', ($scope, theTodos, TodosFactory)=> {
	var todos = theTodos;
	$scope.getTodos = ()=> {
		return todos;
	}
	$scope.createTodo = (todoText)=> {
		TodosFactory.createTodo(todoText)
		.then(todo => {
			todos.push(todo);
		})
	}
});