app
    .directive('onError', function() {
    return {
        restrict:'A',
        link: function(scope, element, attr) {

            if (scope.photoProduct !== undefined && scope.$index === 0 && scope.$last) {
                    element.on('error', function (err) {
                        element.attr('src', attr.onError)
                        element.addClass('img-product-center')
                    })
            } else {
                element.on('error', function (err) {
                    element.attr('src', attr.onError)
                })
            }

            attr.ngSrc === undefined ? element.attr('src', attr.onError) : null
        }
    }
})