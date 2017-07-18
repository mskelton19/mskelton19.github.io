$ (() => {


const applyRandNum = (square) => {
  const randNum = Math.floor(Math.random() * 3) + 1;
  // console.log(randNum);

  if(randNum === 1) {
    $('.hobbiton').css('background', 'red');
    console.log("The Eye is on Hobbiton! You've been caught by the Nazgul")
  } else if (randNum === 2) {
    $('.theDowns').css('background', 'red');
    console.log("You've been caught in the Barrow Downs");
  } else {
    $('.theForest').css('background', 'red');
    console.log('Sauron has spied you in The Old Forest')
  }
}
applyRandNum();





})
