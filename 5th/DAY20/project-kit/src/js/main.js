/*! main.js @ 2017, yamoo9.net */
(function(global){
  'use strict';

  var document    = global.document;
  // 그리드를 설정할 요소의 선택자를 입력합니다.
  var grid_target = document.querySelector('body');
  // 그리드 토글할 클래스 이름을 설정합니다.
  var grid_class  = 'grid';

  document.addEventListener('keyup', function(e){
    // Shift + G 키를 누르면 그리드 클래스가 토글합니다.
    ( e.keyCode === 71 && e.shiftKey ) && grid_target.classList.toggle(grid_class);
  });

})(window);