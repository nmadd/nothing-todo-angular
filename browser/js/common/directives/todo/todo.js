app.directive('todo', (TodosFactory) => {

    return {
        restrict: 'E',
        scope: {
            todo: '=',
            todos: '='
        },
        templateUrl: 'js/common/directives/todo/todo.html',
        link: (scope, elem, attr) => {
            var selectedTodo;
            scope.moveIt = () => {
                console.log('moving')
                scope.todos = scope.todos.filter(todo => todo !== selectedTodo)
            }
            scope.copyIt = (indx) => {
                selectedTodo = indx;
            }
            scope.completeTodo = (completedTodo) => {
                var indx = scope.todos.indexOf(completedTodo);
                scope.todos.splice(indx, 1);
                TodosFactory.completeTodo(completedTodo)
            };


        }

    };

});
