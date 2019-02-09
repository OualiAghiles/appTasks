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
  createTodoPanelTitle: function (index, value) {
    var html;
    html = `<div class="contentPanel active" data-index="${index}">
                <h6 class="mt-3 d-flex">
                  <span class="display-3" style="flex: 1">${value}</span>
                  <button class="btn btn-small btn-success float-right addList"> <i class="fas fa-plus"></i> </button>
                 
                </h6>
                <hr>
                <div class="tasks"  data-lists="${index}">
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
                  </div>`;
    document.querySelector('.js-container').innerHTML = "";
    document.querySelector('.js-container').insertAdjacentHTML('beforeend', html);

  }
 }
})()
