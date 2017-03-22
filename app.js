'use strict';

var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var clickCounter = 0;
var productsArray = [];
var imgOne = document.getElementById('left');
var imgTwo = document.getElementById('center');
var imgThree = document.getElementById('right');

function products(name, filePath) {
  this.nameProduct = name;
  this.filePath = filePath;
  this.clickItem = 0;
  this.productShown = 0;
  productsArray.push(this);
};

for (var i = 0; i < imageArray.length; i++) {
  var filePath = 'images/' + imageArray[i];
  new products(nameArray[i], filePath);
}

function randomProductIndex() {
  return Math.floor(Math.random() * imageArray.length);
};
var previousProductIndex = [];
function randomProduct() {
  var currentProductIndex = [];
  while (currentProductIndex.length < 3) {
    var productSelector = randomProductIndex();
    if (!currentProductIndex.includes(productSelector) && !previousProductIndex.includes(productSelector)){ currentProductIndex.push(productSelector);
    }
  }
  var prodOne = productsArray[currentProductIndex[0]];
  var prodTwo = productsArray[currentProductIndex[1]];
  var prodThree = productsArray[currentProductIndex[2]];
  imgOne.src = prodOne.filePath;
  imgTwo.src = prodTwo.filePath;
  imgThree.src = prodThree.filePath;
  imgOne.alt = currentProductIndex[0];
  imgTwo.alt = currentProductIndex[1];
  imgThree.alt = currentProductIndex[2];
  previousProductIndex = currentProductIndex;
  prodOne.productShown++;
  prodTwo.productShown++;
  prodThree.productShown++;
};
randomProduct();

var clickLimit = 3;
function hearTheClick(event){
  randomProduct();
  clickCounter++;

  var productIndx = this.alt;

  productsArray[productIndx].clickItem++;
  if (clickCounter === clickLimit) {
    imgOne.removeEventListener('click', hearTheClick);
    imgTwo.removeEventListener('click', hearTheClick);
    imgThree.removeEventListener('click', hearTheClick);
    produceData();
  }
};

imgOne.addEventListener('click', hearTheClick);
imgTwo.addEventListener('click', hearTheClick);
imgThree.addEventListener('click', hearTheClick);

var totalClicks = [];
function produceData() {
  // var content = document.getElementById('content');
  // var list = document.createElement('ul');
  // content.appendChild(list);
  for (var i = 0; i < productsArray.length; i++){
    // var insideList = document.createElement('li');
    // var inputTotals = productsArray[i].clickItem + ' clicks for ' + productsArray[i].nameProduct;
    // insideList.innerText = inputTotals;
    // list.appendChild(insideList);
    totalClicks.push(productsArray[i].clickItem);
  }
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: nameArray,
    datasets: [{
      label: 'Clicks Received',
      data: totalClicks,
      backgroundColor: 'blue'
    }, {
    }]
  };
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
var chart = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//var productClicks =
var numberClicked = hearTheClick();
var data = {
  labels: nameArray,
  dataset: [{
    label: 'Products',
    data: productClicks,
    backgroundColor: 'blue'
  }, {
    label: 'number of clicks',
    data: numberClicked,
  }]
};
var createChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
