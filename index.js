// /* global getWinner */
var state = {
  items:[]
};
var d = localStorage.getItem('myLocalData');
if (d) {
  state = JSON.parse(d);
  console.log(d);
  console.log(state);
}
window.addEventListener('load', function wListener() {
  'use strict';
  var list = document.querySelector('ul');
  var button = document.querySelector('button');
  var buttonClear = document.querySelector('#buttonClear');
  var input = document.querySelector('input');
  console.log (state.items.length);
  update();
 
  function update (){
    input.value = '';
    list.innerHTML = '';
    for (var i = 0; i < state.items.length; i++){
      var newElement = document.createElement('li');
      newElement.innerText = state.items[i];
      list.appendChild(newElement);
    }
  }
  button.addEventListener('click', add);
  function add (){
    var inputtedValue = input.value;
    state.items.push(inputtedValue);
    localStorage.setItem('myLocalData',JSON.stringify(state));
    update();
  }
});
