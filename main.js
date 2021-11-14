const calcSubmit = document.getElementById("updateScore");
const refreshPage = document.getElementById("resetScores");
const train1Qty = document.getElementById("train1");
const train2Qty = document.getElementById("train2");
const route3 = document.getElementsByName("train3");
const route4 = document.getElementsByName("train4");
const route5 = document.getElementsByName("train5");
const route6 = document.getElementsByName("train6");
const longestRoute = document.getElementById("longestRoute");
const destPoints = document.getElementsByName("destScore");
const trainScoreText = document.getElementById("trainScoreAll");
const destinationScoreText = document.getElementById("destScoreAll");
const longestRouteText = document.getElementById("longestRouteResults");
const finalText = document.getElementById("finalScore");

function sumTrainScores() {
  let finalScore = 0;
  let trainTotalScore = 0;
  let train1Score = Number(train1Qty.value);
  let train2Score = Number(train2Qty.value) * 2;
  let train3Score = 0;
  let train4Score = 0;
  let train5Score = 0;
  let train6Score = 0;
  let longestRouteScore = 0;
  let destScore = 0;

  for (let i = 0; i < route3.length; i++) {
    if (route3[i].checked) train3Score = i * 4;
  }
  for (let i = 0; i < route4.length; i++) {
    if (route4[i].checked) train4Score = i * 7;
  }
  for (let i = 0; i < route5.length; i++) {
    if (route5[i].checked) train5Score = i * 10;
  }
  for (let i = 0; i < route6.length; i++) {
    if (route6[i].checked) train6Score = i * 15;
  }
  for (let i = 0; i < destPoints.length; i++) {
    destScore += Number(destPoints[i].value);
  }

  if (longestRoute.checked) {
    longestRouteScore = 10;
    longestRouteText.innerHTML = "Longest Route Bounus: +10";
  } else {
    longestRouteText.innerHTML = "";
  }

  trainTotalScore =
    train1Score +
    train2Score +
    train3Score +
    train4Score +
    train5Score +
    train6Score;
  finalScore = trainTotalScore + destScore + longestRouteScore;

  console.log(finalScore);
  trainScoreText.innerHTML = "Train Score: " + trainTotalScore;
  destinationScoreText.innerHTML = "Destination Score: " + destScore;
  finalText.innerHTML = "Final Score: " + finalScore;
}
calcSubmit.addEventListener("click", sumTrainScores);
