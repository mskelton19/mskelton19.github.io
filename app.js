$ (() => {

let hobbiton = 0;
let theDowns = 0;
let theForest = 0;

const applyRandNum = () => {
  const randNum = Math.floor(Math.random() * 3) + 1;
  // console.log(randNum);

  if(randNum === 1 && hobbiton > 0) {
    $('.hobbiton').css('background', 'red');
    lose();
  } else if (randNum === 1){
    $('.hobbiton').css('background', 'red');
    advance();
  } else if (randNum === 2 && theDowns > 0){
    $('.theDowns').css('background', 'red');
    lose();
  } else if (randNum === 2) {
    $('.theDowns').css('background', 'red');
    advance();
  } else if (randNum === 3 && theForest > 0){
    $('.theForest').css('background', 'red');
    lose();
  } else {
    $('.theForest').css('background', 'red');
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
  $('.hobbiton').text('You have arrived in Hobbiton');
  hobbiton++
  applyRandNum();
})

$('.theDowns').on('click', (e) => {
  $('.hobbiton').text('You are in the Barrow Downs');
  theDowns++
  applyRandNum();
})

$('.theForest').on('click', (e) => {
  $('.hobbiton').text('You are in The Old Forest');
  theForest++
  applyRandNum();
})

$('#restart').on('click', (e) => {
  theForest = 0;
  theDowns = 0;
  hobbiton = 0;
  $('.hobbiton').css('background', 'green')
  $('.theDowns').css('background', 'gray')
  $('.theForest').css('background', 'darkgreen')
})


})
