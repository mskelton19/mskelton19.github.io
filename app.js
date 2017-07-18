$ (() => {

let hobbiton = 0;
let theDowns = 0;
let theForest = 0;
let firstRound = 0;
let bree = 0;
let rivendell = 0;
let moria = 0;
let secondRound = 0;
let rohan = 0;
let isengard = 0;
let gondor = 0;
let thirdRound = 0;

// Round 1
const round1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  // console.log(randNum);

  if(randNum1 === 1 && hobbiton > 0) {
    $('.hobbiton').css('background', 'red');
    lose();
  } else if (randNum1 === 1){
    $('.hobbiton').css('background', 'red');
    advance();
  } else if (randNum1 === 2 && theDowns > 0){
    $('.theDowns').css('background', 'red');
    lose();
  } else if (randNum1 === 2) {
    $('.theDowns').css('background', 'red');
    advance();
  } else if (randNum1 === 3 && theForest > 0){
    $('.theForest').css('background', 'red');
    lose();
  } else {
    $('.theForest').css('background', 'red');
    advance();
  }
}

// Round 2
const round2 = () => {
  const randNum2 = Math.floor(Math.random() * 3) + 1;

  if(firstRound === 0){
    alert('You must pass through the Shire first.');
  } else if (randNum2 === 1 && bree > 0){
    $('.bree').css('background', 'red');
    lose();
  } else if (randNum2 === 1){
    advance();
  }  else if (randNum2 === 2 && rivendell > 0){
    $('.rivendell').css('background', 'red');
    lose();
  } else if (randNum2 === 2){
    advance();
  }  else if (randNum2 === 3 && moria > 0){
    $('.moria').css('background', 'red');
    lose();
  } else if (randNum2 === 1){
    advance();
}
}

// Round 3
const round3 = () => {
  const randNum3 = Math.floor(Math.random() * 3) + 1;

  if(secondRound === 0){
    alert('You must pass through Eriador first.');
  } else if (randNum3 === 1 && isengard > 0){
    $('.isengard').css('background', 'red');
    lose();
  } else if (randNum3 === 1){
    advance();
  }  else if (randNum3 === 2 && rohan > 0){
    $('.rohan').css('background', 'red');
    lose();
  } else if (randNum3 === 2){
    advance();
  }  else if (randNum3 === 3 && gondor > 0){
    $('.gondor').css('background', 'red');
    lose();
  } else if (randNum3 === 1){
    advance();
}
}
const lose = () => {
  alert('You have been caught by the Nazgul. Sauron has regained the one ring');
}

const advance = () => {
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
}


$('.hobbiton').on('click', (e) => {
  $('.hobbiton').text('Hobbiton*');
  hobbiton++
  firstRound++
  round1();
})

$('.theDowns').on('click', (e) => {
  $('.theDowns').text('The Barrow Downs*');
  theDowns++
  firstRound++
  round1();
})

$('.theForest').on('click', (e) => {
  $('.hobbiton').text('The Old Forest*');
  theForest++
  firstRound++
  round1();
})

$('.bree').on('click', (e) => {
    $('.bree').text("Bree*");
    bree++
    secondRound++
    round2();
})

$('.rivendell').on('click', (e) => {
  $('.rivendell').text('Rivendell*');
  rivendell++
  secondRound++
  round2();
})

$('.moria').on('click', (e) => {
  $('.moria').text('Mines of Moria*');
  moria++
  secondRound++
  round2();
})

$('.isengard').on('click', (e) => {
  $('.isengard').text("Isengard*");
  bree++
  secondRound++
  round3();
})

$('.rohan').on('click', (e) => {
  $('.rohan').text('Rohan*');
  rohan++
  thirdRound++
  round3();
})

$('.gondor').on('click', (e) => {
  $('.gondor').text('Gondor*');
  gondor++
  thirdRound++
  round3();
})


$('#restart').on('click', (e) => {
  theForest = 0;
  theDowns = 0;
  hobbiton = 0;
  $('.hobbiton').css('background', 'green').text('Hobbiton')
  $('.theDowns').css('background', 'gray')
  $('.theForest').css('background', 'darkgreen')
})


})
