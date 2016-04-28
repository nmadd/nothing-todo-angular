app.controller('HomeController', ($scope, theTodos, TodosFactory)=> {
	var todos = theTodos;
	$scope.now = moment();
	$scope.getTodos = ()=> {
		return todos;
	};
	$scope.createTodo = (todoText, dissNum)=> {
		TodosFactory.createTodo(todoText, dissNum)
		.then(todo => {
			todos.push(todo);
			$scope.todoText = '';
			$scope.dissNum = '';
		})
	};
	$scope.completeTodo = (completedTodo) => {
		var indx = todos.indexOf(completedTodo);
		todos.splice(indx, 1);
		TodosFactory.completeTodo(completedTodo)
	};
});