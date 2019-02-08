/**
 * Create html structure
 * Eventehandlers on board
 * Load content from localStorage
 * update ui content
 */


var UIBoardController = (function () {

    var board = function (id, boardName, type) {
        this.id = id;
        this.boardName = boardName;
        this.type = type;
    }
  
  
    return {
        initBoard: function (container) {
            var html;
            html = `<div class="contentPanel active animated fadeIn delay-1s">
                        <div class="input-group input-group-lg addTask ">
                        <input type="text" class="form-control" placeholder="add First list" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                        </div>
                    <hr>
                    <div class="tasks">
                        
                        <div class="task">
                        <div class="card-columns">
                        </div>
                        </div>
                    </div>`;
            document.querySelector(`${container}`).innerHTML= "";
            document.querySelector(`${container}`).insertAdjacentHTML('beforeend', html);
            document.querySelector(`${container} .addTask input`).focus();
        }
    }
  
  
  })();
  



var MainBoardController = (function () {


    return {
        handleInputAddBoard: function () {
            var input = document.querySelector('.addTask input')
            document.addEventListener('keypress', function (e) {
                if (e.key === "Enter" || e.charCode === 0 || e.keyCode=== 13) {
                    var value = e.target.value;
                    
                }
            })
        }
    }

})();


