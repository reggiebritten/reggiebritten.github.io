$(document).ready(function(){

//Get item and skill data
  $.get("items.db", function(data){
    var dbData = [];
    var skillData = [];
    var itemData = [];
    data = "["+data.replace(/}\n/g, "},");
    data = data.substring(0, data.length - 1)  + "]";
    dbData = JSON.parse(data);

    //Do stuff with item and skill data
    for (var i = 0; i < dbData.length; i++) {
      if (dbData[i].type == "ability"){
        skillData.push(dbData[i]);
      } else if (dbData[i].type == "item"){
        itemData.push(dbData[i]);
      }
    }
    var threat5 = [];

    for (var i = 0; i < skillData.length; i++) {
      if (skillData[i].data.threat == 5){
        threat5.push(skillData[i]);
      }
    }

    for (var i = 0; i < threat5.length; i++) {
      //console.log(threat5[i].data.summary)


      //document.getElementById("skills").innerHTML += threat5[i].data.summary;

    }





  });







  var hash ='';
  $("#magebutton").click(function(){
    hash = "mage"
    window.location.hash = hash
  });
  $("#warriorbutton").click(function(){
    hash = "warrior"
    window.location.hash = hash
  });


//Convert keywords into links
   const keywords = ["Bleeding", "Blessed", "Blinded", "Burning", "Chilled", "Choking", "Compelled", "Corroding", "Cursed", "Deafened", "Defenseless", "Distracted", "Drunk", "Empowered", "Encumbered", "Frightened", "Fumbling", "Grabbed", "Guarded", "Hastened", "Hidden", "Honed", "Invisible", "Kneeling", "Oiled", "Petrified", "Provoked", "Relaxed", "Restrained", "Shocked", "Slowed", "Staggered", "Stunned", "Surprised", "Unbalanced", "Unconscious", "Vortexed", "Weakened", "Wet", "Wracked", "Disarmed", "Knocked-Down", "Confused", "Base focus", "Base momentum", "Base poise", "Attack", "Boon", "Boons"];
    keywords.forEach(function(keyword){
      var re = new RegExp("("+keyword+")", 'gi');
      Array.from(document.getElementsByTagName("P")).forEach(
        element => element.innerHTML = element.innerHTML.replace(re, `<a href="#${keyword.toLowerCase()}" title="tooltipPlaceHolder" class="keyword-${keyword.replace(' ', '-').toLowerCase()}"><strong>$1</strong></a>`)
        );
    });


//Add icons before relevant text
   const icons = ["Bleeding", "Blessed", "Blinded", "Burning", "Chilled", "Choking", "Compelled", "Corroding", "Cursed", "Deafened", "Defenseless", "Distracted", "Drunk", "Empowered", "Encumbered", "Frightened", "Fumbling", "Grabbed", "Guarded", "Hastened", "Hidden", "Honed", "Invisible", "Kneeling", "Oiled", "Petrified", "Provoked", "Relaxed", "Restrained", "Shocked", "Slowed", "Staggered", "Stunned", "Surprised", "Unbalanced", "Unconscious", "Vortexed", "Weakened", "Wet", "Wracked", "Focus", "Momentum", "Poise", "Disarmed", "Knocked-Down", "Confused"];
   icons.forEach(function(icon){
      var re = new RegExp(`(?<!base\\s)(?<!Base\\s)(?<!#)(${icon.toLowerCase()})(?!"><strong>)`, 'gi');
      Array.from(document.getElementsByTagName("P")).forEach(
        element => element.innerHTML = element.innerHTML.replace(re, `<img src='/images/icons/${icon.toLowerCase()}.png' class='inlineicon'> <strong>$1</strong>`)
        );
    });


//Bold numbers
    var re= new RegExp('(^|\\s)((\\+|\\-)\\d+)(\\s|$)', 'g');
    Array.from(document.getElementsByTagName("P")).forEach(element => element.innerHTML = element.innerHTML.replace(re, '<strong>$1$2$4</strong>'));


//Get journal data
  $.get("journal.db", function(data){
    let journalData = [];
    data = "["+data.replace(/}\n/g, "},");
    data = data.substring(0, data.length - 1)  + "]";
    journalData = JSON.parse(data);

//Add tooltips
      keywords.forEach(function(keyword){
        for (var i=0; i < journalData.length; i++) {
          if (journalData[i].name.toLowerCase() === keyword.toLowerCase()) {
            $('.keyword-'+keyword.replace(' ', '-').toLowerCase()).tooltip({
            content: `<div class="box tooltip"><img src="images/icons/${keyword}.png" class="tooltip-icon"><h2>${keyword}</h2>${journalData[i].content}</div>`,
            position: { my: "left top+15", at: "left bottom", collision: "flipfit" },
            });
          }
        }
      });
  });



  














});










function updateHash() {
  var hash = window.location.hash
  console.log(hash)
  }

window.onhashchange = updateHash;

$(".ui-helper-hidden-accessible").remove();









