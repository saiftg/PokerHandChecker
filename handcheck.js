
  // var Ranker = require('handranker');
  // var cards = ['3s', '3c', 'Ac', 'Ah', '3d'];
  // var result = Ranker.getHand(cards);

  // console.log(result);




  var win1 = [];
  var win2 = [];

  var tb1 = [];
  var tb2 = [];

  

  var c01 = "KC JC TC QC AC";
  var c02 = '9H 7H 8H 6H 5H';

  console.log("**************************************");

console.log("Player 1 Hand:  " + c01);
console.log("Player 2 Hand:  " + c02);



  var t01 = (c01.split(/(?!$)/u)) ;
  var t02 = (c02.split(/(?!$)/u)) ;



 for (var i = 0; i < t01.length; i++)
    if (t01[i] == 'A')
        t01[i] = "14";
 for (var i = 0; i < t01.length; i++)
    if (t01[i] == 'K')
        t01[i] = "13";
 for (var i = 0; i < t01.length; i++)
    if (t01[i] == 'Q')
        t01[i] = "12";
 for (var i = 0; i < t01.length; i++)
    if (t01[i] == 'J')
        t01[i] = "11";
 for (var i = 0; i < t01.length; i++)
    if (t01[i] == 'T')
        t01[i] = "10";


 for (var i = 0; i < t02.length; i++)
    if (t02[i] == 'A')
        t02[i] = "14";
 for (var i = 0; i < t02.length; i++)
    if (t02[i] == 'K')
        t02[i] = "13";
 for (var i = 0; i < t02.length; i++)
    if (t02[i] == 'Q')
        t02[i] = "12";
 for (var i = 0; i < t02.length; i++)
    if (t02[i] == 'J')
        t02[i] = "11";
 for (var i = 0; i < t02.length; i++)
    if (t02[i] == 'T')
        t02[i] = "10";

 


t01 = t01.sort();
t02 = t02.sort();

  for (let i=0; i <= t01.length; i++){
  	if (t01[i] ===  ' '){
  		t01.splice(0,2);
  		// console.log(t01);
  	}

  }

  for (let i=0; i <= t02.length; i++){
  	if (t02[i] ===  ' '){
  		t02.splice(0,2);
  		// console.log(t02);
  	}

  }

function sortNumber(a,b) {
    return a - b;
}




  console.log("**************************************");

  console.log(t01.sort(sortNumber));
  console.log(t02.sort(sortNumber));
  console.log("**************************************");



function checkHand1(){



	if (((t01[9]==t01[8])&&(t01[8]==t01[7])&&(t01[7]==t01[6])&&(t01[6]==t01[5])) && ((t01[4] - t01[0]) !== 4)){
		win1.push(95);
		tb1.push(parseInt(t01[4]));
		console.log('Player 1: Flush');
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if (((t01[9]==t01[8])&&(t01[8]==t01[7])&&(t01[7]==t01[6])&&(t01[6]==t01[5])) && (t01[4] == 14) && ((t01[4] - t01[0]) == 4)) {
		win1.push(99);
		tb1.push(parseInt(t01[4]));
		console.log('Player 1: Royal Flush');
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if (((t01[9]==t01[8])&&(t01[8]==t01[7])&&(t01[7]==t01[6])&&(t01[6]==t01[5])) && (t01[4] !== 14) && ((t01[4] - t01[0]) == 4)) {
		win1.push(98);
		tb1.push(parseInt(t01[4]));
		console.log('Player 1: Straight Flush');
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if (((t01[4] - t01[0]) == 4) && (t01[5] !== t01[9]) && (t01[4] !== 14) && ((t01[3] - t01[1]) == 2) && ((t01[3] - t01[2]) == 1)) {
		win1.push(94);
		tb1.push(parseInt(t01[4]));
		console.log('Player 1: Straight');
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if ((t01[0] == t01[3]) || (t01[1] == t01[4])) {
		win1.push(97);
		tb1.push(parseInt(t01[4]));
		console.log("Player 1: Four of a kind");
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if ((((t01[2]-t01[0]) == 0) && ((t01[4]-t01[3]) == 0)) || (((t01[1]-t01[0]) == 0) && ((t01[4]-t01[2]) == 0))){
		win1.push(96);
		tb1.push(parseInt(t01[4]));
		console.log("Player 1: Full House");
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if ((((t01[2]-t01[0]) == 0) && ((t01[4]-t01[3]) !== 0)) || (((t01[1]-t01[0]) !== 0) && ((t01[4]-t01[2]) == 0))){
		win1.push(93);	
		tb1.push(parseInt(t01[4]));			
		console.log("Player 1: Three of a kind ");
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if ((((t01[1]-t01[0]) == 0) && ((t01[3]-t01[2]) == 0)) || (((t01[3]-t01[2]) == 0) && ((t01[4]-t01[3]) == 0)) || (((t01[2]-t01[1]) == 0) && ((t01[4]-t01[3]) == 0)) || (((t01[1]-t01[0]) == 0) && ((t01[4]-t01[3]) == 0))){
		win1.push(92);
		tb1.push(parseInt(t01[4]));
		console.log("Player 1: Two Pairs");
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else if ((((t01[1]-t01[0]) == 0) || ((t01[2]-t01[1]) == 0) || ((t01[3]-t01[2]) == 0) || ((t01[4]-t01[3]) == 0)) && ((t01[4]-t01[0]) !== 4)){
		win1.push(91);
		tb1.push(parseInt(t01[4]));
		console.log("Player 1: One Pair");
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}else{
		win1.push(90);
		tb1.push(parseInt(t01[4]));
		console.log("Player 1: High card = " + t01[4]);
		console.log("High Card: " + tb1);
		console.log("Rank Score: " + win1);
	}


};


function checkHand2(){



	if (((t02[9]==t02[8])&&(t02[8]==t02[7])&&(t02[7]==t02[6])&&(t02[6]==t02[5])) && ((t02[4] - t02[0]) !== 4)){
		win2.push(95);
		tb2.push(parseInt(t02[4]));
		console.log('Player 2: Flush')
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if (((t02[9]==t02[8])&&(t02[8]==t02[7])&&(t02[7]==t02[6])&&(t02[6]==t02[5])) && (t02[4] == 14) && ((t02[4] - t02[0]) == 4)) {
		win2.push(99);
		tb2.push(parseInt(t02[4]));
		console.log('Player 2: Royal Flush');
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if (((t02[9]==t02[8])&&(t02[8]==t02[7])&&(t02[7]==t02[6])&&(t02[6]==t02[5])) && (t02[4] !== 14) && ((t02[4] - t02[0]) == 4)) {
		win2.push(98);
		tb2.push(parseInt(t02[4]));
		console.log('Player 2: Straight Flush');
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if (((t02[4] - t02[0]) == 4) && (t02[5] !== t02[9]) && (t02[4] !== 14) && ((t02[3] - t02[1]) == 2) && ((t02[3] - t02[2]) == 1)) {
		win2.push(94);
		tb2.push(parseInt(t02[4]));
		console.log('Player 2: Straight');
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if ((t02[0] == t02[3]) || (t02[1] == t02[4])) {
		win2.push(97);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: Four of a kind");
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if ((((t02[2]-t02[0]) == 0) && ((t02[4]-t02[3]) == 0)) || (((t02[1]-t02[0]) == 0) && ((t02[4]-t02[2]) == 0))){
		win2.push(96);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: Full House");
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if ((((t02[2]-t02[0]) == 0) && ((t02[4]-t02[3]) !== 0)) || (((t02[1]-t02[0]) !== 0) && ((t02[4]-t02[2]) == 0))){
		win2.push(93);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: Three of a kind ");
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if ((((t02[1]-t02[0]) == 0) && ((t02[3]-t02[2]) == 0)) || (((t02[3]-t02[2]) == 0) && ((t02[4]-t02[3]) == 0)) || (((t02[2]-t02[1]) == 0) && ((t02[4]-t02[3]) == 0)) || (((t02[1]-t02[0]) == 0) && ((t02[4]-t02[3]) == 0))){
		win2.push(92);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: Two Pairs");
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else if ((((t02[1]-t02[0]) == 0) || ((t02[2]-t02[1]) == 0) || ((t02[3]-t02[2]) == 0) || ((t02[4]-t02[3]) == 0)) && ((t02[4]-t02[0]) !== 4)){
		win2.push(91);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: One Pair");
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}else{
		win2.push(90);
		tb2.push(parseInt(t02[4]));
		console.log("Player 2: High card = " + t02[4]);
		console.log("High Card: " + tb2);
		console.log("Rank Score: " + win2);
	}


};

function whoWins(){

		checkHand1();
		  console.log("*****************");

		checkHand2();
		  console.log("*****************");


		if (win1[0] > win2[0]){
			console.log("WINNER : Player 1 ")
		}else if (win2[0] > win1[0]){
			console.log("WINNER : Player 2 ")
		}else if ((win1[0]-win2[0] == 0) && (tb1[0] > tb2[0])){
			console.log("WINNER : Player 1 wins with high card ")
		}else if ((win1[0]-win2[0] == 0) && (tb2[0] > tb1[0])){
			console.log("WINNER : Player 2 wins with high card ")
		}else{
			console.log("SPLIT: Nobody wins!");
		}
		  console.log("**************************************");
		

}






whoWins();











