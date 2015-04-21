app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(function (data) {
			$scope.flashCards =  data;
		});
	};

	$scope.getCategoryCards();

	$scope.getAllCards = function () {
        FlashCardsFactory.getFlashCards().then(function (data) {
        	$scope.flashCards = data;
        });
    };

    $scope.getAllCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
		
		if(answer.correct) {
			ScoreFactory.correct++;
		} else {
			ScoreFactory.incorrect++;
		}
	};
});

app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
});