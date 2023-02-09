
// $(document).ready(function(){

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





Handlebars.registerHelper('plusSign', function(number) {
  if (number > 0) {
  return '+'+ number
  } else {
  return number
  }
});

Handlebars.registerHelper('sum', function(num1, num2) {
  return num1 + num2; 
});

Handlebars.registerHelper('getCunning', function(tag) {
  return ForgeOfLegends.cunningEffects[tag]?`<li>${ForgeOfLegends.cunningEffects[tag]}</li>`: '';
});

$.get(`systems/forgeoflegends/templates/grid-item.hbs`, function(hbs){
  Handlebars.registerPartial('systems/forgeoflegends/templates/grid-item.hbs', hbs)
})

$.get(`systems/forgeoflegends/templates/grid-effect.hbs`, function(hbs){
  Handlebars.registerPartial('systems/forgeoflegends/templates/grid-effect.hbs', hbs)
})


  try {var map = L.map('map')?.setView([0, 0], 1);} catch(err) {}

  if (map){
      L.tileLayer('images/test/{z}/{x}/{y}.png', {
        maxZoom: 2,
        minZoom: 1,
        noWrap: true
    }).addTo(map);
    
    var marker = L.marker([51.5, -0.09]).addTo(map);
  }

// });




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
  "restrained",
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
];


$('#main a, #main h3').each(async function() {
  const href = this.href
  var re = new RegExp(`(.+?)#(.+)`,"mi");
  const id = this.id || href?.replace(re, '$2');

  if (icons.includes(id)){
    $(this).prepend(`<img src='systems/forgeoflegends/icons/rules/${id}.png' class='inline-icon'> `)
  }
})

const classes = [
  "battlemaster",
  "berserker",
  "monk",
  "assassin",
  "bard",
  "trickster",
  "elementalist",
  "wizard",
  "enchanter",
  "paladin",
  "shaman",
  "geomancer",
  "shapeshifter",
  "beastmaster"
];




const universal = [
  {
    uuid: "Item.Act",
    name: "Act",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-A-52.jpg",
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
   uuid: "Item.Interact",
    name: "Interact",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-A-74.jpg",
    system: {
      type: "maneuver",
      tags: ["universal"],
      targetType: "utility",
      defenseType: "",
      yield:"",
      summary:"",
      effect:`Ineract with an item in reach with the enviroment, or with a friendly character. You might:<br>
      • Remove one non-persistent condition from yourself or an ally in reach.<br>
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
   uuid: "Item.Dash",
    name: "Dash",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-A-79.png",
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
   uuid: "Item.Shift",
    name: "Shift",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-A-25.png",
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
    uuid: "Item.Defend",
    name: "Defend",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-C-21.jpg",
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
    uuid: "Item.Kick",
     name: "Kick",
     type: "skill",
     img: "systems/forgeoflegends/icons/skills/skill-G-138.jpg",
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
    uuid: "Item.Grab",
    name: "Grab",
    type: "skill",
    img: "systems/forgeoflegends/icons/skills/skill-A-32.png",
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
    uuid: "Item.Feint",
     name: "Feint",
     type: "skill",
     img: "systems/forgeoflegends/icons/skills/skill-K-112.PNG",
     system: {
       type: "reaction",
       tags: ["universal"],
       targetType: "utility",
       defense: -2,
       defenseType: "poise",
       yield:"",
       summary:"",
       effect: "Trigger: When you use an attack... Increase the threat of the attak by +4.",
       isUniversal: true,
     }
   },
   {
    uuid: "Item.Shout",
     name: "Shout Out",
     type: "skill",
     img: "systems/forgeoflegends/icons/skills/skill-O-48.jpg",
     system: {
       type: "reaction",
       tags: ["universal", "sound"],
       targetType: "ranged utility",
       defense: -1,
       defenseType: "focus",
       yield:"",
       range: 10,
       summary:"",
       effect: "Trigger: Anytime, once per round... Transfer up to three of your focus to the target (after paying this skill's cost).",
       isUniversal: true,
      }
   },
   {
    uuid: "Item.Sprint",
     name: "Sprint",
     type: "skill",
     img: "systems/forgeoflegends/icons/skills/skill-I-66.png",
     system: {
       type: "reaction",
       tags: ["universal"],
       targetType: "utility",
       defense: 0,
       defenseType: "",
       yield:"",
       summary:"",
       effect: "Trigger: When you use a maneuver... Spend up to three momentum to increase your speed by an equal amount during the maneuver.",
       isUniversal: true,
     }
   }
 ];














const ForgeOfLegends = {
  itemSummary: async function (item) {
    const system = item.system;
   if(item.type == 'item'){
        system.skillDocuments = system.skills.map(function(skillData, index){
            return fromUuidSync(skillData?.uuid)||
            {
                img:"systems/forgeoflegends/icons/skills/not-found.png",
                name:`<span style="color:red;>${system.skills[index]?.name}</span>`
            };
        });

        system.isArmor = system.tags.includes('armor');
        system.isWeapon = system.tags.includes('weapon');
        system.isLoading = system.tags.includes('loading');
        system.isPocket = system.tags.includes('pocket');
        system.isOnehanded = system.tags.includes('one-handed');
        system.isTwohanded = system.tags.includes('two-handed');
        system.isZoc = system.tags.includes('zoc');
      } else if (item.type == 'skill'){
        system.isAttack = system.targetType.includes("attack");
        
			  system.isUtility = system.targetType.includes("utility") || system.targetType.includes("support");
        system.isMelee = system.targetType.includes("melee");
        system.isRanged = system.targetType.includes("ranged");
        system.isAction = (system.type == "action");
        system.isManeuver = (system.type == "maneuver");
        system.isReaction = (system.type == "reaction");
        system.isPassive = (system.type == "passive");
        system.isUniversal = system.tags.includes("universal");
        system.isSlow = system.tags.includes("slow");

    }

    let html
      await $.get(`systems/forgeoflegends/templates/${item.type}-summary.hbs`, function(hbs){
        html = Handlebars.compile(hbs)({item});
      })
      return html;
  },
  openDocument:function(){return},
  cunningEffects: {},
  items:[],
  icons,
  classes,
  getRule:async function (origin){
    
    const path = origin.attr("href")?.replace(/(.+?).html#?(.?)/gi, '$1/$2') || ForgeOfLegends.processPath(origin.text());
    let content = "";
    let key =""

    await $.get( "sitemap.xml", function(doc,state,response) {
      const text = response.responseText;
      const regex = /https?:\/\/(.+?)\/(.+?).html/g;
      const pages = [...text.matchAll(regex)].map(x => x[2]);
      key = pages.find(page => 
        page == path ||
        page.split('/')[1] == path ||
        page.split('/')[1] == path+ 's' ||
        page.split('/')[1] == path+ "'s" ||
        page.split('/')[1] == path+ 'ing' ||
        page.split('/')[1] == path+ 'ed' ||
        page == path.slice(0,-1)
      )

    })
    const href = window.location.origin + '/' + key + '.html'
    await $.get( href, function( page ) {
      content = $(page).find('#main').length ? $($(page).find('#main')[0].innerHTML) : $(page);
    });
    return content;

  },
  processPath: function (str){
    return str.toLowerCase().replace(/ \b/,'-').replace(/\W\B/,'');
  },
  registerTooltips,
}



const damageTags = [
  "slashing",
  "piercing",
  "blunt",
  "fire",
  "lightning",
  "ice",
  "water",
  "air",
  "earth",
  "caustic",
  "oil",
  "plant",
  "holy",
  "unholy",
  "mental",
  "sound",
  "sight",
  "barehanded",
]

for (const tag of damageTags){
  const href = window.location.origin + '/skills/' + tag +'.html';
  $.get( href, function( page ) {
    ForgeOfLegends.cunningEffects[tag] = `<strong class="keyword">${$(page)[0].innerHTML} </strong> ${$(page)[$(page).length-1].innerHTML}`;
  });
}







function registerTooltips(html){

  html.find('.item-card p [data-mce-style="text-decoration: underline;"]').removeAttr("style").addClass('keyword');

  html.find(`.keyword:not(.tooltipstered), .item:not(.tooltipstered), .skill:not(.tooltipstered)`).each(function(){
  const path = ForgeOfLegends.processPath($(this).text())
  if (icons.includes(path)) $(this).prepend(`<img src='systems/forgeoflegends/icons/rules/${path}.png' class='inline-icon'>`);
  if (icons.includes(path.slice(0,-1))) $(this).prepend(`<img src='systems/forgeoflegends/icons/rules/${path.slice(0,-1)}.png' class='inline-icon'>`);
  const item = ForgeOfLegends.items.find(item => item.name && item.name == $(this).data("name"));
  if (item) $(this).prepend(`<img src='${item.img}' class='inline-icon'>`).addClass("item").data("uuid",item.uuid).data("document-id",item._id);
  }).tooltipster({
    content: "Loading...",
    delay:  [500,500],
    updateAnimation:null,
    minWidth: $("#info").width()*.9,
    maxWidth: $("#info").width()*.9,
    trigger: "custom",
    triggerClose: {
      click: true,
      mouseleave: true,
      originClick: false,
      scroll: false,
      tap: true,
      touchleave: true
  },
  triggerOpen: {
      click: true,
      hover: true,
      mouseenter: true,
      tap: true,
      touchstart: true
  },
    interactive: true,
    arrow: false,
    functionPosition,
    functionBefore,
    functionReady,
    functionAfter,
  });

  // html.find('.show').tooltipster('show')
}

function functionPosition(instance, helper, position){
    position.coord.left = $("#info").position().left;
    position.side = "";
    if ($(helper.origin).parents('#main').length){
      position.coord.top = position.coord.top > 15 ? position.coord.top+30 : 15;
      // position.side = "right";
    }
    return position;
};

function functionReady(tooltip, data){

  // if ($(data.origin).is(".show")){
  //   $(data.origin).parent().css({
  //     display: "grid",
  //     ["grid-template-columns"]: $(data.origin).parents('.tooltipster-base').length || $(window).width() < 880?"100%":"50% 50%",
  //     ["justify-items"]: "center",
  //     ["row-gap"]: "1em",
  //   }).addClass('shown-tooltip-items')

  //   // $(data.tooltip).insertAfter($(data.origin)).css({
  //   //   left: "auto",
  //   //   top: "auto",
  //   //   width: "95%",
  //   //   ["min-width"]: "auto",
  //   //   ["max-width"]: "auto",
  //   //   height: "auto",
  //   //   position: "relative",
  //   // })

  //   // $(data.origin).replaceWith($(data.tooltip).css({
  //   //   left: "auto",
  //   //   top: "auto",
  //   //   width: "95%",
  //   //   ["min-width"]: "auto",
  //   //   ["max-width"]: "auto",
  //   //   height: "auto",
  //   //   position: "relative",
  //   // }))
  // }

  // if ($(data.tooltip).is(".shown-tooltip-items > *:nth-child(2n-1):nth-last-of-type(1)")) console.log("ASD")

  $(data.tooltip).css({
    height: "auto",
  })

};

async function functionBefore(tooltip, data){
  const origin = $(data.origin)

  if (origin.is('.item, .skill')){
    const uuid = origin.data('uuid') || "Item."+origin.data('document-id');
    const item = ForgeOfLegends.items.find(el => el.uuid == uuid) || fromUuidSync(uuid);
    const actor = fromUuidSync(origin.data('actorUuid'));
    const content = await ForgeOfLegends.itemSummary(item, actor);
    if (item) tooltip.content($(`<div>${content}</div>`));
  } else {
    const content = await ForgeOfLegends.getRule(origin)
    await tooltip.content(content);
  };

  if (!tooltip?.content()?.length) return;

  tooltip?.content()?.find('.item, .skill').click(function (event){
    const target = $(event.currentTarget).data('uuid');
    ForgeOfLegends.openDocument(target);
  });
  
  tooltip?.content()?.find('.keyword').click(function (event){
    const path = $(event.currentTarget).data('path') || $(event.currentTarget).data('roll');
    const rule = ForgeOfLegends.rules.find(rule => rule.flags.forgeoflegends.path == path);
    ForgeOfLegends.openDocument(rule.uuid);
  });

  ForgeOfLegends.registerTooltips($(tooltip.content()));

  tooltip.on('close', function(event) {
    // if ($(data.origin).is('.show')) event.stop();
  });

  const parentId = $(data.origin).parents('.tooltipster-base').attr('id');
  const parentTooltip = $.tooltipster.instances().find(instance => instance.__namespace == parentId)
  parentTooltip?.on('close', function(event) {
    if (
      $(`#${tooltip?.__namespace}:hover`).length != 0 ||
      $(`#${parentTooltip?.__namespace}:hover`).length != 0
      )
      event.stop();
  });

		const scale = (tooltip?.content().find('.scale-text').width())/tooltip?.content().find('.item-card').width()
		const fontSize = parseInt(tooltip?.content().find('.scale-text').css('font-size'))
	  
		tooltip?.content().find('.scale-text').css({
		  fontSize: Math.min((fontSize)/scale, fontSize),
		  lineHeight:1
		});
	  

}

function functionAfter(tooltip, data){
  const parentId = $(data.origin).parents('.tooltipster-base').attr('id');
  const parentTooltip = $.tooltipster.instances().find(instance => instance.__namespace == parentId)
  parentTooltip?.close()
}

function fromUuidSync(uuid){
  return ForgeOfLegends.items.find(item => item._id == uuid?.split(".")[1]);
}





$.get("systems/forgeoflegends/packs/items.db", function(items){
  items = "["+items.replace(/}\n/g, "},");
  items = items.substring(0, items.length - 1)  + "]";
  items = JSON.parse(items);
  items = items.concat(universal)
  ForgeOfLegends.items = items;
  ForgeOfLegends.registerTooltips($("#main"))

  $(".show").parent().css({
      display: "grid",
      ["grid-template-columns"]: $(this).parents('.tooltipster-base').length || $(window).width() < 880?"100%":"50% 50%",
      ["justify-items"]: "center",
      ["row-gap"]: "1em",
    }).addClass('shown-tooltip-items')


});



























//   //-------------------------------------------------------------------------------------------------------
// //Filter Skills
// //for the skill browser
// //-------------------------------------------------------------------------------------------------------
// if(window.location.pathname == '/skill-browser.html'){
//   //Default Filter and Vars
//   var allSources=['Warrior', 'Weaponmaster', 'Berserker', 'Tactician', 'Monk', 'Rogue', 'Assassin', 'Bard', 'Trickster', 'Acrobat', 'Mage', 'Elementalist', 'Wizard', 'Enchanter', 'Psion', 'Acolyte', 'Paladin', 'Excorcist', 'Necromancer', 'Warlock', 'Shaman', 'Ranger', 'Druid', 'Shapeshifter', 'Beastmaster', 'Artificer', 'Alchemist', 'Battlesmith', 'Demolitionist', 'Mechanist', 'Weapon', 'Monster']
//   var allTypes=['Action', 'Maneuver', 'Reaction', 'Passive'];
//   var allTargets=['Melee', 'Ranged', 'Personal', 'Attack', 'Support', 'Point-Blank Area', 'Central Area', 'Area in Range', 'Line'];
//   var allSliders=['Poise', 'Momentum', 'Focus', 'Threat', 'Range'];
//   var allVigors=['Poise', 'Momentum', 'Focus'];
//   var defaultSkillsFilter = {
//     "Name": "",
//     "Text": "",
//     "Source":[],
//     "Vigor":[],
//     "MaxPoise": "10",
//     "MinPoise": "-10",
//     "MaxMomentum": "10",
//     "MinMomentum": "-10",
//     "MaxFocus": "10",
//     "MinFocus": "-10",
//     "MaxThreat": "30",
//     "MinThreat": "0",
//     "Type":[],
//     "Targetany":[],
//     "Targetall":[],
//     "MaxRange": "20",
//     "MinRange": "0",
//     "Tags(any)":[],
//     "Tags(all)":[],
//     "Other":[],
//     "Conditions":[]
//   };
  
//   var skillsFilterJSON = defaultSkillsFilter
  
  
  
//   //Filter Skills
//   function filterSkills(skillsFilter) {
//     var filteredSkills =[];
//     var filtered = [];
//     var Name = skillsFilter.Name;
//     var Source = skillsFilter.Source;
//     if (!Source.length){
//       Source = allSources
//     }
//     console.log(Source)
//     var Vigor = skillsFilter.Vigor;
//     var Type = skillsFilter.Type;
//     var Target = skillsFilter.Targetany;
//     var MaxThreat = skillsFilter.MaxThreat
//     var MinThreat = skillsFilter.MinThreat
//   //Name
//   filtered = skillData.filter(function(skill) {
//         if (skill.name.toLowerCase().includes(Name.toLowerCase())) {return true}
//         else{return false}
//   });
//   //Source
//     filtered = filtered.filter(function(skill) {
//       for (element of Source) {
//           if (skill.data.tags.source.includes(element)) {return true}
//       } return false
//     });
//   //Type
//     if (Type.length){
//       filtered = filtered.filter(function(skill) {
//         for (element of Type) {
//             if (skill.data.tags.type.includes(element)) {return true}
//         }
//         return false
//       });
//     };
//   //Target
//   if (Target.length){
//     filtered = filtered.filter(function(skill) {
//       for (element of Target) {
//         console.log(skill.data.tags.targettags)
//           if (skill.data.tags.targettags.includes(element)) {return true}
//       }
//       return false
//     });
//   };
//   //Vigor
//       if (Vigor.length){
//         filtered = filtered.filter(function(skill) {
//           for (element of Vigor) {
//             var vigor = element.toLowerCase()
//             var skillVigor = skill.data[vigor]
//             var max = skillsFilter['Max'+element]
//             var min = skillsFilter['Min'+element]
//               if (skillVigor && (
//                 (skillVigor <= max && skillVigor >= min) ||
//                 (max == defaultSkillsFilter['Max'+element] && skillVigor >= min) ||
//                 (min == defaultSkillsFilter['Min'+element] && skillVigor <= max)
//               )
//               )
//               {return true}
//           }
//           return false
//         });
//     };
//   //Threat
//     if (MaxThreat != defaultSkillsFilter['MaxThreat'] || MinThreat != defaultSkillsFilter['MinThreat']){
//       filtered = filtered.filter(function(skill) {
//         if (skill.data.threat <= MaxThreat && skill.data.threat >= MinThreat)
//         {return true}
//         return false
//       });
//     };
//   //Render
//     writeHash(skillsFilter);
//     filtered.forEach(function(skill){
//       filteredSkills.push(renderSkill(skill));
//     });
//     filteredSkills.sort()
//     return filteredSkills;
//   };
  
  
  
//   //Display Skills
//       function displaySkills(skills) {
//       var content = '';
//       skills.forEach(function(skill){
//         content += skill
//       });
//       $("#skillList").html(content);
//       };
  
//   //-------------------------------------------------------------------------------------------------------
//   //UI
//   //checkboxes, sliders, buttons...
//   //-------------------------------------------------------------------------------------------------------
  
//   //Reset Button
//   $("#reset").click(function(){
//     window.location.hash = '';
//     location.reload(true);
//   });
  
//   //Name Text
//   $("#namesearch").change(function(){
//     skillsFilterJSON['Name'] = $('#namesearch').val();
//     displaySkills(filterSkills(skillsFilterJSON));
//   });
  
//   //Source Checkboxes
//   allSources.forEach(function(source){
//     $(`#${source}check`).click(function(){
//       if($(this).is(":checked")){
//         skillsFilterJSON['Source'].push(source)
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//       else if($(this).is(":not(:checked)")){
//         var index = skillsFilterJSON['Source'].indexOf(source);
//         skillsFilterJSON['Source'].splice(index, 1);
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//     });
//   });
  
//   //Type Checkboxes
//   allTypes.forEach(function(type){
//     $(`#${type}check`).click(function(){
//       if($(this).is(":checked")){
//         skillsFilterJSON['Type'].push(type)
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//       else if($(this).is(":not(:checked)")){
//         var index = skillsFilterJSON['Type'].indexOf(type);
//         skillsFilterJSON['Type'].splice(index, 1);
//         displaySkills(filterSkills(skillsFilterJSON));
  
//       }
//     });
//   });
  
  
//   //Target Checkboxes
//   allTargets.forEach(function(target){
//     $(`#${target}check`).click(function(){
//       if($(this).is(":checked")){
//         skillsFilterJSON['Targetany'].push(target)
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//       else if($(this).is(":not(:checked)")){
//         var index = skillsFilterJSON['Targetany'].indexOf(target);
//         skillsFilterJSON['Targetany'].splice(index, 1);
//         displaySkills(filterSkills(skillsFilterJSON));
  
//       }
//     });
//   });
  
  
  
//   //Vigor Checkboxes
//   allVigors.forEach(function(source){
//     $(`#${source}check`).click(function(){
//       if($(this).is(":checked")){
//         skillsFilterJSON['Vigor'].push(source)
//         $(`#${source}Slider`).slider('enable');
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//       else if($(this).is(":not(:checked)")){
//         var index = skillsFilterJSON['Vigor'].indexOf(source);
//         skillsFilterJSON['Vigor'].splice(index, 1);
//         $(`#${source}Slider`).slider('disable');
//         displaySkills(filterSkills(skillsFilterJSON));
//       }
//     });
//   });
  
//   //Sliders
//     allSliders.forEach(function(slider){
//       $(function () {
//         $(`#${slider}Slider`).slider({
//           range: true,
//           min: -10,
//           max: 10,
//           values: [-10, 10],
//           slide: function (event, ui) {
//             $(`#${slider}Slider`).find(".ui-slider-handle:first").text(ui.values[ 0 ]);
//             $(`#${slider}Slider`).find(".ui-slider-handle:last").text(ui.values[ 1 ]);
//           },
//           stop: function (event, ui) {
//             skillsFilterJSON[`Min${slider}`] = String(ui.values[ 0 ]);
//             skillsFilterJSON[`Max${slider}`] = String(ui.values[ 1 ]);
//             displaySkills(filterSkills(skillsFilterJSON));
//         }
//       });
//     });
//   });
//   $(`#ThreatSlider`).slider("option", "min", 0);
//   $(`#ThreatSlider`).slider("option", "max", 30);
//   $(`#RangeSlider`).slider("option", "min", 0);
//   $(`#RangeSlider`).slider("option", "max", 20);
  
  
  
  
//   //-------------------------------------------------------------------------------------------------------
//   //Read & Write Hash
//   //for saving and loading from the url
//   //-------------------------------------------------------------------------------------------------------
//   skillsFilterJSON = readHash(hashtoJSON(window.location.hash));
//   displaySkills(filterSkills(skillsFilterJSON));
  
//   //Hash to JSON
//   function hashtoJSON(hash){
//     hash = `{"`+
//       hash
//       .replace(/\#/g,'')
//       .replace(/:/g, "\":\[\"")
//       .replace(/,/g, "\",\"")
//       .replace(/=/g, "\":\"")
//       .replace(/;/g, "\"],\"")
//       .replace(/\"\"/g, "")
//       +"}";
//     hash = hash
//       .replace(/,\"\}/g, "}")
//       .replace(/([^\]])}/g, '$1"}')
//       .replace(/\{\"?\"?\}/g, "{}");
//     try {hash = JSON.parse(hash);}
//     catch(e) {alert("There is an error with the selected search paramaters. Please press the reset button and try again.");}
//     return hash;
//   };
  
//   //Read Hash
//   function readHash(hashFilter){
//     //Set Default
//     for (const [key] of Object.entries(defaultSkillsFilter)) {
//       if (typeof hashFilter[key] === 'undefined'){
//         hashFilter[key] = defaultSkillsFilter[key];
//       };
//       //Checkboxes
//       if (Array.isArray(hashFilter[key])){
//         hashFilter[key].forEach(function(source){
//           $( `#${source}check` ).prop( "checked", true );
//         });
//       };
//     };
//     //Name
//     $('#namesearch').val(hashFilter["Name"]);
  
//     //Sliders
//     allSliders.forEach(function(slider){
//       $(`#${slider}Slider`).slider("values", 0, hashFilter[`Min${slider}`]||defaultSkillsFilter[`Min${slider}`]);
//       $(`#${slider}Slider`).slider("values", 1, hashFilter[`Max${slider}`]||defaultSkillsFilter[`Max${slider}`]);
//       $(`#${slider}Slider`).find(".ui-slider-handle:first").text($(`#${slider}Slider`).slider("values", 0));
//       $(`#${slider}Slider`).find(".ui-slider-handle:last").text($(`#${slider}Slider`).slider("values", 1));
//     });
//     allVigors.forEach(function(vigor){
//       if (hashFilter['Vigor'].includes(vigor)){
//           $(`#${vigor}Slider`).slider('enable');
//       } else{
//         $(`#${vigor}Slider`).slider('disable');
//       }
//     });
//     return hashFilter;
//   };
  
//   //Write Hash
//   function writeHash(skillsFilter){
//     var activeFilter = jQuery.extend(true, { }, skillsFilter)
//     for (const [key] of Object.entries(activeFilter)) {
//       if (defaultSkillsFilter[key] == activeFilter[key] || !activeFilter[key].length ){
//         delete activeFilter[key];
//       };
//     };
//     filtered = JSON.stringify(activeFilter)
//       .replace(/\"\:\[\"?/g, ":")
//       .replace(/\"?],?\"?/g, ";")
//       .replace(/\":/g, "=")
//       .replace(/[\{\\}]\"?|\"/g, "");
//     window.location.hash = filtered;
//   };
  
  
//   }; //End of Filter Skills
  
  