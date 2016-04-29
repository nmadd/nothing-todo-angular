app.directive('todo', () => {

    return {
        restrict: 'E',
        scope: {
            todo: '='
        },
        templateUrl: 'js/common/directives/todo/todo.html',
        link: (scope, elem, attr) => {

            

        }

    };

});
