(function(global){
  'use strict';

  var guide = 'guide';
  var document = global.document;
  var toggle_btn = document.createElement('button');
  toggle_btn.setAttribute('type', 'button');
  toggle_btn.classList.add('toggle-guide');
  toggle_btn.textContent = 'Toggle Guide';
  document.body.appendChild(toggle_btn);

  var toggleGuide = function(e) {
    if ( e.target.localName === 'button' ) {
      document.body.classList.toggle(guide);
      return;
    }
    var shift = e.shiftKey;
    var key = e.keyCode || e.which;
    if ( shift && key === 71 ) {
      document.body.classList.toggle(guide);
    }
  };

  document.addEventListener('keyup', toggleGuide);
  toggle_btn.addEventListener('click', toggleGuide);

})(window);