var app = angular.module("app", ["ngRoute"]);
var tasks = TaskFactory.get();
var id = $routeParams.taskId;
$scope.task = tasks[id];
$scope.task=TaskFactory.get()[$routeParams.taskId];

export const Login = () => {
  
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Faça o seu Login!</h1>
  `;
  return rootElement;
};