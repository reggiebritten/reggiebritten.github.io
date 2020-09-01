$(document).ready(function(){

let dbData = [];
let skillData = [];
let itemData = [];

  $.get("items.db", function(data){
    data = "["+data.replace(/}\n/g, "},");
    data = data.substring(0, data.length - 1)  + "]";
    dbData = JSON.parse(data);
    console.log(dbData)
    for (var i = 0; i < dbData.length; i++) {

      if (dbData[i].type == "ability"){
        skillData.push(dbData[i]);
      } else if (dbData[i].type == "item"){
        itemData.push(dbData[i]);
      }
    }
    console.log(skillData);
    console.log(itemData);
  });


["#magebutton", "#warriorbutton"].forEach( function(element){
  $(element).tooltip({
    content: element
  });
} );



  var hash ='';
  $("#magebutton").click(function(){
    hash = "mage"
    window.location.hash = hash
  });
  $("#warriorbutton").click(function(){
    hash = "warrior"
    window.location.hash = hash
  });
  





});



  

function updateHash() {
  var hash = window.location.hash
  console.log(hash)
  }

window.onhashchange = updateHash;
