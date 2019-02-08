var UIController = (function () {

  var DOMStrings = {
    ulLinks: '.js-menu',
    btnAddPanel: '.add_group--panel',
    inputAddPanel: '.addTask',
    inputAddPanelBtn: 'add-G-panel'
  };
  return {
    $qs: function (selector) {
      return document.querySelector(selector)
    },

    createPanelBoard: function () {
      var container = document.querySelector('.js-container');
      console.log(container)
      var inputLabel = container.querySelector('.addTask input');
      inputLabel.focus()



    },
    getDomStrings: function () {
      return(DOMStrings)
    }
  }
})();

var AppController = (function (UICtrl,PanCtrl, StorCtrl,TodoCtlr, UIPanelCtrl) {
  var DOM;
  var data = StorCtrl.data;
  var addInputBtnEvent = function (data) {
    var value, blockInput, ul, index;
    blockInput = UIController.$qs(`${DOM.inputAddPanel}`);
    value = blockInput.querySelector('input').value
    ul = UICtrl.$qs(DOM.ulLinks)
    if(data.panels.length > 0) {
      index = data.panels[data.panels.length - 1].id + 1
    } else {
      index = 0
    }
    UIPanelCtrl.addBoardPanelLink(ul, value,index)
    PanCtrl.addItemsObj(data,index,value, )
    TodoCtlr.createTitlePanel(data, index, value)
    //blockInput.querySelector('input').value = ""
    //StorCtrl.addToStor()
  }
  DOM = UICtrl.getDomStrings();
  var setupEvents = function () {

    var addGroup, inputGbtn;
    addGroupEvent =  DOM.ulLinks;
    UICtrl.$qs(addGroupEvent).addEventListener('click', function (e) {
      e.preventDefault()

      if(e.target.classList.contains('add_group--panel')){
        UIPanelCtrl.createPanelBoard()
        UICtrl.createPanelBoard()
        addInputBtnEvent(data)
        //UICtrl.createPanelBoard(DOM.btnAddPanel);
      }else if(e.target.dataset.panel ===`${DOM.inputAddPanelBtn}`){
        var value = document.querySelector(`${DOM.inputAddPanel} input`).value
        if(value){
          addInputBtnEvent(data)
          PanCtrl.hideAllPanls(data, document.querySelectorAll('.contentPanel'))

        }

      }else if (e.target.dataset.target) {
        var target = e.target.dataset.target
        if(document.querySelector(`[data-index="${target}"]`)) {
          PanCtrl.hideAllPanls(data, document.querySelectorAll('.contentPanel'))
          document.querySelector(`[data-index="${target}"]`).classList.add('active')
          StorCtrl.addToStor()

        }
      }
     // UICtrl.createPanelBoard(addGroup);
    });
    inputGbtn = document.querySelector(`${DOM.inputAddPanel} input`)
    if (!inputGbtn.classList.contains('d-none')) {
      inputGbtn.addEventListener('keypress',function (e) {
        if (e.code === 'Enter') {
          addInputBtnEvent(data)
          StorCtrl.addToStor()
        }
      })
    }
  }
  return {
    init: function () {

      setupEvents()
      PanelCotroller.loadContent(data, UICtrl.$qs(DOM.ulLinks),data.panels)
      PanelCotroller.loadCards(data, UICtrl.$qs('.tasks'),data.panels)
    }
  }


})(UIController, PanelCotroller, StoreController, TodoController, UIPanelCotroller);

