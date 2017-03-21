'use strict';

var imageArr = [ 'images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

var selectOne = document.getElementsByClassName('imgOne');
var selectTwo = document.getElementsByClassName('imgTwo');
var selectThree = document.getElementsByClassName('imgThree');

var index = function() {
  return Math.floor((Math.random() * (19 - 0) + 1) + 0);
};

function imageGen(name, filepath) {
  this.name = name;
  this.filepath = filepath;
};

var newImg = function() {
  document.getElementsByClassName('imgOne');
// selectOne.appendChild(newImg);
  newImg.setAttribute('src', 'imageArr[index]');
};
newImg();
