app.controller('MainController', function ($scope, FlashCardsFactory) {

	var selectedCategory = 'Reset';
	var flash = {};

	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];

	$scope.getCategoryCards = function (category) {
		selectedCategory = category;
	}

	$scope.flashCards = function() {
		if(selectedCategory === 'Reset') {
			return FlashCardsFactory.getFlashCards();
		} else {
			return FlashCardsFactory.getFlashCards(selectedCategory);
		}
	};

	$scope.reset = function() {
		selectedCategory = 'Reset';
	}

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});