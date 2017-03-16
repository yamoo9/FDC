/*! toggleGrid.js © yamoo9.net, 2017 */
(function(global){
  'use strict';
  var document   = global.document;
  var body       = document.body;
  var toggle_btn = document.createElement('button');
  toggle_btn.classList.add('grid-toggle-btn');
  toggle_btn.innerHTML = 'toggle Grid';
  body.insertAdjacentElement('afterbegin', toggle_btn);
  toggle_btn.onclick = function(e) {
    body.classList.toggle('show-grid');
  };
  document.onkeyup = function(e) {
    if (e.keyCode === 71 && e.shiftKey) {
      body.classList.toggle('show-grid');
    }
  };
})(window);
