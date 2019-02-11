/**
*
*    Description
-----------------------------------



-----------------------------------

*    Steps
-----------------------------------



-----------------------------------
*
**/

var TodosPanel = (function(){
 var doto = function(arrg1,arrg2) {
    this.arrg1 = arrg1
    this.arrg2 = arrg2
 }

  var search = function(arr,val, findItem) {
    var panelID = arr.findIndex((panel) => findItem(panel.boards, val) !== -1);
     var boardID = findItem(arr[panelID].boards, val);
    return [panelID, boardID];
  }

  var findItem = function(arr, val) {
    return arr.findIndex((item) => item.boardName === val);
  };
  var description = function (elem) {
    html = `<div class="alert alert-light" role="alert">
                          <h4>Description</h4>
                          <p>${elem.description}</p>
                        </div>`
    return html;
  }

  var textareaDesc = function () {
    html = `<div class="form-group">
                    <label for="exampleFormControlTextarea1">Ajouter une description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>`
    return html;
  }

// public
 return {
   createContentTodo: function (data, value, i, container) {
     var indexs = search(data.panels, value, findItem)
     console.log(indexs)
     var elem = data.panels[indexs[0]].boards[indexs[1]]
     if (elem.boardName === value && elem.id === i) {
       container.insertAdjacentHTML('beforeend', `<div class="tasks"  data-lists="${i}"></div>`)
       var tasks = container.querySelector('.tasks')
       var html;
       if (elem.description !== "") {
         html = description(elem);

       } else {
         html = textareaDesc();
       }
       tasks.insertAdjacentHTML('beforeend', html)
     }
     ListeApp.handleAddList()

   },
   createTodoPanelTitle: function (data, index, value) {
    var html, i;
    i= index
    html = `<div class="contentPanel active animated fadeIn fast" data-index="${index}">
                <h6 class="mt-3 d-flex">
                  <span class="display-3" style="flex: 1">${value}</span>
                  <button class="btn btn-small btn-success float-right addList"> <i class="fas fa-plus"></i> </button>
                 
                </h6>
                <hr>
                
                </div>`;
    var container = document.querySelector('.js-container')
    container.innerHTML = "";
    container.insertAdjacentHTML('beforeend', html);
    //var test = Array.prototype.slice.call()
     TodosPanel.createContentTodo(data, value, i, '.contentPanel');
  }
 }
})()
/*
*
*
* <div class="tasks"  data-lists="${index}">
*
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Ajouter une description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <hr>
                  <h4>Featured</h4>
                  <div class="card mb-3">

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                      </ul>
                  </div>
* */


var todosControl = (function() {


  // add description
  
  

  return{
    handleSaveDescription: function (data) {
      
      var containerDesc = document.querySelector('.js-panel-description');
      containerDesc.querySelector('button').addEventListener('click', function () {
        var desc = containerDesc.querySelector('textarea').value 
        containerDesc.parentNode.removeChild(containerDesc)
        html = TodosPanel.descHTML(desc)
        document.querySelector('.tasks').insertAdjacentHTML('beforeend', html)
        var pan = document.querySelector('[data-index]')
        //var i = pan.dataset.index
        var val = pan.querySelector('h6 span').innerHTML
        console.log(document.querySelector('[data-index]'))
        data.panels.forEach(function (curr, index, arr) {
          curr.boards.forEach(function (elem, index2, arr2) {
            if (elem.boardName === val) {
             elem.description = desc
            }
      
      
          })
        })
        StoreController.addToStor()
      })
    },

  }
  	
})();