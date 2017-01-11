// /* global getWinner */
var state = {
  items:[]
};

window.addEventListener('load', function wListener() {
  'use strict';
  var list = document.querySelector('ul');
  var button = document.querySelector('button');
  var input = document.querySelector('input');
  button.addEventListener('click',function (){
    var inputedValue = input.value;
    var newElement = document.createElement('li');
    newElement.innerText = inputedValue;
    list.appendChild(newElement);
    input.value = '';
    state.items.push(inputedValue);

  })
});
