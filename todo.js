angular.module('todoApp', [])
  .controller('TodoListController',              
              
  function() {
    var todoList = this;
    todoList.todos = [
];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, desc:todoList.todoDesc, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });

$filter('todoOrder')(todoList.todos, expression, reverse)

function MainCtrl($scope, dateFilter) {
    $scope.date = new Date();

    $scope.$watch('date', function (date)
    {
        $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
    });

    $scope.$watch('dateString', function (dateString)
    {
        $scope.date = new Date(dateString);
    });
}   