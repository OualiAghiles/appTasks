var UIController = (function () {

  var DOMStrings = {
    ulLinks: '.js-menu',
    btnAddPanel: '.add_group--panel',
    inputAddPanel: '.input_panel'
  };
  return {
    $qs: function (selector) {
      return document.querySelector(selector)
    },

    showInput: function (eventBtn) {
      var elem;
      elem = UIController.$qs(eventBtn).parentNode;
      elem.classList.add('d-none')
      elem.parentNode.querySelector(DOMStrings.inputAddPanel).classList.remove('d-none')
    },
    addBoardPanel:function () {
      var html;
      html = `<li class="nav-item">
                <span class="nav-link active">
                  <a href="#">Personal</a>
                  <span class="float-right">
                    <span class="badge badge-secondary mr-3">0/0</span>
                    <i class="fas fa-plus mr-2"></i>
                  </span>
                </span>
                <hr class="m-0" />
              </li>`
    },
    getDomStrings: function () {
      return(DOMStrings)
    }

  }


})();

var PanelCotroller = (function () {


})();

var TodoController = (function () {


})();

var StoreController = (function () {


})()

var AppController = (function (UICtrl,PanCtrl, TodoCtrl, StorCtrl) {
  var DOM;
  DOM = UICtrl.getDomStrings()

  var setupEvents = function () {

    var addGroup;
    addGroup =  DOM.btnAddPanel;
    UICtrl.$qs(addGroup).addEventListener('click', function () {
      UICtrl.showInput(addGroup)
      UIController.addBoardPanel()
    })


  }
  return {

    init: function () {
      setupEvents()
    }
  }


})(UIController, PanelCotroller, TodoController, StoreController);
AppController.init();
