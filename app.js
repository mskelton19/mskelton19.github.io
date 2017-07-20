$ (() => {

let hobbiton = 0;
let brandywine = 0;
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
let doom = 0;
let minas = 0;
let blackGate = 0;

$('#theShire').hide();
$('#eriador').hide();
$('#midEarth').hide();
$('#mordor').hide();


// Round 1
const round1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  console.log(randNum1);

  if(randNum1 === 1 && hobbiton > 0) {
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    lose();
  } else if (randNum1 === 1){
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    advance();
  } else if (randNum1 === 2 && brandywine > 0){
    $('.brandywine').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.brandywine').css('color', 'white');
    lose();
  } else if (randNum1 === 2) {
    $('.brandywine').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.brandywine').css('color', 'white');
    advance();
  } else if (randNum1 === 3 && theForest > 0){
    $('.theForest').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.theForest').css('color', 'white');
    lose();
  } else {
    $('.theForest').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.theForest').css('color', 'white');
    advance();
  }
}

// Round 2
const round2 = () => {
  const randNum2 = Math.floor(Math.random() * 3) + 1;
  console.log(randNum2);
    if (randNum2 === 1 && bree > 0){
    $('.bree').css('background', 'red');
    lose();
  } else if (randNum2 === 1){
    $('.bree').css('background', 'red');
    advance();
  }  else if (randNum2 === 2 && rivendell > 0){
    $('.rivendell').css('background', 'red');
    lose();
  } else if (randNum2 === 2){
    $('.rivendell').css('background', 'red');
    advance();
  } else if (randNum2 === 3 && moria > 0){
    $('.moria').css('background', 'red');
    lose();
  } else if (randNum2 === 3){
    $('.moria').css('background', 'red');
    advance();
}
}

// Round 3
const round3 = () => {
  const randNum3 = Math.floor(Math.random() * 3) + 1;

    if (randNum3 === 1 && isengard > 0){
    $('.isengard').css('background', 'red');
    lose();
  } else if (randNum3 === 1){
    $('.isengard').css('background', 'red');
    advance();
  }  else if (randNum3 === 2 && rohan > 0){
    $('.rohan').css('background', 'red');
    lose();
  } else if (randNum3 === 2){
    $('.rohan').css('background', 'red');
    advance();
  }  else if (randNum3 === 3 && gondor > 0){
    $('.gondor').css('background', 'red');
    lose();
  } else if (randNum3 === 3){
    $('.isengard').css('background', 'red');
    advance();
}
}

const round4 = () => {
  const randNum4 = Math.floor(Math.random() * 3) + 1;

    if (randNum4 === 1 && doom > 0){
    $('.mtDoom').css('background', 'red');
    lose();
  } else if (randNum4 === 1){
    $('.mtDoom').css('background', 'red');
    win();
  }  else if (randNum4 === 2 && minas > 0){
    $('.morgul').css('background', 'red');
    lose();
  } else if (randNum4 === 2){
    $('.morgul').css('background', 'red');
    win();
  }  else if (randNum4 === 3 && blackGate > 0){
    $('.gate').css('background', 'red');
    lose();
  } else if (randNum4 === 3){
    $('.gate').css('background', 'red');
    win();
}
}

const lose = () => {
  alert('You have been caught by the Nazgul. Sauron has regained the one ring');
}

const advance = () => {
  if(thirdRound > 0){
    $('#mordor').show()
  } else if (secondRound > 0){
    $('#midEarth').show()
  } else if (firstRound > 0){
    $('#eriador').show();
  }
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
}

const win = () => {
  alert('You win')
}

$('.hobbiton').on('click', (e) => {
  $('.hobbiton').text('Hobbiton*');
  hobbiton++
  firstRound++
  round1();
})

$('.brandywine').on('click', (e) => {
  $('.brandywine').text('The Brandywine Bridge*');
  brandywine++
  firstRound++
  round1();
})

$('.theForest').on('click', (e) => {
  $('.theForest').text('The Old Forest*');
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
  isengard++
  thirdRound++
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

$('.mtDoom').on('click', (e) => {
  $('.mtDoom').text("Mount Doom*");
  doom++
  round4();
})

$('.morgul').on('click', (e) => {
  $('.morgul').text('Minas Morgul*');
  minas++
  round4();
})

$('.gate').on('click', (e) => {
  $('.gate').text('Black Gate*');
  blackGate++
  round4();
})



$('#start').on('click', (e) => {
  $('#theShire').show();
//   theForest = 0;
//   theDowns = 0;
//   hobbiton = 0;
//   $('.hobbiton').css('background', 'green').text('Hobbiton')
//   $('.theDowns').css('background', 'gray')
//   $('.theForest').css('background', 'darkgreen')
})


})
