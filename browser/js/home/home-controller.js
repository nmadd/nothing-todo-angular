app.controller('HomeController', ($scope, theTodos, TodosFactory)=> {
	// var todos = theTodos;
	$scope.todos = theTodos;
	$scope.now = moment();
	var selectedTodo;
	//Filters out todos to remove new copied todo created by angular-drag-and-drop-list
	$scope.moveIt = () => {
		$scope.todos = $scope.todos.filter(todo => todo !== selectedTodo)
	}
	$scope.copyIt = (indx) => {
		selectedTodo = indx;
	}
	
	var currentlyEditable = {};
	$scope.isEditable = (id) => {
		return currentlyEditable[id];
	}

	$scope.makeEditable = (id) => {
		console.log('editable id', id);
		currentlyEditable[id] = true;
		console.log('currently editable', currentlyEditable);
	};

	$scope.createTodo = (todoText, dissNum, dissTime)=> {
		TodosFactory.createTodo(todoText, dissNum, dissTime)
		.then(todo => {
			$scope.todos.push(todo);
			$scope.todoText = '';
			$scope.dissNum = '';

		})
	};
	$scope.completeTodo = (completedTodo) => {
		var indx = $scope.todos.indexOf(completedTodo);
		$scope.todos.splice(indx, 1);
		TodosFactory.completeTodo(completedTodo)
	};
});