var UIControler = (function() {

  var DOMStrings = {
      ulLinks: '.js-menu',
      btnAddPanel: '.add_group--panel',
      inputAddPanel: '.addTask',
      inputAddPanelBtn: 'add-G-panel',
      board: '.js-container'
    };
  var $qs= function (selector) {
    return document.querySelector(selector)
  };
    return {

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
      addSubLinks: function (index, value, id) {
        var ul = document.querySelector(`${DOMStrings.ulLinks}`);
        var boardLinks = ul.querySelector(`[data-target="${index}"]`);
        var li = boardLinks.parentNode.parentNode;
        console.log('li', typeof li)
        var ulSub = li.querySelector('ul')
        if (ulSub == null) {
          li.insertAdjacentHTML('beforeend','<ul class="list-group list-group-flush"></ul>');
          ulSub = li.querySelector('ul')
        }

        html= `<li class="list-group-item" data-tasks="${id}">${value}</li>`;
        ulSub.insertAdjacentHTML('beforeend', html)


      },
     addInputBtnEvent: function (value , index) {
        var val, blockInput, ul;
        val =value
        ul = $qs(DOMStrings.ulLinks)
       UIControler.addBoardPanelLink(ul, val ,index)
      },
    getDomStrings: function () {
      return(DOMStrings)
    },
    testtingData: function () {
      console.log(data)
    }
    }

}());

/**
* @param  {} CreateBoard
* @param  {} CreatePanel
* @param  {} StorData
* @param  {} UIControler
*/
var AppController = (function(StorData, UIControler, UIBoardController, MainBoardController) {
  var DOM, data, appBoard;
  DOM = UIControler.getDomStrings();
  data = StorData.data;
  if (data.panels.length === 0) {
    UIBoardController.initBoard(DOM.board, true)
    MainBoardController.handleInputAddBoard()

  }  else {
    MainBoardController.loadContent(data, 0)
    MainBoardController.loadMenu(data)
    MainBoardController.handleInputAddTasks(data)
    MainBoardController.handleMenu(data)
    MainBoardController.handleCards(data)

  }

  return {

      init: function () {
          data
          console.log(data.panels.length);
      }
  };

})( StoreController, UIControler, UIBoardController, MainBoardController);
