var UIdropDown = (function () {
  return{
    initDropDown: function () {
        var dropDown = document.querySelector('.cardDropDown')
        dropDown.classList.add('animated', 'fadeIn')
        dropDown.offsetWidth
        dropDown.style.display = 'block'
    }

  }
})();

var DropDownController = (function () {
    return {
      cardActions: function () {
        var lists = document.querySelectorAll('.actions-card')
        lists.forEach(function (elem) {
          elem.addEventListener('click', function (e) {
            e.preventDefault()
            UIdropDown.initDropDown()
            e.stopPropagation()

          })
        })
      }
    }
})()
