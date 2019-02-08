var StoreController = (function () {
  var data;
  if(localStorage.getItem("data") === null ){
    data = {
      panels: [],
    }
  } else {
    data = JSON.parse(localStorage.getItem('data'))
  }
  return {

    addToStor: function () {
      window.localStorage.setItem('data', JSON.stringify(data))
    },
    data
  }
})();

