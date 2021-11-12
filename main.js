const calcSubmit = document.getElementById('updateScore');
const train1Qty = document.getElementById('train1');
const train2Qty = document.getElementById('train2');
const route3 = document.getElementsByName('train3');
const route4= document.getElementsByName('train4');
const route5= document.getElementsByName('train5');
const route6= document.getElementsByName('train6');

const finalText = document.getElementById('finalScore');

function sumTrainScores(){
  let finalScore=0;
  let train1Score=Number(train1Qty.value);
  let train2Score=Number(train2Qty.value)*2;
  let train3Score=0;
  let train4Score=0;
  let train5Score=0;
  let train6Score=0;

  for(let i = 0; i < route3.length; i++) {
    if(route3[i].checked)
      train3Score=i*4;
  }
  for(let i = 0; i < route4.length; i++) {
    if(route4[i].checked)
      train4Score=i*7;
  }
  for(let i = 0; i < route5.length; i++) {
    if(route5[i].checked)
      train5Score=i*10;
  }
  for(let i = 0; i < route6.length; i++) {
    if(route6[i].checked)
      train6Score=i*15;
  }
  console.log('TrainScores');
  console.log(train1Score);
  console.log(train2Score);
  console.log(train3Score);
  console.log(train4Score);
  console.log(train5Score);
  console.log(train6Score);
  finalScore=train1Score+train2Score+train3Score+train4Score+train5Score+train6Score;
  console.log(finalScore);

  document.getElementById('finalScore').innerHTML = finalScore;
  
}
calcSubmit.addEventListener('click',sumTrainScores);
