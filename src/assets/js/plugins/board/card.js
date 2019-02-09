var UICards = (function () {
  return {
    addCard: function (parent, value, index) {
      var html;
      html = `<div class="card js-list animated fadeIn delays-2" data-tasks="${index}">
            <div class="card-body">
              <h5 class="card-title">${value}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>`
      parent.insertAdjacentHTML('beforeend', html)
    },
  }
})()
