$(document).ready(function(){



  // var map = L.map('map', {
  //   crs: L.CRS.Simple,
  //   minZoom: -5
  // });
  // var bounds = [[0,0], [1652,1920]];
  // var image = L.imageOverlay('images/Aritadala.png', bounds).addTo(map);
  // map.fitBounds(bounds);








  try {var map = L.map('map')?.setView([0, 0], 1);} catch(err) {}



  console.log(map)

  if (map){
      L.tileLayer('images/test/{z}/{x}/{y}.png', {
        maxZoom: 2,
        minZoom: 1,
        noWrap: true
    }).addTo(map);
    
    var marker = L.marker([51.5, -0.09]).addTo(map);
  }











  // document.getElementById("gsc-i-id1").setAttribute("placeholder", "Enter your number");









$('.opener i').click(function(e) {
  $(this).closest('.opener').toggleClass('opened')
  $(this).closest('.opener').children('ul').animate({
    height: "toggle"
  }, 250);
})

$('#sidebar-handle').click(function(e) {
  if (!$('#sidebar').position().left){
    $('#sidebar').animate({
      left: "-320px",
    }, 500);
    $('#sidebar').css("overflow-y", "hidden")
  } else {
    $('#sidebar').animate({
      left: "0em",
    }, 500);
    $('#sidebar').css("overflow-y", "overlay")
  }
})

















// var $sidebar = $('#sidebar'),
// $sidebar_inner = $sidebar.children('.inner');

// // // Inactive by default on <= large.
// // breakpoints.on('<=large', function() {
// //   $sidebar.addClass('inactive');
// // });

// // breakpoints.on('>large', function() {
// //   $sidebar.removeClass('inactive');
// // });

// // // Hack: Workaround for Chrome/Android scrollbar position bug.
// // if (browser.os == 'android'
// // &&	browser.name == 'chrome')
// //   $('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
// //     .appendTo($head);

// // Toggle.
// $('<a href="#sidebar" class="toggle">Toggle</a>')
//   .appendTo($sidebar)
//   .on('click', function(event) {

//     // Prevent default.
//       event.preventDefault();
//       event.stopPropagation();

//     // Toggle.
//       $sidebar.toggleClass('inactive');

//   });

// // Events.

// // Link clicks.
//   $sidebar.on('click', 'a', function(event) {


//     // Vars.
//       var $a = $(this),
//         href = $a.attr('href'),
//         target = $a.attr('target');

//     // Prevent default.
//       event.preventDefault();
//       event.stopPropagation();

//     // Check URL.
//       if (!href || href == '#' || href == '')
//         return;

//     // Hide sidebar.
//       $sidebar.addClass('inactive');

//     // Redirect to href.
//       setTimeout(function() {

//         if (target == '_blank')
//           window.open(href);
//         else
//           window.location.href = href;

//       }, 500);

//   });

// // Prevent certain events inside the panel from bubbling.
//   $sidebar.on('click touchend touchstart touchmove', function(event) {

//     // // >large? Bail.
//     //   if (breakpoints.active('>large'))
//     //     return;

//     // Prevent propagation.
//       event.stopPropagation();

//   });

// // Hide panel on body click/tap.
//   $('#body').on('click touchend', function(event) {

//     // // >large? Bail.
//     //   if (breakpoints.active('>large'))
//     //     return;

//     // Deactivate.
//       $sidebar.addClass('inactive');

//   });








  
//Get item, skill & keyword data
$.get("/assets/data/items.db", function(items){

items = "["+items.replace(/}\n/g, "},");
items = items.substring(0, items.length - 1)  + "]";
items = JSON.parse(items);

const universal = [
  {
    name: "Act",
    type: "skill",
    img: "systems/forgeoflegends/icons/Skills/Skill-A-52.jpg",
    system: {
      type: "",
      tags: ["universal"],
      defenseType: "",
      targetType: "",
      effect:"Tell the GM what you want to accomplish. If the action is reasonable, the GM will tell you the challenge you may attempt, and how long it might take if you do.",
      yield:"",
      summary:"",
      isUniversal: true,
    },
  },
  {
    name: "Defend",
    type: "skill",
    img: "systems/forgeoflegends/icons/Skills/Skill-C-21.jpg",
    system: {
      type: "action",
      tags: ["defensive", "universal"],
      targetType: "utility",
      defenseType: "",
      yield:"",
      summary:"",
      effect: "You may remove one condition from youself, including one of the knocked-down, disarmed, or confused conditions. If you remove one of those conditions, gain +4 of the corresponding defense type Otherwise, gain +4 defense of a type of your choice.",
      isUniversal: true,
    },
  },
   {
     name: "Kick",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-G-138.jpg",
     system: {
       type: "action",
       tags: ["blunt", "universal"],
       targetType: "melee attack",
       defenseType: "poise",
       range: 1,
       effect:"",
       damageType: "momentum",
       diceNumber: 1,
       diceSize: 4,
       threat: 9,
       summary:"",
       isUniversal: true,
     },
   },
   {
    name: "Grab",
    type: "skill",
    img: "systems/forgeoflegends/icons/Skills/Skill-A-32.png",
    system: {
      type: "action",
      range: 1,
      effect: "",
      tags: ["barehanded", "universal"],
      defense: -2,
      defenseType: "momentum",
      targetType: "melee attack",
      threat: 10,
      damageType: "poise",
      diceNumber: 1,
      diceSize: 8,
      summary:"",
      yield: "Concentration: the target is grabbed by you.",
      isUniversal: true,
    },
  },
   {
     name: "Dash",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-A-79.png",
     system: {
       type: "maneuver",
       tags: ["universal"],
       targetType: "utility",
       defenseType: "",
       yield:"",
       summary:"",
       effect:"Move up to three spaces.",
       isUniversal: true,
     }
   },
   {
     name: "Shift",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-A-25.png",
     system: {
       type: "maneuver",
       tags: ["careful", "universal", "slow"],
       targetType: "utility",
       defenseType: "",
       yield:"",
       summary:"",
       effect: "Move one space.",
       isUniversal: true,
     },
   },
   {
     name: "Interact",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-A-74.jpg",
     system: {
       type: "maneuver",
       tags: ["universal"],
       targetType: "utility",
       defenseType: "",
       yield:"",
       summary:"",
       effect:`Ineract with an item in reach or with the enviroment. You might:<br>
       • Swap or reload your weapon(s).<br>
       • Open or close a door.<br>
       • Hide behind something.<br>
       • Mount a horse.<br>
       • Suggest another interaction to the GM.<br>
       `,
       isUniversal: true,
     },
   },
   {
     name: "Recovery",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-E-53.jpg",
     system: {
       type: "maneuver",
       tags: ["defensive", "universal"],
       targetType: "melee utility",
       defenseType: "",
       yield:"",
       summary:"",
       effect: "Remove one non-persistent condition from the target.",
       isUniversal: true,
     }
   },
   {
     name: "Feint",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-K-112.PNG",
     system: {
       type: "reaction",
       tags: ["universal"],
       targetType: "utility",
       defense: -2,
       defenseType: "poise",
       yield:"",
       summary:"",
       trigger: "When you use an attack...",
       effect: "Increase the threat of the attak by +4.",
       isUniversal: true,
     }
   },
   {
     name: "Shout Out",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-O-48.jpg",
     system: {
       type: "reaction",
       tags: ["universal", "sound"],
       targetType: "ranged utility",
       defense: -1,
       defenseType: "focus",
       yield:"",
       range: 10,
       summary:"",
       trigger: "Anytime, once per round...",
       effect: "Transfer up to three of your focus to the target (after paying this skill's cost).",
       isUniversal: true,
      }
   },
   {
     name: "Sprint",
     type: "skill",
     img: "systems/forgeoflegends/icons/Skills/Skill-I-66.png",
     system: {
       type: "reaction",
       tags: ["universal"],
       targetType: "utility",
       defense: 0,
       defenseType: "",
       yield:"",
       summary:"",
       trigger: "When you use a non-slow maneuver...",
       effect: "Spend up to three momentum to increase your speed by an equal amount during the maneuver.",
       isUniversal: true,
     }
   }
  ]

  items = items.concat(universal)

  async function generateSummary(item) {
    let html
      await $.get(`/assets/data/${item.type}-summary.hbs`, function(hbs){
        html = Handlebars.compile(hbs)({item});
      })
      return html.replace('systems/forgeoflegends/icons/Skills/','images/skills/');
  }





function registerTooltips(html, oldInstances=[]){
  html.find('a').tooltipster({
    content: "Loading...",
    delay: 500,
    functionPosition: function(instance, helper, position){
      
        // position.coord.top += 10;
        position.coord.left = $("#info").position().left;
        position.coord.top = position.coord.top > 15 ? position.coord.top : 15;
        position.side = "right"
        return position;
    },
    updateAnimation:null,
    minWidth: $("#info").width()*.9,
    maxWidth: $("#info").width()*.9,
    maxHeight: $(window).height()*0.6,
    interactive: true,
    functionBefore: async function(tooltip, data){
      const origin = data.origin

      if ($(origin).hasClass("item")){
        const name = $(origin).data("name")
        const item = items.filter(item => item.name == name)[0]
        tooltip.content($(await generateSummary(item)))

      } else {
        const href = window.location.origin + '/' + origin.getAttribute("href").replace('.html#','/').replace('.html','')+'.html'
  
        await $.get( href, function( page ) {
          const content = $(page).find('#main').length ? $($(page).find('#main')[0].innerHTML) : $(page);
          tooltip.content(content);
        });
  
      }

      registerTooltips($(tooltip.content()), oldInstances.concat(tooltip));
      if (oldInstances.length) keepOpen(oldInstances, tooltip);
      
    }
  });
}



function keepOpen(oldInstances, newInstance){
  // var stop_close = false;
  $(newInstance.elementTooltip()).on("mouseenter", function() {
  stop_close = true;
  });
  newInstance.on('close', function() {
  stop_close = false;
  });
  oldInstances.forEach(function(oldInstance){
    oldInstance.on('close', function(event) {
      if (stop_close) event.stop();
    });
  })
};

registerTooltips($("#main"))





















//Create tooltips
// createTooltips();
// function createTooltips(){
//   keywordDB.forEach(function(keyword){
//     if (keyword.page){
//       $.get(`/${keyword.page}.html`, function(data){
//         var paragraphs = $(data).find(`#${keyword.hash}`).nextUntil('.endtooltip, h1, h2, h3, h4', ':not(blockquote)');
//         var content ='';
//         paragraphs.each(function(){
//           content += $( this )[0].outerHTML;
//         });
//         /*
//         $(`.keyword-${keyword.keyword.replace(' ', '-')}`).tooltip({
//           content: `<blockquote><h2>${keyword.keyword}</h2>${content}</blockquote>`,
//           position: { my: "left top+15", at: "left bottom", collision: "flipfit" },
//           });
//           */
//           $(`.keyword-${keyword.keyword.replace(' ', '-')}`).tooltipster({
//             content: $(`<h2>${keyword.keyword}</h2>${content}`,),
//             theme: 'tooltipster-default',
//             maxWidth: 300,
//             interactive: true
//           });
                  


//       })
//     }
//   });
// }

// //Style keywords function
// function styleKeywords(str, keyword) {
//   var re = new RegExp('^([^]*?)(?<!&nbsp;|/|="|base )(\\b'+keyword.keyword+'s?\\b)(?! dice| die| pool| terrain)', 'gi');
//   var [link,closelink,tooltipClass,icon] = ["", "", "", ""];
//   if (keyword.icon) {
//     icon= `<img src='/images/icons/${keyword.keyword}.png'>`;
//   };
//   if (keyword.page) {
//     tooltipClass = `keyword-${keyword.keyword.replace(' ', '-')}`;
//     link = `<a href="/${keyword.page}.html#${keyword.hash}" title="Click to Follow" class="${tooltipClass}">`;
//     closelink = `</a>`;
//   };
//   return str.replace(re, `$1${link}<strong>${icon} $2</strong>${closelink}`);
// };

// //Render skills function
// function renderSkill(skill) {
//   console.log(skill)
//   var skillTitle = `<h2 class='skillHeader'>${skill.name}</h2>`;
//   var skillPoise = skill.data.poise ? `<img src="images/icons/poise.png" class='skillVigorIcon'>${skill.data.poise}` : '';
//   var skillMomentum = skill.data.momentum ? `<img src="images/icons/momentum.png" class='skillVigorIcon'>${skill.data.momentum}` : '';
//   var skillFocus = skill.data.focus ? `<img src="images/icons/focus.png" class='skillVigorIcon'>${skill.data.focus}` : '';
//   var skillThreat = skill.data.threat ? ` <img src="images/icons/threat.png" class='skillVigorIcon'>${skill.data.threat}` : '';
// var skillHeader = `${skillTitle}${skillPoise}${skillMomentum}${skillFocus}${skillThreat}`;
//   var skillType = skill.data.tags.type;
//   var skillTargetTags = skill.data.tags.targettags;
//   var skillSource = skill.data.tags.source;
//   var skillTags = skill.data.tags.tags;
// var skillTagSummary = `<h3 class='skillTags'>⌛${skillType}🎯${skillTargetTags}🔑${skillSource}📜${skillTags}</h3>`;
//   var skillRequirement = skill.data.requirement ? `<div class='skillBody'><strong>Requirement:</strong>${skill.data.requirement}</div>` : '';
//   var skillTarget = skill.data.target ? `<div class='skillBody'><strong>Target:</strong>${skill.data.target}</div>` : '';
//   var skillEffect = skill.data.effect ? `<div class='skillBody'><strong>Effect:</strong>${skill.data.effect}</div>` : '';
//   var skillDamage = skill.data.damage ? `<div class='skillBody'><strong>Damage:</strong>${skill.data.damage}${skill.data.damagetype}</div>` : '';
//   var skillYield = skill.data.yield ? `<div class='skillBody'><strong>Yield:</strong>${skill.data.yield}</div>` : '';
// var skillBody = `${skillRequirement}${skillTarget}${skillEffect}${skillDamage}${skillYield}`;

// keywordDB.forEach(function(keyword){
//   skillTagSummary = styleKeywords(skillTagSummary, keyword);
//   skillBody = styleKeywords(skillBody, keyword);
// });
// var skillSummary = `<div class='${skill.name}'>${skillHeader}${skillTagSummary}${skillBody}</div>`;
// return skillSummary;
// //document.getElementById('main').insertAdjacentHTML('beforeend', skillSummary);
// };












// //Create skill tooltips
//       var skillName = "Dash"
//       skillData.filter(skill => skill.data.poise == 1).forEach(function(skill){
//         var skillTip = renderSkill(skill)

//       $(`.skill-${skillName}`).tooltip({
//         content: skillTip,
//         position: { my: "left top+15", at: "left bottom", collision: "flipfit" },
//         });
//     });








//-------------------------------------------------------------------------------------------------------
//Filter Skills
//for the skill browser
//-------------------------------------------------------------------------------------------------------
if(window.location.pathname == '/skill-browser.html'){
//Default Filter and Vars
var allSources=['Warrior', 'Weaponmaster', 'Berserker', 'Tactician', 'Monk', 'Rogue', 'Assassin', 'Bard', 'Trickster', 'Acrobat', 'Mage', 'Elementalist', 'Wizard', 'Enchanter', 'Psion', 'Acolyte', 'Paladin', 'Excorcist', 'Necromancer', 'Warlock', 'Shaman', 'Ranger', 'Druid', 'Shapeshifter', 'Beastmaster', 'Artificer', 'Alchemist', 'Battlesmith', 'Demolitionist', 'Mechanist', 'Weapon', 'Monster']
var allTypes=['Action', 'Maneuver', 'Reaction', 'Passive'];
var allTargets=['Melee', 'Ranged', 'Personal', 'Attack', 'Support', 'Point-Blank Area', 'Central Area', 'Area in Range', 'Line'];
var allSliders=['Poise', 'Momentum', 'Focus', 'Threat', 'Range'];
var allVigors=['Poise', 'Momentum', 'Focus'];
var defaultSkillsFilter = {
  "Name": "",
  "Text": "",
  "Source":[],
  "Vigor":[],
  "MaxPoise": "10",
  "MinPoise": "-10",
  "MaxMomentum": "10",
  "MinMomentum": "-10",
  "MaxFocus": "10",
  "MinFocus": "-10",
  "MaxThreat": "30",
  "MinThreat": "0",
  "Type":[],
  "Targetany":[],
  "Targetall":[],
  "MaxRange": "20",
  "MinRange": "0",
  "Tags(any)":[],
  "Tags(all)":[],
  "Other":[],
  "Conditions":[]
};

var skillsFilterJSON = defaultSkillsFilter



//Filter Skills
function filterSkills(skillsFilter) {
  var filteredSkills =[];
  var filtered = [];
  var Name = skillsFilter.Name;
  var Source = skillsFilter.Source;
  if (!Source.length){
    Source = allSources
  }
  console.log(Source)
  var Vigor = skillsFilter.Vigor;
  var Type = skillsFilter.Type;
  var Target = skillsFilter.Targetany;
  var MaxThreat = skillsFilter.MaxThreat
  var MinThreat = skillsFilter.MinThreat
//Name
filtered = skillData.filter(function(skill) {
      if (skill.name.toLowerCase().includes(Name.toLowerCase())) {return true}
      else{return false}
});
//Source
  filtered = filtered.filter(function(skill) {
    for (element of Source) {
        if (skill.data.tags.source.includes(element)) {return true}
    } return false
  });
//Type
  if (Type.length){
    filtered = filtered.filter(function(skill) {
      for (element of Type) {
          if (skill.data.tags.type.includes(element)) {return true}
      }
      return false
    });
  };
//Target
if (Target.length){
  filtered = filtered.filter(function(skill) {
    for (element of Target) {
      console.log(skill.data.tags.targettags)
        if (skill.data.tags.targettags.includes(element)) {return true}
    }
    return false
  });
};
//Vigor
    if (Vigor.length){
      filtered = filtered.filter(function(skill) {
        for (element of Vigor) {
          var vigor = element.toLowerCase()
          var skillVigor = skill.data[vigor]
          var max = skillsFilter['Max'+element]
          var min = skillsFilter['Min'+element]
            if (skillVigor && (
              (skillVigor <= max && skillVigor >= min) ||
              (max == defaultSkillsFilter['Max'+element] && skillVigor >= min) ||
              (min == defaultSkillsFilter['Min'+element] && skillVigor <= max)
            )
            )
            {return true}
        }
        return false
      });
  };
//Threat
  if (MaxThreat != defaultSkillsFilter['MaxThreat'] || MinThreat != defaultSkillsFilter['MinThreat']){
    filtered = filtered.filter(function(skill) {
      if (skill.data.threat <= MaxThreat && skill.data.threat >= MinThreat)
      {return true}
      return false
    });
  };
//Render
  writeHash(skillsFilter);
  filtered.forEach(function(skill){
    filteredSkills.push(renderSkill(skill));
  });
  filteredSkills.sort()
  return filteredSkills;
};



//Display Skills
    function displaySkills(skills) {
    var content = '';
    skills.forEach(function(skill){
      content += skill
    });
    $("#skillList").html(content);
    };

//-------------------------------------------------------------------------------------------------------
//UI
//checkboxes, sliders, buttons...
//-------------------------------------------------------------------------------------------------------

//Reset Button
$("#reset").click(function(){
  window.location.hash = '';
  location.reload(true);
});

//Name Text
$("#namesearch").change(function(){
  skillsFilterJSON['Name'] = $('#namesearch').val();
  displaySkills(filterSkills(skillsFilterJSON));
});

//Source Checkboxes
allSources.forEach(function(source){
  $(`#${source}check`).click(function(){
    if($(this).is(":checked")){
      skillsFilterJSON['Source'].push(source)
      displaySkills(filterSkills(skillsFilterJSON));
    }
    else if($(this).is(":not(:checked)")){
      var index = skillsFilterJSON['Source'].indexOf(source);
      skillsFilterJSON['Source'].splice(index, 1);
      displaySkills(filterSkills(skillsFilterJSON));
    }
  });
});

//Type Checkboxes
allTypes.forEach(function(type){
  $(`#${type}check`).click(function(){
    if($(this).is(":checked")){
      skillsFilterJSON['Type'].push(type)
      displaySkills(filterSkills(skillsFilterJSON));
    }
    else if($(this).is(":not(:checked)")){
      var index = skillsFilterJSON['Type'].indexOf(type);
      skillsFilterJSON['Type'].splice(index, 1);
      displaySkills(filterSkills(skillsFilterJSON));

    }
  });
});


//Target Checkboxes
allTargets.forEach(function(target){
  $(`#${target}check`).click(function(){
    if($(this).is(":checked")){
      skillsFilterJSON['Targetany'].push(target)
      displaySkills(filterSkills(skillsFilterJSON));
    }
    else if($(this).is(":not(:checked)")){
      var index = skillsFilterJSON['Targetany'].indexOf(target);
      skillsFilterJSON['Targetany'].splice(index, 1);
      displaySkills(filterSkills(skillsFilterJSON));

    }
  });
});



//Vigor Checkboxes
allVigors.forEach(function(source){
  $(`#${source}check`).click(function(){
    if($(this).is(":checked")){
      skillsFilterJSON['Vigor'].push(source)
      $(`#${source}Slider`).slider('enable');
      displaySkills(filterSkills(skillsFilterJSON));
    }
    else if($(this).is(":not(:checked)")){
      var index = skillsFilterJSON['Vigor'].indexOf(source);
      skillsFilterJSON['Vigor'].splice(index, 1);
      $(`#${source}Slider`).slider('disable');
      displaySkills(filterSkills(skillsFilterJSON));
    }
  });
});

//Sliders
  allSliders.forEach(function(slider){
    $(function () {
      $(`#${slider}Slider`).slider({
        range: true,
        min: -10,
        max: 10,
        values: [-10, 10],
        slide: function (event, ui) {
          $(`#${slider}Slider`).find(".ui-slider-handle:first").text(ui.values[ 0 ]);
          $(`#${slider}Slider`).find(".ui-slider-handle:last").text(ui.values[ 1 ]);
        },
        stop: function (event, ui) {
          skillsFilterJSON[`Min${slider}`] = String(ui.values[ 0 ]);
          skillsFilterJSON[`Max${slider}`] = String(ui.values[ 1 ]);
          displaySkills(filterSkills(skillsFilterJSON));
      }
    });
  });
});
$(`#ThreatSlider`).slider("option", "min", 0);
$(`#ThreatSlider`).slider("option", "max", 30);
$(`#RangeSlider`).slider("option", "min", 0);
$(`#RangeSlider`).slider("option", "max", 20);




//-------------------------------------------------------------------------------------------------------
//Read & Write Hash
//for saving and loading from the url
//-------------------------------------------------------------------------------------------------------
skillsFilterJSON = readHash(hashtoJSON(window.location.hash));
displaySkills(filterSkills(skillsFilterJSON));

//Hash to JSON
function hashtoJSON(hash){
  hash = `{"`+
    hash
    .replace(/\#/g,'')
    .replace(/:/g, "\":\[\"")
    .replace(/,/g, "\",\"")
    .replace(/=/g, "\":\"")
    .replace(/;/g, "\"],\"")
    .replace(/\"\"/g, "")
    +"}";
  hash = hash
    .replace(/,\"\}/g, "}")
    .replace(/([^\]])}/g, '$1"}')
    .replace(/\{\"?\"?\}/g, "{}");
  try {hash = JSON.parse(hash);}
  catch(e) {alert("There is an error with the selected search paramaters. Please press the reset button and try again.");}
  return hash;
};

//Read Hash
function readHash(hashFilter){
  //Set Default
  for (const [key] of Object.entries(defaultSkillsFilter)) {
    if (typeof hashFilter[key] === 'undefined'){
      hashFilter[key] = defaultSkillsFilter[key];
    };
    //Checkboxes
    if (Array.isArray(hashFilter[key])){
      hashFilter[key].forEach(function(source){
        $( `#${source}check` ).prop( "checked", true );
      });
    };
  };
  //Name
  $('#namesearch').val(hashFilter["Name"]);

  //Sliders
  allSliders.forEach(function(slider){
    $(`#${slider}Slider`).slider("values", 0, hashFilter[`Min${slider}`]||defaultSkillsFilter[`Min${slider}`]);
    $(`#${slider}Slider`).slider("values", 1, hashFilter[`Max${slider}`]||defaultSkillsFilter[`Max${slider}`]);
    $(`#${slider}Slider`).find(".ui-slider-handle:first").text($(`#${slider}Slider`).slider("values", 0));
    $(`#${slider}Slider`).find(".ui-slider-handle:last").text($(`#${slider}Slider`).slider("values", 1));
  });
  allVigors.forEach(function(vigor){
    if (hashFilter['Vigor'].includes(vigor)){
        $(`#${vigor}Slider`).slider('enable');
    } else{
      $(`#${vigor}Slider`).slider('disable');
    }
  });
  return hashFilter;
};

//Write Hash
function writeHash(skillsFilter){
  var activeFilter = jQuery.extend(true, { }, skillsFilter)
  for (const [key] of Object.entries(activeFilter)) {
    if (defaultSkillsFilter[key] == activeFilter[key] || !activeFilter[key].length ){
      delete activeFilter[key];
    };
  };
  filtered = JSON.stringify(activeFilter)
    .replace(/\"\:\[\"?/g, ":")
    .replace(/\"?],?\"?/g, ";")
    .replace(/\":/g, "=")
    .replace(/[\{\\}]\"?|\"/g, "");
  window.location.hash = filtered;
};


}; //End of Filter Skills


}); //End of DB and keyword



const icons = [
  "action",
  "bleeding",
  "blessed",
  "blinded",
  "burning",
  "chilled",
  "choking",
  "compelled",
  "confused",
  "corroding",
  "cursed",
  "dazed",
  "deafened",
  "defense",
  "defenseless",
  "distracted",
  "drunk",
  "empowered",
  "encumbered",
  "evasive",
  "exposed",
  "flatfoted",
  "focus",
  "frightened",
  "fumbling",
  "grabbed",
  "guarded",
  "hastened",
  "hidden",
  "honed",
  "initiative",
  "invisible",
  "kneeling",
  "knocked-down",
  "maneuver",
  "momentum",
  "oiled",
  "passive",
  "petrified",
  "poise",
  "provoked",
  "reaction",
  "reeling",
  "relaxed",
  "retrained",
  "shocked",
  "slowed",
  "staggered",
  "stunned",
  "surprised",
  "threat",
  "unbalanced",
  "unconscious",
  "vortexed",
  "weakened",
  "wet",
  "wracked"
]

$('#main a').each(async function( index ) {
  const href = this.href
  var re = new RegExp(`(.+?)#(.+)`,"mi");
  const id = href.replace(re, '$2');

  if (icons.includes(id)){
    $(this).prepend(`<img src='images/icons/${id}.png' class='inline-icon'> `)
  }

})

$('#main h3').each(async function( index ) {
  const id = this.id
  if (icons.includes(id)){
    $(this).prepend(`<img src='images/icons/${id}.png' class='inline-icon'> `)
  }

})













/*
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
        })
        paragraphs.html(function (i, html){
        

        
        
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

*/    

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






//$('blockquote p:first-of-type img').addClass( "quoteimg" );






});

