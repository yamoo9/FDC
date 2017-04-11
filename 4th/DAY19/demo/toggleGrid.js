/*! toggleGrid.js © yamoo9.net, 2017 */
;(function(global, DOM){
  'use strict';

  function toggleGridReady() {
    global.document.onkeyup = function(e) {
      var key = e.keyCode || e.which;
      if (key === 71 && e.shiftKey) {
        global.document.body.classList.toggle('show-grid');
      }
    };
  }

  DOM.ready(toggleGridReady);

})(window, {
  'ready': (function (){
    var arrDomReadyCallBacks = [] ;
    function excuteDomReadyCallBacks(){
         for (var i=0; i < arrDomReadyCallBacks.length; i++) {
           arrDomReadyCallBacks[i]();
         }
         arrDomReadyCallBacks = [];
    }

    return function (callback){
      arrDomReadyCallBacks.push(callback);
       /* Mozilla, Chrome, Opera: DOMContentLoaded 네이티브 이벤트 처리 */
        if (document.addEventListener ) {
            document.addEventListener('DOMContentLoaded', excuteDomReadyCallBacks, false);
        }
      /* Safari, iCab, Konqueror: DOMContentLoaded 이벤트 대체 처리 */
      if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
          browserTypeSet = true ;
          var DOMLoadTimer = setInterval(function () {
              if (/loaded|complete/i.test(document.readyState)) {
                  //callback();
                  excuteDomReadyCallBacks();
                  clearInterval(DOMLoadTimer);
              }
          }, 10);
      }
      /* window.onload 이벤트 처리 */
      window.onload = excuteDomReadyCallBacks;
  }
  })()
});
