



$(document).ready(function(){



//Get item and skill data
  var dbData = [];
  var skillData = [];
  var itemData = [];
  $.get("items.db", function(data){
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
    console.log(skillData);
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
    const keywords = ["Bleeding", "Blessed", "Blinded", "Burning", "Chilled", "Choking", "Compelled", "Corroding", "Cursed", "Deafened", "Defenseless", "Distracted", "Drunk", "Empowered", "Encumbered", "Frightened", "Fumbling", "Grabbed", "Guarded", "Hastened", "Hidden", "Honed", "Invisible", "Kneeling", "Oiled", "Petrified", "Provoked", "Relaxed", "Restrained", "Shocked", "Slowed", "Staggered", "Stunned", "Surprised", "Unbalanced", "Unconscious", "Vortexed", "Weakened", "Wet", "Wracked", "Disarmed", "Knocked-Down", "Confused", "bleeding", "blessed", "blinded", "burning", "chilled", "choking", "compelled", "corroding", "cursed", "deafened", "defenseless", "distracted", "drunk", "empowered", "encumbered", "frightened", "fumbling", "grabbed", "guarded", "hastened", "hidden", "honed", "invisible", "kneeling", "oiled", "petrified", "provoked", "relaxed", "restrained", "shocked", "slowed", "staggered", "stunned", "surprised", "unbalanced", "unconscious", "vortexed", "weakened", "wet", "wracked", "disarmed", "knocked-down", "confused", "base focus", "base momentum", "base poise","Base focus", "Base momentum", "Base poise"];
    keywords.forEach(function(keyword){
      var re = new RegExp(keyword, 'g');
      Array.from(document.getElementsByClassName("FoLedit")).forEach(
        element => element.innerHTML = element.innerHTML.replace(re, `<a href="#${keyword.toLowerCase()}" class="keyword ${keyword.replace(' ', '-').toLowerCase()}" title='tooltipPlaceHolder'><b>${keyword}</b></a>`)
        );
    });


//Add icons before relevant text
    const icons = ["Bleeding", "Blessed", "Blinded", "Burning", "Chilled", "Choking", "Compelled", "Corroding", "Cursed", "Deafened", "Defenseless", "Distracted", "Drunk", "Empowered", "Encumbered", "Frightened", "Fumbling", "Grabbed", "Guarded", "Hastened", "Hidden", "Honed", "Invisible", "Kneeling", "Oiled", "Petrified", "Provoked", "Relaxed", "Restrained", "Shocked", "Slowed", "Staggered", "Stunned", "Surprised", "Unbalanced", "Unconscious", "Vortexed", "Weakened", "Wet", "Wracked", "Focus", "Momentum", "Poise", "Disarmed", "Knocked-Down", "Confused", "bleeding", "blessed", "blinded", "burning", "chilled", "choking", "compelled", "corroding", "cursed", "deafened", "defenseless", "distracted", "drunk", "empowered", "encumbered", "frightened", "fumbling", "grabbed", "guarded", "hastened", "hidden", "honed", "invisible", "kneeling", "oiled", "petrified", "provoked", "relaxed", "restrained", "shocked", "slowed", "staggered", "stunned", "surprised", "unbalanced", "unconscious", "vortexed", "weakened", "wet", "wracked", "focus", "momentum", "poise", "disarmed", "knocked-down", "confused"];
    icons.forEach(function(icon){
      var re = new RegExp('(?<!base )(?<!Base )(?<!-)(?<!#)(?<!class="keyword\\s)'+icon, 'g');
      Array.from(document.getElementsByClassName("FoLedit")).forEach(
        element => element.innerHTML = element.innerHTML.replace(re, `<b><img src='/images/icons/${icon.toLowerCase()}.png' class='inlineicon'> ${icon}</b>`)
        );
    });


//Bold numbers
    var re= new RegExp('(^|\\s)((\\+|\\-)[0-9])(\\s|$)', 'g');
    Array.from(document.getElementsByClassName("FoLedit")).forEach(element => element.innerHTML = element.innerHTML.replace(re, '<b>$1$2$4</b>'));


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
            $('.'+keyword.replace(' ', '-')).tooltip({
            content: `<h3>${keyword}</h3>${journalData[i].content}`,
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