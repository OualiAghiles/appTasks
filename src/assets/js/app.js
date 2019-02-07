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
    getDomStrings: function () {
      return(DOMStrings)
    }

  }


})();

var PanelCotroller = (function () {
  var AddGroupPanel = function (id, value, items, visibility) {
    this.id = id;
    this.nameGroup = value;
    this.items= items;
    this.visibility = visibility
  }
  return {
    hideAllPanls: function(data, arr){
      arr.forEach(function (item) {
        item.classList.remove('active')
      })
      data.panels.forEach(function(item){
        item.visibility = false 
      })
      console.log(data)

    },
    addItemsObj: function(data, index, val,  visibility){
      var newPanelGroup, index, items, visibility;
      items= [],
      visibility = true
      newPanelGroup = new  AddGroupPanel(index, val, items, visibility)
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

var TodoController = (function () {

return {
  createTitlePanel: function (index, value, visibility) {
    visibility = true
    var html;
    html = `<div class="contentPanel active" data-index="${index}">
              <h6 class="mt-3">
                <span class="display-4">${value}</span>
                
              </h6>
              <hr>
            </div>`
    document.querySelector('.js-container').insertAdjacentHTML('beforeend', html)
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

var AppController = (function (UICtrl,PanCtrl, TodoCtrl, StorCtrl) {
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
    PanelCotroller.addItemsObj(data,index,value, true)
    TodoController.createTitlePanel(index, value)
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
          console.log(value)
          addInputBtnEvent(data)
          PanelCotroller.hideAllPanls(data, document.querySelectorAll('.contentPanel'))

        }
        
      }else if (e.target.dataset.target) {
        var target = e.target.dataset.target
        console.log('hi')

        if(document.querySelector(`[data-index="${target}"]`)) {
          PanelCotroller.hideAllPanls(data, document.querySelectorAll('.contentPanel'))
          document.querySelector(`[data-index="${target}"]`).classList.add('active')
          data.panels[`${target}`].visibility = !data.panels[`${target}`].visibility
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

      console.log(data)
      setupEvents()
      PanelCotroller.loadContent( UICtrl.$qs(DOM.ulLinks),data.panels)
    }
  }


})(UIController, PanelCotroller, TodoController, StoreController);
AppController.init();
