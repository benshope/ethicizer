'use strict';

/* Controllers */


function CompaniesCtrl($scope, $http) {
    $scope.chartTitle = "Company Name";
    $scope.chartWidth = 500;
    $scope.chartHeight = 320;
    $scope.chartData = [
    ['Democrat',     60],
    ['Republican',      40]
    ];

    $scope.deleteRow = function (index) {
    $scope.chartData.splice(index, 1);
    };
    $scope.addRow = function () {
    $scope.chartData.push([]);
    };
    $scope.selectRow = function (index) {
    $scope.selected = index;
    };
    $scope.rowClass = function (index) {
    return ($scope.selected === index) ? "selected" : "";
    };

    $http.get('companies/companies.json').success(function(data) {
        $scope.companies = data;
    });
}

function CompanyCtrl($scope, $routeParams) {
  $scope.companyId = $routeParams.companyId;
}