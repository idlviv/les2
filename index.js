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
    var l = input.value;
    var el = document.createElement('li');
    el.innerText = l;
    list.appendChild(el);
    input.value = '';
    state.items.push(l);

  })
});
