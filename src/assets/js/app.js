var UIController = (function () {

  var DOMStrings = {
    ulLinks: '.js-menu',
    btnAddPanel: '.add_group--panel',
    inputAddPanel: '.input_panel',
    inputAddPanelBtn: 'add-G-panel'
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
    addBoardPanelLink:function (htmlElemContair, value) {
      var html, val;
      val = value;
      html = `<li class="nav-item">
                <span class="nav-link active">
                  <a href="#">${val}</a>
                  <span class="float-right">
                    <span class="badge badge-secondary mr-3">0/0</span>
                    <i class="fas fa-plus mr-2"></i>
                  </span>
                </span>
                <hr class="m-0" />
              </li>`;
      htmlElemContair.insertAdjacentHTML('beforeend', html)
    },
    getDomStrings: function () {
      return(DOMStrings)
    }

  }


})();

var PanelCotroller = (function () {
  return {
    loadContent: function (parent, arr) {
      arr.forEach(function (item) {
        UIController.addBoardPanelLink(parent,item)
      })
    }
  }


})();

var TodoController = (function () {


})();

var StoreController = (function () {
  var data;
  if(localStorage.getItem("data") === null ){
    data = {
      panels: [],
    }
  } else {
    data = JSON.parse(localStorage.getItem('data'))
  }
  return {

    addToStor: function () {
      window.localStorage.setItem('data', JSON.stringify(data))
    },
    data
  }
})()

var AppController = (function (UICtrl,PanCtrl, TodoCtrl, StorCtrl) {
  var DOM;
  var data = StorCtrl.data;
  var addInputBtnEvent = function (data) {
    var value, blockInput, ul;
    blockInput = UIController.$qs(`${DOM.inputAddPanel}`);
    value = blockInput.querySelector('input').value
    ul = UICtrl.$qs(DOM.ulLinks)
    UIController.addBoardPanelLink(ul, value)
    data.panels.push(value)
  }
  DOM = UICtrl.getDomStrings();
  var setupEvents = function () {

    var addGroup, inputGbtn;
    addGroup =  DOM.btnAddPanel;
    UICtrl.$qs(addGroup).addEventListener('click', function () {
      UICtrl.showInput(addGroup);
    });
    inputGbtn = UICtrl.$qs(`[data-panel ="${DOM.inputAddPanelBtn}"]`);
    console.log(inputGbtn);
    inputGbtn.addEventListener('click', function () {
      addInputBtnEvent(data)
      StorCtrl.addToStor()
    })


  }
  return {
    init: function () {

      console.log(data)
      setupEvents()
      PanelCotroller.loadContent( UICtrl.$qs(DOM.ulLinks),data.panels)
    }
  }


})(UIController, PanelCotroller, TodoController, StoreController);
AppController.init();
