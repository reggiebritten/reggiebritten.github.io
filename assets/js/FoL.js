$(document).ready(function(){

//Get item and skill data
  $.get("/assets/data/items.db", function(data){
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




//Create keyword links, icons & tooltips
  $.get("/assets/data/keywords.json", function(json){
    json.forEach(function(keyword){

//Define Variables
      var re = new RegExp('^([^]*?)(?<!&nbsp;|/|="|base )(\\b'+keyword.keyword+'s?\\b)(?! dice| die| pool| terrain)', 'gi');

      var link = '';
      var closelink = '';
      var tooltipClass = '';
      var icon = '';
      if (keyword.icon) {
        icon= `<img src='/images/icons/${keyword.keyword}.png'>`
      };



    //Create Tooltips
    if (keyword.page){
      $.get(`/${keyword.page}.html`, function(data){
        var paragraphs = $(`#${keyword.hash}`, $(data)).nextUntil('h2, h1, h3', ':not(blockquote)');
        var test = $(`#${keyword.hash}`, $(data)).nextUntil('h2, h1, h3', ':not(blockquote)');
        var content= '';

        paragraphs.each(function(stuff){
        // console.log($(stuff).wrap( "<p></p>" ))
        })
        paragraphs.html(function (i, html){
        
          //console.log(html)
        
        
          content += html;









          //tooltip images

          json.forEach(function(keywordtooltip){
            var re2 = new RegExp('^([^]*?)(?<!&nbsp;|/|="|base )(\\b'+keywordtooltip.keyword+'s?\\b)(?! dice| die| pool)', 'gi');
          if (keywordtooltip.icon) {
            img2= `<img src='/images/icons/${keywordtooltip.keyword}.png'>`;
          }
          content= content.replace(re2, `$1<strong>${img2}&nbsp;$2</strong>`);
        })








          $(`.keyword-${keyword.keyword.replace(' ', '-')}`).tooltip({
            content: `<blockquote>${icon}<h2>${keyword.keyword}</h2>${content}</blockquote>`,
            position: { my: "left top+15", at: "left bottom", collision: "flipfit" },
            });
        })
    });
    }








//Create links      
      $('p').html(function (i, html){
        if (keyword.page) {
          tooltipClass = `keyword-${keyword.keyword.replace(' ', '-')}`;
          link = `<a href="/${keyword.page}.html#${keyword.hash}" title="tooltipPlaceHolder" class="${tooltipClass}">`;
          closelink = `</a>`;
        }
        return html.replace(re, `$1${link}<strong>${icon} $2</strong>${closelink}`)
      }
      );
    
    
    

    
    
    

    
    





    
    });
  });






//Bold numbers
    var re= new RegExp('(^|\\s)((\\+|\\-)\\d+)(\\s|$)', 'g');
    $('p').html(function (i, html){
        return html.replace(re, '<strong>$1$2$4</strong>');
    });

    

/*
//Get journal data
  $.get("/assets/data/journal.db", function(data){
    let journalData = [];
    data = "["+data.replace(/}\n/g, "},");
    data = data.substring(0, data.length - 1)  + "]";
    journalData = JSON.parse(data);

//Add tooltips
const keywords = ["bleeding", "blessed", "blinded", "burning", "chilled", "choking", "compelled", "corroding", "cursed", "deafened", "defenseless", "distracted", "drunk", "empowered", "encumbered", "frightened", "fumbling", "grabbed", "guarded", "hastened", "hidden", "honed", "invisible", "kneeling", "oiled", "petrified", "provoked", "relaxed", "restrained", "shocked", "slowed", "staggered", "stunned", "surprised", "unbalanced", "unconscious", "vortexed", "weakened", "wet", "wracked", "disarmed", "knocked-down", "confused", "base focus", "base momentum", "base poise", "attack", "boon", "bane", "legendary deed", "fateful deed", "fate", "fate dice", "fate die", "doom", "skill", "personality", "personal legend", "fated effect", "condition", "special terrain", "fighting style", "stress", "affliction"];
      keywords.forEach(function(keyword){
        for (var i=0; i < journalData.length; i++) {
          if (journalData[i].name.toLowerCase() === keyword.toLowerCase()) {
            $('.keyword-'+keyword.replace(' ', '-').toLowerCase()).tooltip({
            content: `<blockquote><img src="images/icons/${keyword}.png" class="tooltip-icon"><h2>${keyword}</h2>${journalData[i].content}</blockquote>`,
            position: { my: "left top+15", at: "left bottom", collision: "flipfit" },
            });
          }
        }
      });
  });

*/

  




//$( "section h1" ).wrapInner(function() {
// return "<span class='gold' data-heading='" + this.innerHTML + "'></span>";
// });
  
//  $( "section h2" ).wrapInner(function() {
//    return "<span class='silver' data-heading='" + this.innerHTML + "'></span>";
// });

  
//$('section p:first-of-type').html(function (i, html)
//{
//   return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="gold dropcap" data-heading="$1">$1</span>');
//});









$('blockquote p:first-of-type img').addClass( "quoteimg" );






});










function updateHash() {
  var hash = window.location.hash
  console.log(hash)
  }

window.onhashchange = updateHash;












//$(".ui-helper-hidden-accessible").remove();








