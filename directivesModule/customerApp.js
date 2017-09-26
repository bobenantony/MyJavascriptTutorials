var app = angular.module('directivesModule', []);

app.controller('CustomersController', ['$scope', function ($scope) {
    var counter = 0;
    $scope.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
    };

    $scope.customers = [
        {
            name: 'David',
            street: '1234 Anywhere St.'
        },
        {
            name: 'Tina',
            street: '1800 Crest St.'
        },
        {
            name: 'Michelle',
            street: '890 Main St.'
        }
    ];

    $scope.addCustomer = function () {
        counter++;
        $scope.customers.push({
            name: 'New Customer' + counter,
            street: counter + ' Cedar Point St.'
        });
    };

    $scope.changeData = function () {
        counter++;
        $scope.customer = {
            name: 'James',
            street: counter + ' Cedar Point St.'
        };
    };
}]);

angular.module('directivesModule').directive('mySharedScope', function () {
    return {
        template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
    };
});

app.directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});

angular.module('directivesModule').directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Name: {{ name }}'
    };
});

angular.module('directivesModule').directive('myIsolatedScopeWithModel', function () {
    return {
        scope: {
            customers: '=' //Two-way data binding
        },
        template: '<ul><li ng-repeat="customer in customers">Name : {{ customer.name }} , Street : {{customer.street }} </li></ul>'
    };
});

angular.module('directivesModule').directive('myIsolatedScopeWithModelAndFunction', function () {
    return {
        scope: {
            datasource: '=',
            action: '&'
        },
        template: '<ul><li ng-repeat="prop in datasource">{{ prop }}</li></ul> ' +
        '<button ng-click="action()">Change Data</button>'
    };
});