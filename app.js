$ (() => {

let hobbiton = 0;
let brandywine = 0;
let theForest = 0;
let bree = 0;
let rivendell = 0;
let moria = 0;
let rohan = 0;
let isengard = 0;
let gondor = 0;
let doom = 0;
let minas = 0;
let blackGate = 0;
let crickhollow = 0;
let farmer = 0;
let buckland = 0;
let amunSul = 0;
let barrowDowns = 0;
let hollin = 0;
let gateOfMoria = 0;
let redhorn = 0;
let lorien = 0;
let fangorn = 0;
let argonath = 0;
let paths = 0;
let tirith = 0;
let edoras = 0;
let helmsDeep = 0;
let ithilien = 0;
let morgul = 0;
let pts = 0;
let lives = 0;
let thirdRound = 0;
let ephelDuath = 0;
let gorgorath = 0;
let osgiliath = 0;
let deadMarshes = 0;
let shelob = 0;
let baradDur = 0;
let gate = 0;
let round = 0;
let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let me1 = 0;
let me2 = 0;
let me3 = 0;
let me4 = 0;
let mr1 = 0;
let mr2 = 0;
let mr3 = 0;

$('#counter').hide();
$('#theShire').hide();
$('#hobbits').hide();
$('#midShire').hide();
$('#endShire').hide();
$('#safe').hide();
$('#middleEarth').hide();
$('#earlyME').hide();
$('#lorien').hide();
$('#rohan').hide();
$('#aragorn').hide();
$('#gondor').hide();
$('#mordor').hide();
$('#mordor1').hide();
$('#mordor2').hide();
$('#mordor3').hide();
$('#mordor4').hide();


// Shire Round 1
const shire1 = () => {

  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if(randNum1 === 1 && hobbiton > 0 && lives > 0) {
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    s1++
    midShire();
    loseLives();
    livesLeft();
  } else if (randNum1 === 1 && hobbiton > 0 && lives <= 0) {
    $('.hobbiton').css('background-position', 'center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    s1++
    stopClicks();
    lose();
  } else if (randNum1 === 1){
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    s1++
    midShire();
    advance();
  } else if(randNum1 === 2 && crickhollow > 0 && lives > 0) {
    $('.crickhollow').css('background-position', 'center center');
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    s1++
    midShire();
    loseLives();
    livesLeft();
  } else if (randNum1 === 2 && crickhollow > 0 && lives <= 0){
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    s1++
    lose();
  } else if (randNum1 === 2) {
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    s1++
    midShire();
    advance();
  } else if(randNum1 === 3 && farmer > 0 && lives > 0) {
    $('.farmer').css('background-position', 'center center');
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    s1++
    midShire();
    loseLives();
    livesLeft();
  } else if (randNum1 === 3 && farmer > 0 && lives <= 0){
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    s1++
    lose();
  } else {
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    s1++
    midShire();
    advance();
  }
}

// Shire Round 2
const shire2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
    if (randNum1 === 1 && buckland > 0 && lives > 0){
      $('.buckland').css('background-position', 'center center');
      $('.buckland').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
      $('.buckland').css('color', 'white');
    s2++
    endShire();
    loseLives();
    livesLeft();
  } else if(randNum1 === 1 && buckland > 0 && lives <= 0){
    $('.buckland').css('background-position', 'center center');
    $('.buckland').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.buckland').css('color', 'white');
    s2++
    lose();
  } else if (randNum1 === 1){
    $('.buckland').css('background-position', 'center center');
    $('.buckland').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.buckland').css('color', 'white');
    s2++
    endShire();
    advance();
  } else if (randNum1 === 2 && brandywine > 0 && lives > 0){
    $('.brandywine').css('background-position', 'center center');
    $('.brandywine').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.brandywine').css('color', 'white');
    s2++
    endShire();
    loseLives();
    livesLeft();
  } else if(randNum1 === 2 && brandywine > 0 && lives <= 0){
    $('.brandywine').css('background-position', 'center center');
    $('.brandywine').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.brandywine').css('color', 'white');
    s2++
    lose();
  } else if (randNum1 === 2){
    $('.brandywine').css('background-position', 'center center');
    $('.brandywine').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.brandywine').css('color', 'white');
    s2++
    endShire();
    advance();
  } else if (randNum1 === 3 && theForest > 0 && lives > 0){
    $('.theForest').css('background-position', 'center center');
    $('.theForest').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.theForest').css('color', 'white');
    s2++
    endShire();
    loseLives();
    livesLeft();
  } else if(randNum1 === 3 && theForest > 0 && lives <= 0){
    $('.theForest').css('background-position', 'center center');
    $('.theForest').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.theForest').css('color', 'white');
    s2++
    lose();
  } else if (randNum1 === 3){
    $('.theForest').css('background-position', 'center center');
    $('.theForest').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.theForest').css('color', 'white');
    s2++
    endShire();
    advance();
}
}

// Shire Round 3
const shire3 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && bree > 0 && lives > 0){
    $('.bree').css('background-position', 'center center');
    $('.bree').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.bree').css('color', 'white');
    s3++
    safe();
    loseLives();
    livesLeft();
  } else if(randNum1 === 1 && bree > 0 && lives <= 0){
    $('.bree').css('background-position', 'center center');
    $('.bree').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.bree').css('color', 'white');
    s3++
    lose();
  } else if (randNum1 === 1){
    $('.bree').css('background-position', 'center center');
    $('.bree').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.bree').css('color', 'white');
    s3++
    safe();
    advance();
  } else if (randNum1 === 2 && amunSul > 0 && lives > 0){
    $('.amunSul').css('background-position', 'center center');
    $('.amunSul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.amunSul').css('color', 'white');
    s3++
    safe();
    loseLives();
    livesLeft();
  } else if(randNum1 === 2 && amunSul > 0 && lives <= 0){
    $('.amunSul').css('background-position', 'center center');
    $('.amunSul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.amunSul').css('color', 'white');
    s3++
    lose();
  } else if (randNum1 === 2){
    $('.amunSul').css('background-position', 'center center');
    $('.amunSul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.amunSul').css('color', 'white');
    s3++
    safe();
    advance();
  } else if (randNum1 === 3 && barrowDowns > 0 && lives > 0){
    $('.barrowDowns').css('background-position', 'center center');
    $('.barrowDowns').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.barrowDowns').css('color', 'white');
    s3++
    safe();
    loseLives();
    livesLeft();
  } else if(randNum1 === 3 && barrowDowns > 0 && lives <= 0){
    $('.barrowDowns').css('background-position', 'center center');
    $('.barrowDowns').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.barrowDowns').css('color', 'white');
    s3++
    lose();
  } else if (randNum1 === 3){
    $('.barrowDowns').css('background-position', 'center center');
    $('.barrowDowns').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.barrowDowns').css('color', 'white');
    s3++
    safe();
    advance();
}
}

const shire4 = () => {
    // alert('You have reached Rivendell and gained companions. You now have additional hit points');
    // lives+=1
    round+=1
    livesLeft();
    $('#theShire').hide();
    $('#middleEarth').show();
    advance();
    background();
}

const midEarth1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
    if (randNum1 === 1 && hollin > 0 && lives > 0){
      $('.hollin').css('background-position', 'center center');
      $('.hollin').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
      $('.hollin').css('color', 'white');
    me1++
    lorien2();
    loseLives();
    livesLeft();
  } else if(randNum1 === 1 && hollin > 0 && lives <= 0){
    $('.hollin').css('background-position', 'center center');
    $('.hollin').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hollin').css('color', 'white');
    me1++
    lose();
  } else if (randNum1 === 1){
    $('.hollin').css('background-position', 'center center');
    $('.hollin').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hollin').css('color', 'white');
    me1++
    lorien2();
    advance2();
  } else if (randNum1 === 2 && redhorn > 0 && lives > 0){
    $('.redhorn').css('background-position', 'center center');
    $('.redhorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.redhorn').css('color', 'white');
    me1++
    lorien2();
    loseLives();
    livesLeft();
  } else if(randNum1 === 2 && redhorn > 0 && lives <= 0){
    $('.redhorn').css('background-position', 'center center');
    $('.redhorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.redhorn').css('color', 'white');
    me1++
    lose();
  } else if (randNum1 === 2){
    $('.redhorn').css('background-position', 'center center');
    $('.redhorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.redhorn').css('color', 'white');
    me1++
    lorien2();
    advance2();
  }  else if (randNum1 === 3 && gateOfMoria > 0 && lives > 0){
    $('.gateOfMoria').css('background-position', 'center center');
    $('.gateOfMoria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.gateOfMoria').css('color', 'white');
    me1++
    lorien2();
    loseLives();
    livesLeft();
  } else if(randNum1 === 3 && gateOfMoria > 0 && lives <= 0){
    $('.gateOfMoria').css('background-position', 'center center');
    $('.gateOfMoria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.gateOfMoria').css('color', 'white');
    me1++
    lose();
  } else if (randNum1 === 3){
    $('.gateOfMoria').css('background-position', 'center center');
    $('.gateOfMoria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.gateOfMoria').css('color', 'white');
    me1++
    lorien2();
    advance2();
}
}

const midEarth2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && moria > 0 && lives > 0){
    $('.moria').css('background-position', 'center center');
    $('.moria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.moria').css('color', 'white');
    me2++
    rohan2();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && moria > 0 && lives <= 0){
  $('.moria').css('background-position', 'center center');
  $('.moria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.moria').css('color', 'white');
    me2++
    lose();
} else if (randNum1 === 1){
  $('.moria').css('background-position', 'center center');
  $('.moria').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.moria').css('color', 'white');
  me2++
  rohan2();
  advance2();
}  else if (randNum1 === 2 && lorien > 0 && lives > 0){
  $('.lorien').css('background-position', 'center center');
  $('.lorien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.lorien').css('color', 'white');
  me2++
  rohan2();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && lorien > 0 && lives <= 0){
  $('.lorien').css('background-position', 'center center');
  $('.lorien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.lorien').css('color', 'white');
  me2++
  lose();
} else if (randNum1 === 2){
  $('.lorien').css('background-position', 'center center');
  $('.lorien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.lorien').css('color', 'white');
  me2++
  rohan2();
  advance2();
} else if (randNum1 === 2 && fangorn > 0 && lives > 0){
  $('.fangorn').css('background-position', 'center center');
  $('.fangorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.fangorn').css('color', 'white');
  me2++
  rohan2();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && fangorn > 0 && lives <= 0){
  $('.fangorn').css('background-position', 'center center');
  $('.fangorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.fangorn').css('color', 'white');
  me2++
  lose();
} else if (randNum1 === 3){
  $('.fangorn').css('background-position', 'center center');
  $('.fangorn').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.fangorn').css('color', 'white');
  me2++
  rohan2();
  advance2();
}
}

const midEarth3 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && isengard > 0 && lives > 0){
    $('.isengard').css('background-position', 'center center');
    $('.isengard').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.isengard').css('color', 'white');
    me3++
    aragorn();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && isengard > 0 && lives <= 0){
  $('.isengard').css('background-position', 'center center');
  $('.isengard').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.isengard').css('color', 'white');
    me3++
    lose();
} else if (randNum1 === 1){
  $('.isengard').css('background-position', 'center center');
  $('.isengard').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.isengard').css('color', 'white');
    me3++
    aragorn();
    advance2();
} else if (randNum1 === 2 && helmsDeep > 0 && lives > 0){
  $('.helmsDeep').css('background-position', 'center center');
  $('.helmsDeep').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.helmsDeep').css('color', 'white');
     me3++
    aragorn();
    loseLives();
    livesLeft();
} else if(randNum1 === 2 && helmsDeep > 0 && lives <= 0){
  $('.helmsDeep').css('background-position', 'center center');
  $('.helmsDeep').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.helmsDeep').css('color', 'white');
    me3++
    lose();
} else if (randNum1 === 2){
  $('.helmsDeep').css('background-position', 'center center');
  $('.helmsDeep').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.helmsDeep').css('color', 'white');
    me3++
    aragorn();
    advance2();
} else if (randNum1 === 3 && edoras > 0 && lives > 0){
  $('.edoras').css('background-position', 'center center');
  $('.edoras').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.edoras').css('color', 'white');
    me3++
    aragorn();
    loseLives();
    livesLeft();
} else if(randNum1 === 3 && edoras > 0 && lives <= 0){
  $('.edoras').css('background-position', 'center center');
  $('.edoras').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.edoras').css('color', 'white');
    me3++
    lose();
} else if (randNum1 === 3){
  $('.edoras').css('background-position', 'center center');
  $('.edoras').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.edoras').css('color', 'white');
    me3++
    aragorn();
    advance2();
}
}

const midEarth4 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && paths > 0 && lives > 0){
    $('.paths').css('background-position', 'center center');
    $('.paths').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.paths').css('color', 'white');
    me4++
    gondor2();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && paths > 0 && lives <= 0){
  $('.paths').css('background-position', 'center center');
  $('.paths').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.paths').css('color', 'white');
    me4++
    lose();
} else if (randNum1 === 1){
  $('.paths').css('background-position', 'center center');
  $('.paths').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.paths').css('color', 'white');
  me4++
  gondor2();
  advance2();
} else if (randNum1 === 2 && ithilien > 0 && lives > 0){
  $('.ithilien').css('background-position', 'center center');
  $('.ithilien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ithilien').css('color', 'white');
  me4++
  gondor2();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && ithilien > 0 && lives <= 0){
  $('.ithilien').css('background-position', 'center center');
  $('.ithilien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ithilien').css('color', 'white');
  me4++
  lose();
} else if (randNum1 === 2){
  $('.ithilien').css('background-position', 'center center');
  $('.ithilien').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ithilien').css('color', 'white');
  me4++
  gondor2();
  advance2();
} if (randNum1 === 3 && argonath > 0 && lives > 0){
  $('.argonath').css('background-position', 'center center');
  $('.argonath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.argonath').css('color', 'white');
  me4++
  endShire();
  loseLives();
  livesLeft();
} else if(randNum1 === 3 && argonath > 0 && lives <= 0){
  $('.argonath').css('background-position', 'center center');
  $('.argonath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.argonath').css('color', 'white');
  me4++
  lose();
} else if (randNum1 === 3){
  $('.argonath').css('background-position', 'center center');
  $('.argonath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.argonath').css('color', 'white');
  me4++
  gondor2();
  advance2();
}
}
const midEarth5 = () => {
  lives+=1
  round+=1
  livesLeft();
  $('#middleEarth').hide();
  $('#mordor').show();
  advance2();
  m1();
  background2();
}

const mordor1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && osgiliath > 0 && lives > 0){
    $('.osgiliath').css('background-position', 'center center');
    $('.osgiliath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.osgiliath').css('color', 'white');
    mr1++
    m2();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && osgiliath > 0 && lives <= 0){
  $('.osgiliath').css('background-position', 'center center');
  $('.osgiliath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.osgiliath').css('color', 'white');
    mr1++
    lose();
} else if (randNum1 === 1){
  $('.osgiliath').css('background-position', 'center center');
  $('.osgiliath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.osgiliath').css('color', 'white');
    mr1++
    m2();
    advance3();
} else if (randNum1 === 2 && deadMarshes > 0 && lives > 0){
  $('.deadMarshes').css('background-position', 'center center');
  $('.deadMarshes').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.deadMarshes').css('color', 'white');
  mr1++
  m2();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && deadMarshes > 0 && lives <= 0){
  $('.deadMarshes').css('background-position', 'center center');
  $('.deadMarshes').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.deadMarshes').css('color', 'white');
  mr1++
  lose();
} else if (randNum1 === 2){
  $('.deadMarshes').css('background-position', 'center center');
  $('.deadMarshes').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.deadMarshes').css('color', 'white');
  mr1++
  m2();
  advance3();
} else if (randNum1 === 1 && ephelDuath > 0 && lives > 0){
  $('.ephelDuath').css('background-position', 'center center');
  $('.ephelDuath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ephelDuath').css('color', 'white');
  mr1++
  m2();
  loseLives();
  livesLeft();
} else if(randNum1 === 1 && ephelDuath > 0 && lives <= 0){
  $('.ephelDuath').css('background-position', 'center center');
  $('.ephelDuath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ephelDuath').css('color', 'white');
  mr1++
  lose();
} else if (randNum1 === 3){
  $('.ephelDuath').css('background-position', 'center center');
  $('.ephelDuath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.ephelDuath').css('color', 'white');
  mr1++
  m2();
  advance3();
}
}

const mordor2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && morgul > 0 && lives > 0){
    $('.morgul').css('background-position', 'center center');
    $('.morgul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.morgul').css('color', 'white');
    mr2++
    m3();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && morgul > 0 && lives <= 0){
  $('.morgul').css('background-position', 'center center');
  $('.morgul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.morgul').css('color', 'white');
    mr2++
    lose();
} else if (randNum1 === 1){
  $('.morgul').css('background-position', 'center center');
  $('.morgul').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.morgulmorgul').css('color', 'white');
    mr2++
    m3();
    advance3();
} if (randNum1 === 2 && shelob > 0 && lives > 0){
  $('.shelob').css('background-position', 'center center');
  $('.shelob').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.shelob').css('color', 'white');
  mr2++
  m3();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && shelob > 0 && lives <= 0){
  $('.shelob').css('background-position', 'center center');
  $('.shelob').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.shelob').css('color', 'white');
  mr2++
  lose();
} else if (randNum1 === 2){
  $('.shelob').css('background-position', 'center center');
  $('.shelob').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.shelob').css('color', 'white');
  mr2++
  m3();
  advance3();
} if (randNum1 === 3 && gate > 0 && lives > 0){
  $('.gate').css('background-position', 'center center');
  $('.gate').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.gate').css('color', 'white');
  mr2++
  m3();
  loseLives();
  livesLeft();
} else if(randNum1 === 3 && gate > 0 && lives <= 0){
  $('.gate').css('background-position', 'center center');
  $('.gate').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.gate').css('color', 'white');
  mr2++
  lose();
} else if (randNum1 === 3){
  $('.gate').css('background-position', 'center center');
  $('.gate').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.gate').css('color', 'white');
  mr2++
  m3();
  advance3();
}
}

const mordor3 = () => {
  const randNum1 = Math.floor(Math.random() * 2) + 1;
  if (randNum1 === 1 && gorgorath > 0 && lives > 0){
    $('.gorgorath').css('background-position', 'center center');
    $('.gorgorath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.gorgorath').css('color', 'white');
    mr3++
    m4();
    loseLives();
    livesLeft();
} else if(randNum1 === 1 && gorgorath > 0 && lives <= 0){
  $('.gorgorath').css('background-position', 'center center');
  $('.gorgorath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.gorgorathgorgorath').css('color', 'white');
  mr3++
  lose();
} else if (randNum1 === 1){
  $('.gorgorathgorgorath').css('background-position', 'center center');
  $('.gorgorath').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.gorgorath').css('color', 'white');
  mr3++
  m4();
  advance3();
} if (randNum1 === 2 && baradDur > 0 && lives > 0){
  $('.baradDur').css('background-position', 'center center');
  $('.baradDur').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.baradDur').css('color', 'white');
  mr3++
  m4();
  loseLives();
  livesLeft();
} else if(randNum1 === 2 && baradDur > 0 && lives <= 0){
  $('.baradDur').css('background-position', 'center center');
  $('.baradDur').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.baradDur').css('color', 'white');
  mr3++
  lose();
} else if (randNum1 === 2){
  $('.baradDur').css('background-position', 'center center');
  $('.baradDur').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
  $('.baradDur').css('color', 'white');
  mr3++
  m4();
  advance3();
}
}

const mordor4 = () => {
  const randNum1 = Math.floor(Math.random() * 2) + 1;
  if (randNum1 === 1) {
    $('.mtDoom').css('background-position', 'center center');
    $('.mtDoom').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.mtDoom').css('color', 'white');
  lose();
} else if (randNum1 === 2){
  win();
  }
}
//
//
const lose = () => {
  alert('You have been caught by the Nazgul. Sauron has regained the one ring');
}
const livesLeft = () => {
  $('.lives').text('Lives left: ' + lives)
}
const loseLives = () => {
  lives--
  alert('You have been spotted. You have ' + lives + ' lives left.')
}
const advance = () => {
  pts++
  $('.scoreboard').text('Scoreboard: ' + pts);
  $('.round').text('Round: ' + round);
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
}

const advance2 = () => {
  pts+=3
  $('.scoreboard').text('Scoreboard: ' + pts);
  $('.round').text('Round: ' + round)
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
}
const advance3 = () => {
  pts+=5
  $('.scoreboard').text('Scoreboard: ' + pts);
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
}
const stopClicks = () => {
  $('h3').stop('click')
}
const midShire = () => {
  $('#midShire').show();
}
const endShire = () => {
  $('#endShire').show();
}
const safe = () => {
  $('#safe').show();
}
const lorien2 = () => {
  $('#lorien').show();
}
const win = () => {
  pts+=10;
  $('.scoreboard').text('Scoreboard: ' + pts);
  alert('The ring has been destroyed!')
}
const rohan2 = () => {
  $('#rohan').show();
}
const aragorn = () => {
  $('#aragorn').show();
}
const gondor2 = () => {
  $('#gondor').show();
}
const m1 = () => {
  $('#mordor1').show();
}

const m2 = () => {
  $('#mordor2').show();
}
const m3 = () => {
  $('#mordor3').show();
}

const m4 = () => {
  $('#mordor4').show();
}
const background = () => {
  $('.body').css('background', '#D1C6AD');
  $('#counter').css('border', '4px solid #506C64');
  $('#counter').css('background-color', '#BBADA0');
}

const background2 = () => {
  $('.body').css('background', '#494E54');
  $('#counter').css('border', ('4px solid #FF4E04'));
  $('#counter').css('color', ('#FF4E04'));
  $('#counter').css('background-color', ('#303036'));
}
$('.hobbiton').one('click', (e) => {
  if(s1 > 0) {
    $('.crickhollow').off('click');
  } else {
    hobbiton++
    shire1();
  }
})

$('.crickhollow').one('click', (e) => {
  if(s1 > 0) {
    $('.crickhollow').off('click');
  } else {
    crickhollow++
    shire1();
  }
})

$('.farmer').one('click', (e) => {
  if(s1 > 0) {
    $('.farmer').off('click');
  } else {
    farmer++
    shire1();
  }
})

$('.buckland').on('click', (e) => {
  if(s2 > 0) {
    $('.buckland').off('click');
} else {
  buckland++
  shire2();
}
})

$('.brandywine').on('click', (e) => {
  if (s2 > 0) {
  $('.brandywine').off('click');
} else {
  brandywine++
  shire2();
}
})

$('.theForest').on('click', (e) => {
  if (s2 > 0) {
  $('.theForest').off('click');
} else {
  theForest++
  shire2();
}
})

$('.bree').on('click', (e) => {
  if (s3 > 0) {
  $('.bree').off('click');
} else {
  bree++
  shire3();
}
})

$('.barrowDowns').on('click', (e) => {
  if (s3 > 0) {
  $('.barrowDowns').off('click');
} else {
  barrowDowns++
  shire3();
}
})

$('.amunSul').on('click', (e) => {
  if (s3 > 0) {
  $('.amunSul').off('click');
} else {
  amunSul++
  shire3();
}
})

$('.rivendell').on('click', (e) => {
  $('.rivendell').off('click');
  rivendell++
  lives++
  $('#earlyME').show();
  shire4();
})

$('.hollin').on('click', (e) => {
  if (me1 > 0) {
  $('.hollin').off('click');
} else {
  hollin++
  midEarth1();
}
})

$('.redhorn').on('click', (e) => {
  if (me1 > 0) {
  $('.redhorn').off('click');
} else {
  redhorn++
  midEarth1();
}
})

$('.gateOfMoria').on('click', (e) => {
  if (me1 > 0) {
  $('.gateOfMoria').off('click');
} else {
  gateOfMoria++
  midEarth1();
}
})

$('.moria').on('click', (e) => {
  if (me2 > 0) {
  $('.moria').off('click');
} else {
  moria++
  midEarth2();
}
})

$('.lorien').on('click', (e) => {
  if (me2 > 0) {
  $('.lorien').off('click');
} else {
  lorien++
  midEarth2();
}
})

$('.fangorn').on('click', (e) => {
  if (me2 > 0) {
  $('.fangorn').off('click');
} else {
  fangorn++
  midEarth2();
}
})

$('.helmsDeep').on('click', (e) => {
  if (me3 > 0) {
  $('.helmsDeep').off('click');
} else {
  helmsDeep++
  midEarth3();
}
})

$('.edoras').on('click', (e) => {
  if (me3 > 0) {
  $('.edoras').off('click');
} else {
  edoras++
  midEarth3();
}
})

$('.isengard').on('click', (e) => {
  if (me3 > 0) {
  $('.isengard').off('click');
} else {
  isengard++
  midEarth3();
}
})

$('.paths').on('click', (e) => {
  if (me4 > 0) {
  $('.ithilien').off('click');
} else {
  paths++
  midEarth4();
}
})

$('.ithilien').on('click', (e) => {
  if (me4 > 0) {
  $('.ithilien').off('click');
} else {
  ithilien++
  midEarth4();
}
})

$('.tirith').on('click', (e) => {
  $('.tirith').off('click');
  tirith++
  lives++
  midEarth5();
})

//
$('.mtDoom').on('click', (e) => {
  $('.mtDoom').off('click');
  doom++
  mordor4();
})
//
$('.morgul').on('click', (e) => {
  if (mr2 > 0) {
  $('.morgul').off('click');
}
  minas++
  mordor2();
})
//
$('.gate').on('click', (e) => {
  if (mr2 > 0) {
  $('.gate').off('click');
} else {
  blackGate++
  mordor2();
}
})
$('.osgiliath').on('click', (e) => {
  if (mr1 > 0) {
  $('.osgiliath').off('click');
} else {
  osgiliath++
  mordor1();
}
})
//
$('.deadMarshes').on('click', (e) => {
  if (mr1 > 0) {
  $('.deadMarshes').off('click');
} else {
  deadMarshes++
  mordor1();
}
})
//
$('.ephelDuath').on('click', (e) => {
  if (mr1 > 0) {
  $('.ephelDuath').off('click');
} else {
  ephelDuath++
  mordor1();
}
})
$('.shelob').on('click', (e) => {
  if (mr2 > 0) {
  $('.shelob').off('click');
}
  shelob++
  mordor2();
})
$('.gorgorath').on('click', (e) => {
  if (mr3 > 0) {
  $('.gorgorath').off('click');
}
  gorgorath++
  mordor3();
})

$('.baradDur').on('click', (e) => {
  if (mr3 > 0) {
  $('.baradDur').off('click');
}
  gorgorath++
  mordor3();
})

$('.argonath').on('click', (e) => {
  if (me4 > 0) {
  $('.argonath').off('click');
} else {
  $('#start').off('click');
  argonath++
  midEarth4();
}
})

$('#start').on('click', (e) => {
  $('#counter').show();
  $('#theShire').show();
  $('#hobbits').show();
  $('.bagEnd').hide();
  $('.modalButton').hide();
  $('#start').off('click');
  round+=1
  lives += 1
  livesLeft();
})

$('.door').on('click', (e) => {

})

})
