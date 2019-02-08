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

var PanelController = (function () {
  var AddGroupPanel = function (id, value, items) {
    this.id = id;
    this.nameGroup = value;
    this.items= items;
  };

  

  // public
  return {
    addGroupPanelObj: function(data, index, val){
      var newPanelGroup, index, items;
      items= [];
      newPanelGroup = new  AddGroupPanel(index, val, items)
      data.panels.push(newPanelGroup)
    },
}
})()

