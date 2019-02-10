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

var ListeApp = (function () {
  // var  = function (, ) {
  //   this. =
  //   this. =
  // }
  var inputListName = function () {
    var html = `<div class="card addListCard">
                  <div class="card-body">
                    <div class="form-group">
                     <input class="form-control form-control-lg addListName" type="text" placeholder="Add List Name">
                    </div>
                    <hr>
                    <select class="form-control form-control-sm">
                      <option>Choose Label</option>
                    </select>
                        <button class="btn btn-sm btn-outline-primary createList">create</button>

                  </div>
                </div>`
    return html
  }
  var createListCard = function (value) {
    html = `<hr>
                  <h4>${value}
                    <span>
                    <i class="fas fa-plus"></i>
</span>
                  </h4>
                  <div class="card mb-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><div class="form-group">
                        <input class="form-control form-control-lg addTod" type="text" placeholder="Add Todo">
                    </div></li>
                      </ul>
                  </div>`
    return html
  };
  var createTodo = function (value) {
    var html = `<li class="list-group-item">
                    <span>${value}</span>
                    <span>
                    <i class="fas fa-check"></i>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash"></i>
</span>
                    </li>`;
    return html
  };
  var inputAddTodo = function () {
    var input = document.querySelector('.addTod')
    var el = input.parentNode.parentNode
    input.addEventListener('keypress', function (e) {
      if(e.key === 'Enter') {
        console.log(el)

        el.insertAdjacentHTML('beforebegin', createTodo(e.target.value))
        input.value = ''
      }
    })
  }
  var initList =  function () {
     var tasks = document.querySelector('.tasks')
      tasks.insertAdjacentHTML('beforeend',inputListName() )
      tasks.querySelector('.addListName').focus()
      tasks.querySelector('.createList').addEventListener('click', function () {
        var val = tasks.querySelector('.addListName').value
        var blockAddList = tasks.querySelector('.addListCard')
        blockAddList.parentNode.removeChild(blockAddList)
        tasks.insertAdjacentHTML('beforeend',createListCard(val))
        inputAddTodo()
      })

  }

  // public
  return {
    handleAddList:  function () {
      document.querySelector('.addList').addEventListener('click', function () {
        initList()
      })
  }
}
})()
