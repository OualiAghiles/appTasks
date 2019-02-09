// var UIController = (function () {

//   var DOMStrings = {
//     ulLinks: '.js-menu',
//     btnAddPanel: '.add_group--panel',
//     inputAddPanel: '.addTask',
//     inputAddPanelBtn: 'add-G-panel'
//   };
//   return {
//     $qs: function (selector) {
//       return document.querySelector(selector)
//     },

//     createPanelBoard: function () {
//       var container = document.querySelector('.js-container');
//       console.log(container)
//       var inputLabel = container.querySelector('.addTask input');
//       inputLabel.focus()



//     },
//     getDomStrings: function () {
//       return(DOMStrings)
//     }
//   }
// })();

// var AppController = (function (UICtrl,PanCtrl, StorCtrl,TodoCtlr, UIPanelCtrl) {
//   var DOM;
//   var data = StorCtrl.data;
//   var addInputBtnEvent = function (data) {
//     var value, blockInput, ul, index;
//     blockInput = UIController.$qs(`${DOM.inputAddPanel}`);
//     value = blockInput.querySelector('input').value
//     ul = UICtrl.$qs(DOM.ulLinks)
//     if(data.panels.length > 0) {
//       index = data.panels[data.panels.length - 1].id + 1
//     } else {
//       index = 0
//     }
//     UIPanelCtrl.addBoardPanelLink(ul, value,index)
//     PanCtrl.addItemsObj(data,index,value, )
//     TodoCtlr.createTitlePanel(data, index, value)
//     //blockInput.querySelector('input').value = ""
//     //StorCtrl.addToStor()
//   }
//   DOM = UICtrl.getDomStrings();
//   var setupEvents = function () {

//     var addGroup, inputGbtn;
//     addGroupEvent =  DOM.ulLinks;
//     UICtrl.$qs(addGroupEvent).addEventListener('click', function (e) {
//       e.preventDefault()

//       if(e.target.classList.contains('add_group--panel')){
//         UIPanelCtrl.createPanelBoard()
//         UICtrl.createPanelBoard()
//         addInputBtnEvent(data)
//         //UICtrl.createPanelBoard(DOM.btnAddPanel);
//       }else if(e.target.dataset.panel ===`${DOM.inputAddPanelBtn}`){
//         var value = document.querySelector(`${DOM.inputAddPanel} input`).value
//         if(value){
//           addInputBtnEvent(data)
//           PanCtrl.hideAllPanls(data, document.querySelectorAll('.contentPanel'))

//         }

//       }else if (e.target.dataset.target) {
//         var target = e.target.dataset.target
//         if(document.querySelector(`[data-index="${target}"]`)) {
//           PanCtrl.hideAllPanls(data, document.querySelectorAll('.contentPanel'))
//           document.querySelector(`[data-index="${target}"]`).classList.add('active')
//           StorCtrl.addToStor()

//         }
//       }
//      // UICtrl.createPanelBoard(addGroup);
//     });
//     inputGbtn = document.querySelector(`${DOM.inputAddPanel} input`)
//     if (!inputGbtn.classList.contains('d-none')) {
//       inputGbtn.addEventListener('keypress',function (e) {
//         if (e.code === 'Enter') {
//           addInputBtnEvent(data)
//           StorCtrl.addToStor()
//         }
//       })
//     }
//   }
//   return {
//     init: function () {

//       setupEvents()
//       PanelCotroller.loadContent(data, UICtrl.$qs(DOM.ulLinks),data.panels)
//       PanelCotroller.loadCards(data, UICtrl.$qs('.tasks'),data.panels)
//     }
//   }


// })(UIController, PanelCotroller, StoreController, TodoController, UIPanelCotroller);

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
