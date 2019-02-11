

var UIModal = (function () {
  return {
    initModal: function ( title, index) {
      var html = `<!-- Modal -->
                <div class="modal fade"  tabindex="-1" role="dialog"  aria-hidden="true" data-card="${index}">
                  <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-8">
                            <h5>Description</h5>
                            <div class="js-input-description">
                            <div class="form-group">
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <hr>
                            <a class="btn btn-outline-success" data-card="${index}">Enregister</a>
                            </div>
                            
                            </div>
                            <div class="col-4">
                            <h6>Ajouter a la carte</h6>
                            <div class="list-group">
                                <li class="list-group-item list-group-item-action" style="position: relative">
                                Label
                                <div class="card cardDropDown bg-light mb-3 shadow-lg" style="position: absolute; z-index: 1090;top:47px;right:0">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"> <div class="form-group m-0">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                      </div>
                                      </li>
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                  </ul>
                              </div>
                                </li>
                                <li class="list-group-item list-group-item-action">Add todos</li>
                                <li  class="list-group-item list-group-item-action">date limit</li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>`;
      return html
    }
  }

})();


var ModalController = (function (UIModal) {

  return {
    createModal: function () {
      var btn = document.querySelector('[data-card="0"]');
      btn.addEventListener('click', function () {
        var container = document.querySelector('.container')
        var html = UIModal.initModal('test', 0)
        container.insertAdjacentHTML('beforeend', html)
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').offsetWidth

        document.querySelector('.modal').style.background= "rgba(0,0,0,0.65)";
        document.querySelector('.modal').classList.toggle('show')

        //
      })
    }
  }
})(UIModal);
ModalController.createModal()
