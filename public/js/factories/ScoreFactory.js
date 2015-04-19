app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function(category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            $http.get('\cards', {params: queryParams}).then(function (response) {
                return response.data;
            });
        }
    };
});

app.factory('ScoreFactory', function () {
    return {
        correct: 0,
        incorrect: 0
    };
});