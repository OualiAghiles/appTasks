var TodoController = (function () {

  return {
    createTitlePanel: function (index, value) {
      var html;
      html = `<div class="contentPanel active" data-index="${index}">
              <h6 class="mt-3">
                <span class="display-4">${value}</span>
                
              </h6>
              <hr>
              <div class="tasks">
              <div class="input-group input-group-lg addTask">
                <input type="text" class="form-control" placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
              </div>
              </div>
            </div>`
      document.querySelector('.js-container').insertAdjacentHTML('beforeend', html);
      var container = document.querySelector(`[data-index="${index}"]`);
      var inputLabel = container.querySelector('.tasks .addTask input');
      inputLabel.focus()
      CaptureFocus.capture((inputLabel))
    }
  }

})();
var createListTodo = function (parent, value) {
  var html, index;
  html = `<div class="task">
              <div class="card-columns">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${value}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
                </div>
            </div>
          </div>`
  parent.insertAdjacentHTML('beforeend', html)
  index = parent.parentNode.dataset.index
  UIController.addBtnLinkPanel(index, value)

}

var CaptureFocus = (function () {
  return {
    capture: function (inputLabel) {
      inputLabel.addEventListener('keypress', function (e) {
        if(e.code === 'Enter') {
          var containerTask, listTitle;
          containerTask = inputLabel.parentNode.parentNode;
          listTitle = inputLabel.value;
          createListTodo(containerTask, listTitle)
          inputLabel.parentNode.removeChild(inputLabel)
        }
      })
    }
  }
})()
