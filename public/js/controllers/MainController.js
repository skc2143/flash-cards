app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	var selectedCategory = 'Reset';

	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];

	$scope.getCategoryCards = function (category) {
		selectedCategory = category;
	};
	
	$scope.flashCards = function () {
		console.log("I just got called!!");
		if(selectedCategory === 'Reset') {
			return FlashCardsFactory.getFlashCards();
		} else {
			return FlashCardsFactory.getFlashCards(selectedCategory);
		}
	};

	$scope.reset = function () {
		selectedCategory = 'Reset';
	};

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