app.filter('searchFilter', function () {
        return function (products, searchProduct) {
            let result = [];

            if (searchProduct !== null && searchProduct !== '' ) {

                for (let i = 0; i < products.length; i++) {

                    if (products[i].article.indexOf(searchProduct) > -1 ) {
                        result.push(products[i]);
                    }
                }
                // return false;
                return result.length ? result : [{message: "За вашим запитом нічого не знайдено!"}];

            } else {
                return false;
            }
        }
    })