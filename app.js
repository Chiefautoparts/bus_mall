'use strict';

var imageArr = [ {img: 'bag.jpg'}, {img:'banana.jpg'}, {img:'bathroom.jpg'}, {img:'boots.jpg'}, {img:'breakfast.jpg'}, {img: 'bubblegum.jpg'}, {img: 'chair.j'}, {img: 'cthulhu.jpg'}, {img: 'dog-duck.jpg'}, {img: 'dragon.jpg'}, {img: 'pen.jpg'}, {img: 'pet-sweep.jpg'}, {img: 'scissors.jpg'}, {img: 'shark.jpg'}, {img: 'sweep.png'}, {img: 'tauntaun.jpg'}, {img: 'unicorn.jpg'}, {img: 'usb.gif'}, {img: 'water-can.jpg'}, {img: 'wine-glass.jpg'}];

//var randomImage = function() {
  //return Math.floor(Math.random() * (20 - 1 + 1) + 1);
//};

// var selectImage = function() {
//   var printImage = imageArr[Math.floor(Math.random() * 19)];
//   return printImage;
// };
function roundOne() {
  for (var i = 0; i < imageArr.length; i++){
    var firstPick = document.createElement(imageArr[i]);
    var secondPick = document.createElement(imageArr[i]);
    var thirdPick = document.createElement(imageArr[i]);
  };
};
// var firstChoice = function() {
//   for (var i = 0; i < 2; i++) {
//     var imageOne = ;
//     var imageTwo;
//     var imageThree;
//   }
// };
