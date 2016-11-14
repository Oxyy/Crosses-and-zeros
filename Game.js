var gameField = [5, 5, 5, 5, 5, 5, 5, 5, 5];
var clickOnCell = nextTurn;
function nextTurn(clickedCell) {
	if (!document.getElementById(clickedCell).children.length) {
		var imgX = document.createElement('img');
		imgX.src = "X.png";
		document.getElementById(clickedCell).appendChild(imgX);
		
		gameField[clickedCell[1] - 1] = 1;
		isGameOver(gameField, clickedCell);
	}
}

function isGameOver(gameField, clickedCell) {
	if (gameField[0] + gameField[1] + gameField[2] == 3 ||
		gameField[3] + gameField[4] + gameField[5] == 3 ||
		gameField[6] + gameField[7] + gameField[8] == 3 ||
		
		gameField[0] + gameField[3] + gameField[6] == 3 ||
		gameField[1] + gameField[4] + gameField[7] == 3 ||
		gameField[2] + gameField[5] + gameField[8] == 3 ||
		
		gameField[0] + gameField[4] + gameField[8] == 3 ||
		gameField[2] + gameField[4] + gameField[6] == 3) {
			alert('Youe Won! :)');
			blockCells();
		} else {
			botResponse(clickedCell);
			
			if (gameField[0] + gameField[1] + gameField[2] == 0 ||
				gameField[3] + gameField[4] + gameField[5] == 0 ||
				gameField[6] + gameField[7] + gameField[8] == 0 ||
						
				gameField[0] + gameField[3] + gameField[6] == 0 ||
				gameField[1] + gameField[4] + gameField[7] == 0 ||
				gameField[2] + gameField[5] + gameField[8] == 0 ||
						
				gameField[0] + gameField[4] + gameField[8] == 0 ||
				gameField[2] + gameField[4] + gameField[6] == 0) {
						alert('Youe Loose! :(');
						blockCells();
			}
		}		
}

function botResponse(clickedCell) {
	var imgO = document.createElement('img');
		imgO.src = "O.png";
	var randCell = clickedCell;
	
	for(var i = 0; (!!document.getElementById(randCell).children.length && i < 9); i++) {
		randCell = 'a' + (1 + Math.floor(Math.random() * 9));
	}
	
	if(!document.getElementById(randCell).children.length) {
		document.getElementById(randCell).appendChild(imgO);
		gameField[randCell[1] - 1] = 0;
	}
}

function blockCells() {
	clickOnCell = function() { alert('You can\'t move anymore. Game is over.'); }
}

function refresh() {
	document.getElementById('a1').innerHTML = '';
	document.getElementById('a2').innerHTML = '';
	document.getElementById('a3').innerHTML = '';
	document.getElementById('a4').innerHTML = '';
	document.getElementById('a5').innerHTML = '';
	document.getElementById('a6').innerHTML = '';
	document.getElementById('a7').innerHTML = '';
	document.getElementById('a8').innerHTML = '';
	document.getElementById('a9').innerHTML = '';
	clickOnCell = nextTurn;
	gameField = [5, 5, 5, 5, 5, 5, 5, 5, 5];
}