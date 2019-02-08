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
          console.log('data',data)
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
              StoreController.addToStor();
            }
          })
      },
      handleInputAddTasks: function (data) {
        var input = document.querySelector('.addTask input')
        input.addEventListener('keypress', function (e) {
          if (e.key === "Enter" || e.charCode === 0 || e.keyCode=== 13) {
            var value , index, i , parent;
            value = input.value;
            i = parseInt(input.dataset.board);

            if(data.panels[i].boards.length > 0) {


              index = data.panels[i].boards[data.panels[i].boards.length - 1].id + 1
            } else {
              index = 0
            }
            parent = document.querySelector(`[data-child="${i}"`)
            console.log(parent)
            UICards.addCard(parent, value)
            PanelController.addNewPanel(data, i, index,value, [])
            //UIControler.addInputBtnEvent(value, index)
            //StoreController.addToStor();
          }
        })
      },
    loadContent: function (data) {
      var boards = data.panels
      PanelController.createTitlePanel(boards[0].id, boards[0].nameGroup)
      UIControler.addInputBtnEvent(boards[0].nameGroup, boards[0].id)
    }

  }

})();


