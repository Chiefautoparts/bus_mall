'use strict';

var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var imgOne = document.getElementbyId('left');
var imgTwo = document.getElementbyId('center');
var imgThree = document.getElementbyId('right');
var clickCounter = 0;
var productsArray = [];

function products(name, filepath) {
  this.nameProduct = nameProduct;
  this.filepath = filepath;
  this.clickItem = 0;
  this.productShown = 0;
  productArray.push(this);
};

for (var i = 0; i < imageArray.length; i++) {
  var filePath = 'images/' + imageArray[i];
  new itemProduct(nameArray[i], filepath);
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
  product1 = productsArray[currentProductIndex[0].filepath];
  product2 = productsArray[currentProductIndex[1].filepath];
  prodcut3 = productsArray[currentProductIndex[2].filepath];
  imgOne.src = product1.filepath;
  imgTwo.src = product2.filepath;
  imgThree.src = product3.filepath;
  imgOne.alt = currentProductIndex[0];
  imgTwo.alt = currentProductIndex[1];
  imgThree.alt = currentProductIndex[2];
  previousProductIndex = currentProductIndex;
  product1.productShown++;
  product2.productShown++;
  product3.productShown++;
};
randomProduct();

var clickLimit = 25;
function hearTheClick(event){
  randomProduct();
  clickCounter++;

  var productIndx = this.alt;

  productsArray[productIndx].clickItem++;
  if (clickCounter === clickLimit) {
    imgOne.removeEventListener('click', hearTheClick);
    imgTwo.removeEventListener('click', hearTheClick);
    imgThree.removeEventListener('click', hearTheClick);
  }
  produceData();
}

imgOne.addEventListener('click', hearTheClick);
imgTwo.addEventListener('click', hearTheClick);
imgThree.addEventListener('click', hearTheClick);

function produceData() {
  var content = document.getElementById('content');
  var list = document.createElement('ul');
  content.appendChild(list);
  for (var i = 0; i < productsArray.length; i++){
    var insideList = document.createElement('li');
    var inputTotals = productsArray[i].clickItem + ' clicks for ' + productsArray[i].nameProduct;
    insideList.innerText = inputTotals;
    list.appendChild(insideList);
  }
};
