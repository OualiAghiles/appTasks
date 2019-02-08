var PanelCotroller = (function () {
  var AddGroupPanel = function (id, value, items) {
    this.id = id;
    this.nameGroup = value;
    this.items= items;
  };
  var AddPanel = function (id, panelName, panelLists) {
    this.panelID = id;
    this.panelName = panelName;
    this.pnelLists = panelLists;
  };


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
    addNewPanel: function(data,index, id, val, list) {
      var newPanel, id, list;
      list= [];
      newPanel = new  AddPanel(id, val, list)

      data.panels[index].items.push(newPanel)
      StoreController.addToStor()
    },
    loadContent: function (data, parent, arr) {
      arr.forEach(function (item) {
        UIPanelCotroller.addBoardPanelLink(parent,item.nameGroup,item.id)
        TodoController.createTitlePanel(data, item.id,item.nameGroup)
        item.items.map(function (list) {
          var subLink = parent.querySelector(`[data-target="${item.id}"]`).parentNode.parentNode
          console.log(subLink)
          UIPanelCotroller.addBoardPanelLink(subLink,list.panelName,list.id)
        })
      })
    },
    loadCards: function (data, parent, arr) {
      arr.forEach(function (item) {
        item.items.map(function (list) {
          var content = parent.querySelector('.task .card-columns')
          TodoController.addCard(data, content, list.panelName)
        })
      })

    }
  }


})();
var UIPanelCotroller = (function () {
  var getDomStrins = function () {
    return UIController.getDomStrings()
  };
  return {
    createPanelBoard: function () {
      var html;
      html = `<div class="contentPanel active">
                 <div class="input-group input-group-lg addTask">
                    <input type="text" class="form-control" placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                  </div>
                <hr>
                <div class="tasks">
                 
                  <div class="task">
                    <div class="card-columns">
                    </div>
                  </div>
              </div>`
      document.querySelector('.js-container').insertAdjacentHTML('beforeend', html);

      //addInputBtnEvent(data)
      //TodoController.capture(data, inputLabel)

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
      var link, html, dom;
      dom = getDomStrins();
      link = UIController.$qs(`${dom.ulLinks} [data-target="${index}"]`);
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
    }
  }
})()
