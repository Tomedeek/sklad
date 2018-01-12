app.filter('resultSearchFilter', function () {
    return function (products, searchProduct) {
        let result = [];

        if (searchProduct !== null && searchProduct !== '' && searchProduct !== undefined) {

            for (let i = 0; i < products.length; i++) {

                if (products[i].article.indexOf(searchProduct) > -1 ) {
                    result.push(products[i]);
                }
            }
            return result.length ? result : 'По вашему запросу ничего не найдено!';

        } else {
            return 'По вашему запросу ничего не найдено!';
        }
    }
})