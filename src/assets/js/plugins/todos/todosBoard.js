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


 // public
 return {
   createContentTodo: function (data, value, i, container) {
     data.panels.forEach(function (curr, index, arr) {
       curr.boards.forEach(function (elem, index2, arr2) {
         if (elem.boardName === value && elem.id === i) {
           container.insertAdjacentHTML('beforeend', `<div class="tasks"  data-lists="${i}"></div>`)
           var tasks = container.querySelector('.tasks')
           var html;
           if (elem.description !== "") {
             html = `<div class="alert alert-light" role="alert">
                          <h4>Description</h4>
                          <p>${elem.description}</p>
                        </div>`

           } else {
             html = `<div class="form-group">
                    <label for="exampleFormControlTextarea1">Ajouter une description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>`
           }
           tasks.insertAdjacentHTML('beforeend', html)
           // console.log('index',index)
           // console.log('arr',arr)
           // console.log('value',elem.boardName)
           // console.log('id',elem.id)
           // console.log('description',elem.description)
           // console.log('index2',index2)
           // console.log('arr2',arr2)
           console.log({curr, index, arr, elem, index2, arr2})
         }


       })
     })
   }, createTodoPanelTitle: function (data, index, value) {
    var html, i;
    i= index
    html = `<div class="contentPanel active" data-index="${index}">
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
     TodosPanel.createContentTodo(data, value, i, container);
  }
 }
})()
/*
*
*
* <div class="tasks"  data-lists="${index}">
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
                  <hr>
                  <h4>Featured</h4>
                  <div class="card border-dark">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                      </ul>
                  </div>
* */
