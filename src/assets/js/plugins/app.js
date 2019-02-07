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
      var elem, input;
      elem = UIController.$qs(eventBtn).parentNode;
      elem.classList.add('d-none')
      input = elem.parentNode.querySelector(DOMStrings.inputAddPanel)
      input.classList.remove('d-none')
      input.querySelector('input').focus()

    },
    addBoardPanelLink:function (htmlElemContair, value,index) {
      var html, val;
      val = value;
      html = `<li class="nav-item">
                <span class="nav-link active">
                  <a href="#" data-target="${index}">${val}</a>
                  <span class="float-right">
                    <span class="badge badge-secondary mr-3">0/0</span>
                    <i class="fas fa-plus mr-2"></i>
                  </span>
                </span>
                <hr class="m-0" />
              </li>`;
      htmlElemContair.insertAdjacentHTML('beforeend', html)
    },
    addBtnLinkPanel: function(index, value) {
      var link, html;
      link = UIController.$qs(`${DOMStrings.ulLinks} [data-target="${index}"]`);
      html = `<hr class="m-0" />
              <li class="nav-item">
                <span class="nav-link active">
                    <a href="#">${value}</a>
                  <span class="float-right">
                    <span class="badge badge-secondary mr-3">0/0</span>
                  </span>
                </span>
              </li>`
      link.parentNode.parentNode.insertAdjacentHTML("beforeend", html)
    },
    getDomStrings: function () {
      return(DOMStrings)
    }

  }


})();

var PanelCotroller = (function () {
  var AddGroupPanel = function (id, value, items) {
    this.id = id;
    this.nameGroup = value;
    this.items= items;
  }
  return {
    hideAllPanls: function(data, arr){
      arr.forEach(function (item) {
        item.classList.remove('active')
      })

    },
    addItemsObj: function(data, index, val){
      var newPanelGroup, index, items;
      items= [];
      newPanelGroup = new  AddGroupPanel(index, val, items)
      data.panels.push(newPanelGroup)
    },
    loadContent: function (parent, arr) {
      arr.forEach(function (item) {
        UIController.addBoardPanelLink(parent,item.nameGroup,item.id)
        TodoController.createTitlePanel(item.id,item.nameGroup)
      })
    }
  }


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

var AppController = (function (UICtrl,PanCtrl, StorCtrl,TodoCtlr) {
  var DOM;
  var data = StorCtrl.data;
  var addInputBtnEvent = function (data) {
    var value, blockInput, ul, index;
    blockInput = UIController.$qs(`${DOM.inputAddPanel}`);
    value = blockInput.querySelector('input').value
    ul = UICtrl.$qs(DOM.ulLinks)
    if(data.panels.length > 0) {
      index = data.panels.length + 1
    } else {
      index = 0
    }

    UIController.addBoardPanelLink(ul, value,index)
    PanelCotroller.addItemsObj(data,index,value, )
    TodoCtlr.createTitlePanel(index, value)
    blockInput.querySelector('input').value = ""
    StorCtrl.addToStor()

  }
  DOM = UICtrl.getDomStrings();
  var setupEvents = function () {

    var addGroup, inputGbtn;
    addGroupEvent =  DOM.ulLinks;
    UICtrl.$qs(addGroupEvent).addEventListener('click', function (e) {
      e.preventDefault()

      if(e.target.classList.contains('add_group--panel')){
        UICtrl.showInput(DOM.btnAddPanel);
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
     // UICtrl.showInput(addGroup);
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
      PanelCotroller.loadContent( UICtrl.$qs(DOM.ulLinks),data.panels)
    }
  }


})(UIController, PanelCotroller, StoreController, TodoController);

