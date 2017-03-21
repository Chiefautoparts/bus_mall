'use strict';

var imageArr = [('bag', './images/bag.jpg'), ('banana', './images/banana.jpg'), ('./images/bathroom.jpg'), ('./images/boots.jpg'), ('./images/breakfast.jpg'), ('./images/bubblegum.jpg'), ('./images/chair.jpg'), ('./images/cthulhu.jpg'), ('./images/dog-duck.jpg'), ('./images/dragon.jpg'), ('./images/pen.jpg'), ('./images/pet-sweep.jpg'), ('./images/scissors.jpg'), ('./images/shark.jpg'), ('./images/sweep.png'), ('./images/tauntaun.jpg'), ('./images/unicorn.jpg'), ('./images/usb.gif'), ('./images/water-can.jpg'), ('./images/wine-glass.jpg')];

var selectOne = document.getElementsByClassName('imgOne');
var selectTwo = document.getElementsByClassName('imgTwo');
var selectThree = document.getElementsByClassName('imgThree');
var clickCounter = 0;
var clickTracker = [];
var index = function() {
  return Math.floor(Math.random() * imageArr.length);
};
//console.log(index());

function imageGen(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  var image = document.createElement('img');
  image.setAttribute('src', imageArr[index].filepath);
  image.setAttribute('alt', imageArr[index].name);
  var placeImage = documents.getElementById('images');
  placeImage.appendChild(image);
  for (var j = 0; j < 2; j++) {
    if (j === 0) {
      image.setAttribute('class', 'left');
    } else if (j === 1) {
      image.setAttribute('class', 'center');
    } else {
      image.setAttribute('class', 'right');
    }
  }
  document.getElementsByClassName('left').addEventListener('click');
  document.getElementsByClassName('center').addEventListener('click');
  document.getElementsByClassName('right').addEventListener('click');
};

// var votingRound = function() {
//   for (var t = 0; t < 24; t++) {
//  var newImg = function() {
//    index();
//    document.getElementsByClassName('imgOne');
//    newImg.setAttribute('src', 'imageArr[index]');
//  };
//  newImg();
//     function generateImages() {
//       selectOne.setAttribute('src', 'imageArr[index]');
//       selectTwo.setAttribute('src', 'imageArr[index]');
//       selectThree.setAttribute('src', 'imageArr[index]');
//     }
//     for (var j  = 0; j < 3; j++) {
//       generateImages.addEventListener('click');
//       clickCounter++;
//     }
//     clickTracker.push(this.imageArr[index]);
//   };
// };
// var winner = function() {
//   var pickWin = document.createElement('section');
//   pickWin.innerText(clickCounter);
//   return winner();
// };
