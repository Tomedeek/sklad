app.directive('stepBack', function stepBack () {
    return{
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            element.bind('click', function () {
                history.back();
            })
        }
    }
})