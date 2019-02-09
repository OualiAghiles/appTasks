/**
 * Create html structure
 * Eventehandlers on board
 * Load content from localStorage
 * update ui content
 */


var UIBoardController = (function () {




    return {
        initBoard: function (container) {
            var html;
            html = `<div class="contentPanel active animated fadeIn delay-1s">
                            <div class="input-group input-group-lg  addBoard" >
                                <input type="text" class="form-control " placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <hr>
                        <div class = "tasks" >
                            <div class = "task" >
                              <div class = "card-columns" >
                              </div> 
                            </div> 
                        </div>`;
            document.querySelector(`${container}`).innerHTML= "";
            document.querySelector(`${container}`).insertAdjacentHTML('beforeend', html);
            setTimeout(function () {
              document.querySelector('.addBoard input').focus();
              console.log('hi')
            },1000)
        }
    }


  })();




var MainBoardController = (function () {
  var data = StoreController.data;

  return {
      handleInputAddBoard: function () {
        var input = document.querySelector('.addBoard input')
        input.addEventListener('keypress', function (e) {
            if (e.key === "Enter" || e.charCode === 0 || e.keyCode=== 13) {
                var value = input.value;
                var index ;
                if(data.panels.length > 0) {
                  index = data.panels[data.panels.length - 1].id + 1
                } else {
                  index = 0
                }

              PanelController.createTitlePanel( index, value)
              PanelController.addGroupPanelObj(data, index, value)
              UIControler.addInputBtnEvent(value, index)
              MainBoardController.handleInputAddTasks(data)

              StoreController.addToStor();
            }
          })

      },
      handleInputAddTasks: function (data) {
        var input = document.querySelector('.addTask input')
        input.addEventListener('keypress', function (e) {
          if (e.key === "Enter" || e.charCode === 0 || e.keyCode=== 13) {
            console.log('fired')

            var value , index, i , parent;
            value = input.value;
            i = parseInt(input.dataset.board);
            console.log(input.dataset.board)
            if(data.panels[i].boards.length > 0) {
              index = data.panels[i].boards[data.panels[i].boards.length - 1].id + 1
            } else {
              index = 0
            }
            parent = document.querySelector(`[data-child="${i}"`)
            UICards.addCard(parent, value)
            PanelController.addNewPanel(data, i, index,value, [])
            UIControler.addSubLinks(i, value, index)
            input.value = "";

            //UIControler.addInputBtnEvent(value, index)
            //StoreController.addToStor();
          }
        })
      },
    handleMenu: function (data) {
      var menuEvenListener = document.querySelector('.js-menu')
      menuEvenListener.addEventListener('click', function (e) {
        console.log(e.target)
        if(e.target.classList.contains('add_group--panel')){
          console.log('add new pannel')
          UIBoardController.initBoard('.js-container', true)
          MainBoardController.handleInputAddBoard()

        } else {
          var target, val;
          target = e.target.dataset.target
          target = parseInt(target)
          val = e.target.innerText
          console.log('target', target)
          console.log('value', e.target.innerText)
          PanelController.createTitlePanel(target, val)
          MainBoardController.loadContent(data,target)
          MainBoardController.handleInputAddTasks(data)
        }

      })
    },
    loadContent: function (data, i) {
      var boards = data.panels[`${i}`]
      PanelController.createTitlePanel(boards.id, boards.nameGroup)
      //UIControler.addInputBtnEvent(boards.nameGroup, boards.id)
      if (boards.boards.length > 0 ){
        var parent = document.querySelector(`[data-child="${i}"]`);
        boards.boards.forEach(function (item) {
          UICards.addCard(parent, item.boardName);

        })

      }

    },
    loadMenu: function (data) {
      data.panels.forEach(function(board){
        console.log('boards',board)
        UIControler.addBoardPanelLink(document.querySelector('.js-menu'),board.nameGroup,board.id)
        if (board.boards.length > 0){
          board.boards.forEach(function (panel) {
            UIControler.addSubLinks(board.id,panel.boardName, panel.id)

          })
        }
        //UIControler.addSubLinks(board.id,item.boardName, item.id)
      })
    }

  }

})();


