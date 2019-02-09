var UICards = (function () {
  return {
    addCard: function (parent, value, index, description) {
      var html;
      html = `<div class="card js-list animated fadeIn delays-2" data-tasks="${index}">
            <div class="card-body">
              <h5 class="card-title">${value}</h5>
              <p class="card-text">${description}</p>
            </div>
            </div>`
      parent.insertAdjacentHTML('beforeend', html)
    },
  }
})()
