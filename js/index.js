angular.module("App",[])
.controller("Todo", function($scope)
           {
  $scope.todo=[{name:"Долги"},
              {name:"Зарядка"},
              {name:"Учеба"},
              {name:"Жизнь"}];
  $scope.archive= [];
   
$scope.Add=function()
{
  $scope.todo.push({name:$scope.newItem});
  $scope.newItem="";
}

$scope.Clear= function()
{
  for(var i=0;i<$scope.todo.length;i++)
    {
      if($scope.todo[i].done)
        {
          $scope.archive.push($scope.todo[i]);
          $scope.todo.splice(i,1);
          i--;
        }
    }
}
});