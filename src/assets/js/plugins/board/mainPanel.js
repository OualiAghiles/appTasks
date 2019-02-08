/**
 *
 *    Description
 *
 -----------------------------------



 -----------------------------------
 *
 *    Steps
 *
 -----------------------------------



 -----------------------------------
 *
 **/

var PanelController = (function () {
  var AddPanelBoard = function (id, value, boards) {
    this.id = id;
    this.nameGroup = value;
    this.boards = boards;
  };
  var board = function (id, boardName, panelLists) {
    this.id = id;
    this.boardName = boardName;
    this.panelLists = panelLists;
  }



  // public
  return {
    addGroupPanelObj: function(data, index, val){
      var newPanelGroup, index, items;
      items= [];
      newPanelGroup = new  AddPanelBoard(index, val, items)
      data.panels.push(newPanelGroup)
    },
    addNewPanel: function(data,index, id, val, list) {
      var newPanel,  list;
      list= [];
      newPanel = new  board(id, val, list)

      data.panels[index].boards.push(newPanel)
      StoreController.addToStor()
    },
    createTitlePanel: function ( index, value) {
      var html;
      html = `<div class="contentPanel active" data-index="${index}">
                <h6 class="mt-3 d-flex">
                  <span class="display-4" style="flex: 1">${value}</span>
                  <button class="btn btn-success float-right addList d-none"> <i class="fas fa-plus"></i> </button>
                  <div class="input-group input-group-lg addTask " style="flex: 1">
                    <input type="text" class="form-control" data-board="${index}" placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                  </div>
                </h6>
                <hr>
                <div class="tasks" >
                  
                  <div class="task">
                    <div class="card-columns" data-child="${index}">
                    </div>
                  </div>
              </div>`;
      document.querySelector('.js-container').innerHTML = "";
      document.querySelector('.js-container').insertAdjacentHTML('beforeend', html);

        var container = document.querySelector(`[data-index="${index}"]`);
        var inputLabel = container.querySelector('.addTask input');
        inputLabel.focus()


      //TodoController.capture(data, inputLabel)

    },
}
})();
