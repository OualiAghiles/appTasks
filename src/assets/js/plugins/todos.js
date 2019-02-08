var TodoController = (function () {


  return {
    capture : function (data, inputLabel) {
      inputLabel.addEventListener('keypress', function (e) {
        if(e.code === 'Enter') {
          var containerTask, listTitle;
          containerTask = inputLabel.parentNode.parentNode;
          listTitle = inputLabel.value;
          containerCards = containerTask.querySelector('.card-columns')
          TodoController.updateDom(containerTask, listTitle, data);
          TodoController.addCard(data, containerCards, listTitle)
          inputLabel.parentNode.removeChild(inputLabel)
        }
      })
    },
    createTitlePanel: function (data, index, value) {
      var html;
      html = `<div class="contentPanel active" data-index="${index}">
                <h6 class="mt-3">
                  <span class="display-4">${value}</span>
                  <button class="btn btn-success float-right addList d-none"> <i class="fas fa-plus"></i> </button>
                </h6>
                <hr>
                <div class="tasks">
                  <div class="input-group input-group-lg addTask">
                    <input type="text" class="form-control" placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                  </div>
                  <div class="task">
                    <div class="card-columns">
                    </div>
                  </div>
              </div>`
      document.querySelector('.js-container').insertAdjacentHTML('beforeend', html);
      var container = document.querySelector(`[data-index="${index}"]`);
      var inputLabel = container.querySelector('.tasks .addTask input');
      inputLabel.focus()
      TodoController.capture(data, inputLabel)

    },
    addCard: function (data, parent, value) {
      var html;
      html = `<div class="card js-list">
            <div class="card-body">
              <h5 class="card-title">${value}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>`
      parent.insertAdjacentHTML('beforeend', html)
    },
    updateDom: function ( parent, value, data) {
      var index, btnAddList, container;
      index = parent.parentNode.dataset.index
      container = document.querySelector(`[data-index = "${index}"]`)
      btnAddList = container.querySelector('.addList')
      btnAddList.classList.remove('d-none')
      UIPanelCotroller.addBtnLinkPanel(index, value)
      if (data.panels[index].items.length > 0) {
        id = data.panels[index].items[data.panels[index].items.length - 1].panelID + 1
      } else {
        id = 0
      }
      PanelCotroller.addNewPanel(data, index, id, value, [])
    }
  }

})();
