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



$('#theShire').hide();
$('#middleEarth').hide();
$('#mordor').hide();

// Shire Round 1
const shire1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  console.log(lives)
  if(randNum1 === 1 && hobbiton > 0 && lives > 0) {
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    midShire();
    loseLives();
  } else if (randNum1 === 1 && hobbiton > 0 && lives <= 0) {
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    lose();
  } else if (randNum1 === 1){
    $('.hobbiton').css('background-position', 'center center');
    $('.hobbiton').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.hobbiton').css('color', 'white');
    pts++
    midShire();
    advance();
  } else if(randNum1 === 2 && crickhollow > 0 && lives > 0) {
    $('.crickhollow').css('background-position', 'center center');
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    midShire();
    loseLives();
  } else if (randNum1 === 2 && crickhollow > 0 && lives <= 0){
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    lose();
  } else if (randNum1 === 2) {
    $('.crickhollow').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.crickhollow').css('color', 'white');
    pts++
    midShire();
    advance();
  } else if(randNum1 === 3 && farmer > 0 && lives > 0) {
    $('.farmer').css('background-position', 'center center');
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    midShire();
    loseLives();
  } else if (randNum1 === 3 && farmer > 0 && lives <= 0){
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    lose();
  } else {
    $('.farmer').css('background-image', 'url(https://ichef.bbci.co.uk/news/660/media/images/79630000/jpg/_79630637_alamydt7hcy.jpg)');
    $('.farmer').css('color', 'white');
    pts++
    midShire();
    advance();
  }
console.log(pts)
}

// Shire Round 2
const shire2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
    if (randNum1 === 1 && buckland > 0 && lives > 0){
    $('.buckland').css('background', 'red');
    endShire();
    loseLives();
  } else if(randNum1 === 1 && buckland > 0 && lives <= 0){
    $('.buckland').css('background', 'red');
    lose();
  } else if (randNum1 === 1){
    $('.buckland').css('background', 'red');
    endShire();
    advance();
  } else if (randNum1 === 2 && brandywine > 0 && lives > 0){
    $('.brandywine').css('background', 'red');
    endShire();
    loseLives();
  } else if(randNum1 === 2 && brandywine > 0 && lives <= 0){
    $('.brandywine').css('background', 'red');
    lose();
  } else if (randNum1 === 2){
    $('.brandywine').css('background', 'red');
    endShire();
    advance();
  } else if (randNum1 === 3 && theForest > 0 && lives > 0){
    $('.theForest').css('background', 'red');
    endShire();
    loseLives();
  } else if(randNum1 === 3 && theForest > 0 && lives <= 0){
    $('.theForest').css('background', 'red');
    lose();
  } else if (randNum1 === 3){
    $('.theForest').css('background', 'red');
    endShire();
    advance();
}
}

// Shire Round 3
const shire3 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && bree > 0 && lives > 0){
    $('.bree').css('background', 'red');
    safe();
    loseLives();
  } else if(randNum1 === 1 && bree > 0 && lives <= 0){
    $('.bree').css('background', 'red');
    lose();
  } else if (randNum1 === 1){
    $('.bree').css('background', 'red');
    safe();
    advance();
  } else if (randNum1 === 2 && amunSul > 0 && lives > 0){
    $('.amunSul').css('background', 'red');
    safe();
    loseLives();
  } else if(randNum1 === 2 && amunSul > 0 && lives <= 0){
    $('.amunSul').css('background', 'red');
    lose();
  } else if (randNum1 === 2){
    $('.amunSul').css('background', 'red');
    safe();
    advance();
  } else if (randNum1 === 3 && barrowDowns > 0 && lives > 0){
    $('.barrowDowns').css('background', 'red');
    safe();
    loseLives();
  } else if(randNum1 === 3 && barrowDowns > 0 && lives <= 0){
    $('.barrowDowns').css('background', 'red');
    lose();
  } else if (randNum1 === 3){
    $('.barrowDowns').css('background', 'red');
    safe();
    advance();
}
}

const shire4 = () => {
    alert('You have reached Rivendell and gained companions. You now have additional hit points');
    lives+
    console.log(lives);
    $('#middleEarth').show();
}

const midEarth1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
    if (randNum1 === 1 && hollin > 0 && lives > 0){
    $('.hollin').css('background', 'red');
    lorien2();
    loseLives();
  } else if(randNum1 === 1 && hollin > 0 && lives <= 0){
    $('.hollin').css('background', 'red');
    lose();
  } else if (randNum1 === 1){
    $('.hollin').css('background', 'red');
    lorien2();
    advance();
  } else if (randNum1 === 2 && redhorn > 0 && lives > 0){
    $('.redhorn').css('background', 'red');
    lorien2();
    loseLives();
  } else if(randNum1 === 2 && redhorn > 0 && lives <= 0){
    $('.redhorn').css('background', 'red');
    lose();
  } else if (randNum1 === 2){
    $('.redhorn').css('background', 'red');
    lorien2();
    advance();
  }  else if (randNum1 === 3 && gateOfMoria > 0 && lives > 0){
    $('.gateOfMoria').css('background', 'red');
    lorien2();
    loseLives();
  } else if(randNum1 === 3 && gateOfMoria > 0 && lives <= 0){
    $('.gateOfMoria').css('background', 'red');
    lose();
  } else if (randNum1 === 3){
    $('.gateOfMoria').css('background', 'red');
    lorien2();
    advance();
}
}

const midEarth2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && moria > 0 && lives > 0){
    $('.moria').css('background', 'red');
    rohan2();
    loseLives();
} else if(randNum1 === 1 && moria > 0 && lives <= 0){
    $('.moria').css('background', 'red');
    lose();
} else if (randNum1 === 1){
  $('.moria').css('background', 'red');
  rohan2();
  advance();
}  else if (randNum1 === 2 && lorien > 0 && lives > 0){
  $('.lorien').css('background', 'red');
  rohan2();
  loseLives();
} else if(randNum1 === 2 && lorien > 0 && lives <= 0){
  $('.lorien').css('background', 'red');
  lose();
} else if (randNum1 === 2){
  $('.lorien').css('background', 'red');
  rohan2();
  advance();
} else if (randNum1 === 2 && fangorn > 0 && lives > 0){
  $('.fangorn').css('background', 'red');
  rohan2();
  loseLives();
} else if(randNum1 === 2 && fangorn > 0 && lives <= 0){
  $('.fangorn').css('background', 'red');
  lose();
} else if (randNum1 === 3){
  $('.fangorn').css('background', 'red');
  rohan2();
  advance();
}
}

const midEarth3 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && isengard > 0 && lives > 0){
    $('.isengard').css('background', 'red');
    aragorn();
    loseLives();
} else if(randNum1 === 1 && isengard > 0 && lives <= 0){
    $('.isengard').css('background', 'red');
    lose();
} else if (randNum1 === 1){
    $('.isengard').css('background', 'red');
    aragorn();
    advance();
} else if (randNum1 === 2 && helmsDeep > 0 && lives > 0){
    $('.helmsDeep').css('background', 'red');
    aragorn();
    loseLives();
} else if(randNum1 === 2 && helmsDeep > 0 && lives <= 0){
    $('.helmsDeep').css('background', 'red');
    lose();
} else if (randNum1 === 2){
    $('.helmsDeep').css('background', 'red');
    aragorn();
    advance();
} else if (randNum1 === 3 && edoras > 0 && lives > 0){
    $('.edoras').css('background', 'red');
    aragorn();
    loseLives();
} else if(randNum1 === 3 && edoras > 0 && lives <= 0){
    $('.edoras').css('background', 'red');
    lose();
} else if (randNum1 === 3){
    $('.edoras').css('background', 'red');
    aragorn();
    advance();
}
}

const midEarth4 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && paths > 0 && lives > 0){
    $('.paths').css('background', 'red');
    gondor2();
    loseLives();
} else if(randNum1 === 1 && paths > 0 && lives <= 0){
    $('.paths').css('background', 'red');
    lose();
} else if (randNum1 === 1){
  $('.paths').css('background', 'red');
  gondor2();
  advance();
} else if (randNum1 === 2 && ithilien > 0 && lives > 0){
  $('.ithilien').css('background', 'red');
  gondor2();
  loseLives();
} else if(randNum1 === 2 && ithilien > 0 && lives <= 0){
  $('.ithilien').css('background', 'red');
  lose();
} else if (randNum1 === 2){
  $('.ithilien').css('background', 'red');
  gondor2();
  advance();
} if (randNum1 === 3 && argonath > 0 && lives > 0){
  $('.argonath').css('background', 'red');
  endShire();
  loseLives();
} else if(randNum1 === 3 && argonath > 0 && lives <= 0){
  $('.argonath').css('background', 'red');
  lose();
} else if (randNum1 === 3){
  $('.argonath').css('background', 'red');
  gondor2();
  advance();
}
}
const midEarth5 = () => {
  lives+
  console.log(lives)
  alert('You have made it safely to Mordor. Now for the final push');
  $('#mordor').show();
  m1();
}

const mordor1 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;

  if (randNum1 === 1 && osgiliath > 0 && lives > 0){
    $('.osgiliath').css('background', 'red');
    m2();
    loseLives();
} else if(randNum1 === 1 && osgiliath > 0 && lives <= 0){
    $('.osgiliath').css('background', 'red');
    lose();
} else if (randNum1 === 1){
    $('.osgiliath').css('background', 'red');
    m2();
    advance();
} else if (randNum1 === 2 && deadMarshes > 0 && lives > 0){
  $('.deadMarshes').css('background', 'red');
  m2();
  loseLives();
} else if(randNum1 === 2 && deadMarshes > 0 && lives <= 0){
  $('.deadMarshes').css('background', 'red');
  lose();
} else if (randNum1 === 2){
    $('.deadMarshes').css('background', 'red');
    m2();
    advance();
} else if (randNum1 === 1 && ephelDuath > 0 && lives > 0){
  $('.ephelDuath').css('background', 'red');
  m2();
  loseLives();
} else if(randNum1 === 1 && ephelDuath > 0 && lives <= 0){
  $('.ephelDuath').css('background', 'red');
  lose();
} else if (randNum1 === 3){
    $('.ephelDuath').css('background', 'red');
    m2();
    advance();
}
}

const mordor2 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && morgul > 0 && lives > 0){
    $('.morgul').css('background', 'red');
    m3();
    loseLives();
} else if(randNum1 === 1 && morgul > 0 && lives <= 0){
    $('.morgul').css('background', 'red');
    lose();
} else if (randNum1 === 1){
    $('.morgul').css('background', 'red');
    m3();
    advance();
} if (randNum1 === 2 && shelob > 0 && lives > 0){
  $('.shelob').css('background', 'red');
  m3();
  loseLives();
} else if(randNum1 === 2 && shelob > 0 && lives <= 0){
  $('.shelob').css('background', 'red');
  lose();
} else if (randNum1 === 2){
    $('.shelob').css('background', 'red');
    m3();
    advance();
}  if (randNum1 === 3 && gate > 0 && lives > 0){
  $('.gate').css('background', 'red');
  m3();
  loseLives();
} else if(randNum1 === 3 && gate > 0 && lives <= 0){
  $('.gate').css('background', 'red');
  lose();
} else if (randNum1 === 3){
  $('.gate').css('background', 'red');
  m3();
  advance();
}
}

const mordor3 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && gorgorath > 0 && lives > 0){
    $('.gorgorath').css('background', 'red');
    m3();
    loseLives();
} else if(randNum1 === 1 && gorgorath > 0 && lives <= 0){
  $('.gorgorath').css('background', 'red');
  lose();
} else if (randNum1 === 1){
  $('.gorgorath').css('background', 'red');
  m3();
  advance();
} if (randNum1 === 2 && baradDur > 0 && lives > 0){
  $('.baradDur').css('background', 'red');
  m3();
  loseLives();
} else if(randNum1 === 2 && baradDur > 0 && lives <= 0){
  $('.baradDur').css('background', 'red');
  lose();
} else if (randNum1 === 2){
  $('.baradDur').css('background', 'red');
  m3();
  advance();
}
}

const mordor4 = () => {
  const randNum1 = Math.floor(Math.random() * 3) + 1;
  if (randNum1 === 1 && doom > 0 && lives <= 0){
  $('.doom').css('background', 'red');
  lose();
} else {
  win();
  }
}
//
//
const lose = () => {
  alert('You have been caught by the Nazgul. Sauron has regained the one ring');
}
const loseLives = () => {
  lives--
  alert('You have been spotted. You have ' + lives + ' lives left.')
}

const advance = () => {
  alert("You have avoided Sauron's gaze. The journey continues. Keep it secret, keep it safe")
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
  $('#mordor3').show();
}
const m3 = () => {
  $('#mordor4').show();
}
$('.hobbiton').on('click', (e) => {
  $('.hobbiton').text('Hobbiton*');
  hobbiton++
  shire1();
})

$('.crickhollow').on('click', (e) => {
  $('.crickhollow').text('Crickhollow*');
  crickhollow++
  shire1();
})

$('.farmer').on('click', (e) => {
  $('.farmer').text('Farmer Maggot*');
  farmer++
  shire1();
})

$('.buckland').on('click', (e) => {
  $('.buckland').text('Buckland*');
  buckland++
  shire2();
})

$('.brandywine').on('click', (e) => {
  $('.brandywine').text('Brandywine Bridge*');
  brandywine++
  shire2();
})

$('.theForest').on('click', (e) => {
  $('.theForest').text('The Old Forest*');
  theForest++
  shire2();
})

$('.bree').on('click', (e) => {
  $('.bree').text("Bree*");
  bree++
  shire3();
})

$('.barrowDowns').on('click', (e) => {
  $('.barrowDowns').text('Barrow Downs*');
  barrowDowns++
  shire3();
})

$('.amunSul').on('click', (e) => {
  $('.amunSul').text("Amon Sul");
  amunSul++
  shire3();
})

$('.rivendell').on('click', (e) => {
  $('.rivendell').text('Rivendell*');
  rivendell++
  lives++
  $('#earlyME').show();
  shire4();
})

$('.hollin').on('click', (e) => {
  $('.hollin').text('Hollin*');
  hollin++
  midEarth1();
})

$('.redhorn').on('click', (e) => {
  $('.redhorn').text('Redhorn Pass*');
  redhorn++
  midEarth1();
})

$('.gateOfMoria').on('click', (e) => {
  $('.gateOfMoria').text('Gate of Moria*');
  gateOfMoria++
  midEarth1();
})

$('.moria').on('click', (e) => {
  $('.moria').text('Mines of Moria*');
  moria++
  midEarth2();
})

$('.lorien').on('click', (e) => {
  $('.lorien').text('Lorien*');
  lorien++
  midEarth2();
})

$('.fangorn').on('click', (e) => {
  $('.fangorn').text('Fangorn Forest*');
  fangorn++
  midEarth2();
})

$('.helmsDeep').on('click', (e) => {
  $('.helmsDeep').text("Helm's Deep*");
  helmsDeep++
  midEarth3();
})

$('.edoras').on('click', (e) => {
  $('.edoras').text('Edoras*');
  edoras++
  midEarth3();
})

$('.isengard').on('click', (e) => {
  $('.isengard').text("Isengard*");
  isengard++
  midEarth3();
})

$('.paths').on('click', (e) => {
  $('.paths').text('Path of the Dead*');
  paths++
  midEarth4();
})

$('.ithilien').on('click', (e) => {
  $('.ithilien').text('Ithilien*');
  tirith++
  midEarth4();
})

$('.tirith').on('click', (e) => {
  $('.tirith').text('Minas Tirith*');
  tirith++
  lives++
  midEarth5();
})

//
$('.mtDoom').on('click', (e) => {
  $('.mtDoom').text("Mount Doom*");
  doom++
  mordor4();
})
//
$('.morgul').on('click', (e) => {
  $('.morgul').text('Minas Morgul*');
  minas++
  mordor2();
})
//
$('.gate').on('click', (e) => {
  $('.gate').text('Black Gate*');
  blackGate++
  mordor2();
})
$('.osgiliath').on('click', (e) => {
  $('.osgiliath').text("Osgiliath*");
  osgiliath++
  mordor1();
})
//
$('.deadMarshes').on('click', (e) => {
  $('.deadMarshes').text('The Dead Marshes*');
  deadMarshes++
  mordor1();
})
//
$('.ephelDuath').on('click', (e) => {
  $('.ephelDuath').text('The Ephel Duath*');
  ephelDuath++
  mordor1();
})
$('.shelob').on('click', (e) => {
  $('.shelob').text("Shelob's Lair*");
  shelob++
  mordor2();
})
$('.gorgorath').on('click', (e) => {
  $('.gorgorath').text("Gorgorath*");
  gorgorath++
  mordor3();
})

$('.baradDur').on('click', (e) => {
  $('.baradDur').text('Barad Dur*');
  baradDur++
  mordor3();
})

$('.argonath').on('click', (e) => {
  $('.argonath').text('Argonath*');
  argonath++
  midEarth4();
})

$('#start').on('click', (e) => {
  $('#theShire').show();

  lives += 1
})

})
