(function(global, document){
  'use strict';

  var tabcomp = document.querySelector('.tab-component');

  Array.prototype.forEach.call(tabcomp.querySelectorAll('.tab'), function(item, index){
    item.onclick = function(e) {
      e.preventDefault();
      this.parentNode.parentNode.querySelector('.active').classList.remove('active');
      this.parentNode.classList.add('active');
      var tabpanel = document.querySelectorAll('.tabpanel')[index];
      tabpanel.parentNode.querySelector('.tabpanel.active').classList.remove('active');
      tabpanel.classList.add('active');
    };
  });

})(window, window.document);